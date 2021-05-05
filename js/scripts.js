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
    // var carouselsId = ['carouselExampleIndicators-1', 'carouselExampleIndicators-2', 'carouselExampleIndicators-3']

    // carouselsId.forEach(carouselId => {
    //     var myCarousel = document.querySelector(`#${carouselId}`)
    //     var carousel = new bootstrap.Carousel(myCarousel,  {
    //       interval: 3000
    //     })
    //     // prev
    //     $('.carousel-control-prev').click((event) => {
    //       carousel.prev();
    //     })
        
    //       // next
    //     $('.carousel-control-next').click((event) => {
    //       carousel.next();
    //     })
    //   })

      //firstCarousel
      var myCarouselFirst = document.querySelector('#carouselResearchInsights')
      var carouselFirst = new bootstrap.Carousel(myCarouselFirst,  {
        interval: 3000
      })
      // prev
      $('.carousel-control-prev').click((event) => {
        carouselFirst.prev();
      })
      
        // next
      $('.carousel-control-next').click((event) => {
        carouselFirst.next();
      })

      //secondCarousel
      var myCarouselSecond = document.querySelector('#carouselUserPersonas')
      var carouselSecond = new bootstrap.Carousel(myCarouselSecond,  {
        interval: 3000
      })
      // prev
      $('.carousel-control-prev').click((event) => {
        carouselSecond.prev();
      })
      
        // next
      $('.carousel-control-next').click((event) => {
        carouselSecond.next();
      })

       //thirdCarousel
       var myCarouselThird = document.querySelector('#carouselUserJourneys')
       var carouselThird = new bootstrap.Carousel(myCarouselThird,  {
         interval: 3000
       })
       // prev
       $('.carousel-control-prev').click((event) => {
         carouselThird.prev();
       })
       
         // next
       $('.carousel-control-next').click((event) => {
         carouselThird.next();
       })

       //fourthCarousel
       var myCarouselFourth = document.querySelector('#carouselUserFlows')
       var carouselFourth = new bootstrap.Carousel(myCarouselFourth,  {
         interval: 3000
       })
       // prev
       $('.carousel-control-prev').click((event) => {
         carouselFourth.prev();
       })
       
         // next
       $('.carousel-control-next').click((event) => {
         carouselFourth.next();
       })

       //fifthCarousel
       var myCarouselFifth = document.querySelector('#carouselSignUp')
       var carouselFifth = new bootstrap.Carousel(myCarouselFifth,  {
         interval: 3000
       })
       // prev
       $('.carousel-control-prev').click((event) => {
         carouselFifth.prev();
       })
       
         // next
       $('.carousel-control-next').click((event) => {
         carouselFifth.next();
       })

       //sixthCarousel
       var myCarouselSixth = document.querySelector('#carouselNav')
       var carouselSixth = new bootstrap.Carousel(myCarouselSixth,  {
         interval: 3000
       })
       // prev
       $('.carousel-control-prev').click((event) => {
         carouselSixth.prev();
       })
       
         // next
       $('.carousel-control-next').click((event) => {
         carouselSixth.next();
       })
  });