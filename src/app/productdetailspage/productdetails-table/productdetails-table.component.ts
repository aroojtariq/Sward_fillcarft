import { Component, OnInit } from '@angular/core';
import { Store , select } from '@ngrx/store';
import * as CartActions from '../../cart.actions';
import * as fromCart from '../../cart.selectors';
import {CartItems} from '../../cart';
import { createAction, props } from '@ngrx/store';

@Component({
  selector: 'app-productdetails-table',
  templateUrl: './productdetails-table.component.html',
  styleUrls: ['./productdetails-table.component.css']
})
export class ProductdetailsTableComponent implements OnInit {

  constructor(private store : Store) { }

  adduser(): void {
    var name = $(".product-name").text();
    var price =Number($(".product-price").text());
    var quantity=Number($("#num").val());
    
    const user: CartItems = {"name" : name , "price" : price ,"quantity" : quantity};
    
    this.store.dispatch(new CartActions.AddCartItem({"user1":user}));
  }


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

 

  
let slides = document.getElementById('slideshow');
let imgs = slides.getElementsByTagName('img');
let imagemSelecionada = document.getElementById('displayed-img');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let counter = 0;

next.addEventListener('click',nextSlide, false);
prev.addEventListener('click',prevSlide, false);

for (let i = 0; i < imgs.length; i++) {
       let index = i;
       let imagem = imgs[i];     
       clickImage(imagem, index);
       //imagem.setAttribute('data-index', index);       
  }
  function goToSlide(n) {
    counter = (n + imgs.length) % imgs.length;
    mudaImagem(imgs[counter], n);
    console.log(counter)
}

  function nextSlide() {
    goToSlide(counter + 1);    
  }
  
  function prevSlide() {
    goToSlide(counter - 1);
  }

  function mudaImagem(imagem, index) {    
    let path = imagem.getAttribute('src');
    imagemSelecionada.setAttribute('src', path);
  }

  function clickImage(imagem, index) {
      imagem.addEventListener('click', function(event){
      event.preventDefault();    
      mudaImagem(imagem, index); 
      goToSlide(index);
     });     
  }




  }


  slideData = [
    {
      image :"assets/images/productgallery.png",
      hr:"assets/images/productgallery.png",
    }, {
      image :"assets/images/productgallery.png",
      hr:"assets/images/productgallery.png",
    }, {
    image :"assets/images/productgallery.png",
    hr:"assets/images/productgallery.png",
    }, {
      image :"assets/images/productgallery.png",
      hr:"assets/images/productgallery.png",
    }, {
      image :"assets/images/productgallery.png",
      hr:"assets/images/productgallery.png",
    }
  ]





}
