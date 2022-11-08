import { BebidasService } from './../bebidas.service';
import { BebidaDetail } from './../Bebida';
import { BEBIDAS } from './../mock-bebidas';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {

  constructor(private bebidasService: BebidasService) {}

  ngOnInit(): void {
    this.getBebidas();
  }

Bebidas?:  BebidaDetail[] = [];


getBebidas(): void {
  this.Bebidas = this.bebidasService.getBebidas();
}
}
