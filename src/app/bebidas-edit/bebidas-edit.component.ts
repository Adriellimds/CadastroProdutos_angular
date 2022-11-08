import { Component, OnInit } from '@angular/core';
import { BebidaDetail } from '../Bebida';
import { BEBIDAS } from '../mock-bebidas';

@Component({
  selector: 'app-bebidas-edit',
  templateUrl: './bebidas-edit.component.html',
  styleUrls: ['./bebidas-edit.component.css']
})
export class BebidasEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
bebida?: BebidaDetail;

}


