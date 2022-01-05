import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  beer = {
    name : "Negra Juerte",
    type : "Porter",
    price : 150,
    stock : 5,
    image : "assets/img/porter.jpg"

  }
  constructor() { }

  ngOnInit(): void {
  }

}
