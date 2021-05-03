function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }


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
      var myCarouselFirst = document.querySelector('#carouselExampleIndicators-1')
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
      var myCarouselSecond = document.querySelector('#carouselExampleIndicators-2')
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
  });