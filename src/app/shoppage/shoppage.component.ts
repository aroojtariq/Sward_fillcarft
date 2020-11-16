import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppage',
  templateUrl: './shoppage.component.html',
  styleUrls: ['./shoppage.component.css']
})
export class ShoppageComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  $('button').on('click',function(e) {
    if ($(this).hasClass('grid')) {
        $('#listgrid-container ul').removeClass('list').addClass('grid');
    }
    else if($(this).hasClass('list')) {
        $('#listgrid-container ul').removeClass('grid').addClass('list');
    }
   });
  }

  slideData = [
    {
      image: "assets/images/product1.png",
      name: "CLASSIC SWORD",
      price: "$99.00",
    },
    {
      image: "assets/images/product1.png",
      name: "CASUAL GOLD SWORD",
      price: "$99.00",
    },
    {
      image: "assets/images/product1.png",
      name: "HOBBIT BLACK KNIGHT",
      price: "$99.00",
    },
    {
      image: "assets/images/product1.png",
      name: "CLASSIC SWORD",
      price: "$99.00",
    },
    {
      image: "assets/images/product1.png",
      name: "HOBBIT BLACK KNIGHT",
      price: "$99.00",
    },
    {
      image: "assets/images/product1.png",
      name: "HAYYAR POTER SWORD",
      price: "$99.00",
    },
  ]

}
