import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(".plus").click(function(e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.siblings('input');
      var value = $("#num").val();
      if (value < 30) {
        $('#num').val(Number($('#num').val())+1);
      } 
      else {
        value =30;
      }
    
      
    });
    $(".minus").click(function(e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.siblings('input');
      var value = $("#num").val();
    
      if (value > 1) {
       $('#num').val(Number($('#num').val())-1);
      } 
      else {
        value =1;
      }
    
    });

  }

}
