import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.css']
})
export class HomeBlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  slideData = [
    {
      image: "assets/images/blog1.png",
    }, {
      image: "assets/images/blog2.png",
    }, {
      image: "assets/images/blog3.png",
    }, {
      image: "assets/images/blog1.png",
    }, {
      image: "assets/images/blog2.png",
    }
  ]

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    autoHeight: true,
    slidesPerView:3,
    initialSlide:3,
    allowTouchMove: true,
    centeredSlides: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      500: {
        slidesPerView: 3
      },
      400: {
        slidesPerView: 2
      },
      300: {
        slidesPerView: 2
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
   
  };





}
