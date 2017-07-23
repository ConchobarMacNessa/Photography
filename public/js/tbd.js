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
document.body.style.background = '#07191D';

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

    var circles = svg
      .selectAll('.planet')
      .data(planetData)
      .enter()
      .append('g')
        .attr('id', (d) => {
          return d.name;
        })

circles
  .append('circle')
    .attr('cy', 150)
    .attr('cx', (d, i) => {
      return 70 * i;
    })
    .attr('r', d => rScale(d.size))
    .style('fill', d=>d.colour)

}
