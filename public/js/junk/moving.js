var planetData = [
  {
    name: "sun",
    size: 50,
    colour: "#FFE7A3"
  },
  {
    name: "mercury",
    size: 2,
    colour: "#606265"
  },
  {
    name: "venus",
    size: 3,
    colour: "#FEAB65"
  },
  {
    name: "earth",
    size: 4,
    colour: "#00B9E4"
  },
  {
    name: "mars",
    size: 3.5,
    colour: "#FE002D"
  },
  {
    name: "jupiter",
    size: 7,
    colour: "#FF9625"
  },
  {
    name: "saturn",
    size: 5,
    colour: "#DAA613"
  },
  {
    name: "uranus",
    size: 5,
    colour: "#0096A8"
  },
  {
    name: "neptune",
    size: 4,
    colour: "#00D79C"
  },
]

function tbd() {
  var page = document.getElementsByClassName('page');
  while (page[0]) {
      page[0].parentNode.removeChild(page[0]);
  }

d3.select("body").transition(d3.transition()
  .duration(1000)).style("background-color", "#07191D");

var svg = d3.select(".inner-content")
  .append("svg")
    .style('fill', 'white')
    .attr("width", '1000px')
    .attr("height", '1000px')
    .classed("info", true)
    .attr('overflow', 'visible')
  .append("g")
    .attr("transform", "translate(150, 150)")

  var rScale = d3.scaleSqrt()
    .domain([0, d3.max(planetData, d => d.size)])
    .range([0, 40]);

  var simulation = d3.forceSimulation()
    .force('collide', d3.forceCollide(d => rScale(d.size) + 1))

  var boxForce = boundedBox()
    .bounds([[0, 0], [700, 600]])
    .size(function (d) { return [100, 100] })

  var circles = svg
    .selectAll('.planet')
    .data(planetData)
    .enter()
    .append('g')
      .attr('id', (d) => {
        return d.name;
      })

    setTimeout(function () {
      circles
      .append('circle')
      .attr('class', 'planet')
      .attr('cy', 150)
      .attr('cx', (d, i) => {
        return 70 * i;
      })
      .attr('r', d => rScale(d.size))
      .style('fill', d => d.colour)
      // .call(d3.drag()
      // .on("start", dragstarted)
      // .on("drag", dragged)
      // .on("end", dragended));

  }, 1000);


// function dragstarted(d) {
//   // console.log('drag started');
// d3.select(this).raise().classed("active", true);
// }
//
// function dragged(d) {
// d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
// }
//
// function dragended(d) {
// d3.select(this).classed("active", false);
// }

    simulation.nodes(planetData)
      .on('tick', ticked)
      .velocityDecay(0)
      .alphaTarget(1)
      .force('box', boxForce);

      function ticked() {
        var planetCircle = svg.
        selectAll('.planet')
        .attr('cx', function(d){
          return d.x
        })
        .attr('cy', function(d){
          return d.y
        })
      };
// for(var i = 0; i< 50; i++){
//   svg
//   .append('circle')
//     .attr('cy', )
// }

}


function boundedBox() {
  var nodes, sizes
  var bounds
  var size = constant([0, 0])

  function force() {
      var node, size
      var xi, x0, x1, yi, y0, y1
      var i = -1
      while (++i < nodes.length) {
          node = nodes[i]
          size = sizes[i]
          xi = node.x + node.vx
          x0 = bounds[0][0] - xi
          x1 = bounds[1][0] - (xi + size[0])
          yi = node.y + node.vy
          y0 = bounds[0][1] - yi
          y1 = bounds[1][1] - (yi + size[1])
          if (x0 > 0 || x1 < 0) {
              node.x += node.vx
              node.vx = -node.vx
              if (node.vx < x0) { node.x += x0 - node.vx }
              if (node.vx > x1) { node.x += x1 - node.vx }
          }
          if (y0 > 0 || y1 < 0) {
              node.y += node.vy
              node.vy = -node.vy
              if (node.vy < y0) { node.vy += y0 - node.vy }
              if (node.vy > y1) { node.vy += y1 - node.vy }
          }
      }
  }

  force.initialize = function (_) {
      sizes = (nodes = _).map(size)
  }

  force.bounds = function (_) {
      return (arguments.length ? (bounds = _, force) : bounds)
  }

  force.size = function (_) {
      return (arguments.length
           ? (size = typeof _ === 'function' ? _ : constant(_), force)
           : size)
  }

  return force
}

function constant(_) {
  return function () { return _ }
}
