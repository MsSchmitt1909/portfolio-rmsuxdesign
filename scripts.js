function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }

document.addEventListener('DOMContentLoaded', function () {window.setTimeout(document.querySelector('svg').classList.add('animated'),1000);})

  // Carousel implementation
  $(document).ready(() => {
      $('#carouselResearchInsights, #carouselUserPersonas, #carouselUserJourneys, #carouselUserFlows, #carouselSignUp, #carouselNav').carousel({
        interval: 3000
      })
  });