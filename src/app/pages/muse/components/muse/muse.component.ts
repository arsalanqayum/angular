import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-muse',
  templateUrl: './muse.component.html',
  styleUrls: ['./muse.component.scss']
})
export class MuseComponent implements OnInit {
  title = 'owlcarouselinAngular';  
  Images = ['../assets/images/Carousel1.jpeg', '../assets/images/Carousel2.jpeg', '../assets/images/Carousel3.jpeg'];  
  panelOpenState: boolean = false;
  SlideOptions = { items: 1, dots: true, nav: true };  
  CarouselOptions = { items: 3, dots: true, nav: true }; 
  customOptions: OwlOptions = {
   
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoHeight: true,
    nav: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1.15
      },
      300: {
        items: 1.15,
        stagePadding: 17,
        dots: false,
        nav: false,
      },
      350: {
        items: 1.15,
        stagePadding: 17,
        dots: false,
        nav: false,
      },
      400: {
        items: 1.15,
        stagePadding: 25,
        dots: false,
        nav: false,
      },
      450: {
        items: 1.15,
        stagePadding: 25,
        dots: false,
        nav: false,
      },
      500: {
        items: 1.15,
        stagePadding: 25,
        dots: false,
        nav: false,
      },
      550: {
        items: 1.15,
        stagePadding: 25,
        dots: false,
        nav: false,
      },
      600: {
        items: 1.15,
        stagePadding: 25,
        dots: false,
        nav: false,
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
   
  }
  constructor() { }

  ngOnInit() {

  }

  



}
