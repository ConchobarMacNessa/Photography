var webDevPortfolio = [
  {
    title: 'Asteroid Watch',
    description: 'asteroids in d3.js',
    src: './../assets/portfolio_images/AW_image.png',
    github: 'https://github.com/ConchobarMacNessa/Asteroid-Watch',
    url: 'http://asteroid-data.surge.sh/',
    position: 0
  },
  {
    title: 'Echo',
    description: 'memory storing app for the Anna Freud Centre',
    src: './../assets/portfolio_images/EAF_image.png',
    github: 'https://github.com/pbywater/echo',
    url: 'http://echo-af.herokuapp.com/',
    position: 1
  },
  {
    title: 'Genie in a bot',
    description: 'facebook chatbot for the 2017 general elections',
    src: './../assets/portfolio_images/GFB_image.png',
    github: 'https://github.com/FAC10/Genie-in-a-Bot',
    url: 'https://www.facebook.com/politicalgenie/',
    position: 2
  },
  {
    title: 'Rover Vision',
    description: 'see life through curiosity\'s eyes',
    src: './../assets/portfolio_images/RV_image.png',
    github: 'https://github.com/ConchobarMacNessa/Rover-Images',
    url: 'https://rover-vision.herokuapp.com/',
    position: 3
  }
]

function webdev(){
  var page = document.getElementsByClassName('page');
  while (page[0]) {
      page[0].parentNode.removeChild(page[0]);
  }

  var contentHolder = document.getElementById('content-holder');
  webDevPortfolio.forEach(function(content){
    var position = '';
    if (content.position % 2) {
      position = 'page project right-align-image';
    } else {
      position = 'page project left-align-image';
    }

    var holder = createEl('div', position);
    var title = createEl('h2', 'project__element project__title', null, content.title);
    var description = createEl('p', 'project__element project__description', null, content.description)
    var image = createEl('img', 'project__element project__img', null, null, content.src, null);
    var info = createEl('div', 'project__element project__info');
    var code = createEl('a', 'project__element project__code', null, 'code /', null, null, content.github);
    var site = createEl('a', 'project__element project__site', null, ' site', null, null, content.url);

    contentHolder.appendChild(holder);
    holder.appendChild(title);
    holder.appendChild(description);
    holder.appendChild(info);
    info.appendChild(code);
    info.appendChild(site);
    holder.appendChild(image);
  })
}

function createEl(element, className, id, text, url, func, href) {
  var el = document.createElement(element);
  el.className = className || '';
  el.id = id || '';
  el.textContent = text || '';
  if(url) el.src = url;
  if (func) el.onclick = func;
  if (href) el.href = href;
  return el;
}
