import { BebidasService } from './../bebidas.service';
import { BebidaDetail } from './../Bebida';
import { BEBIDAS } from './../mock-bebidas';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css'],
})
export class BebidasComponent implements OnInit {
  constructor(private bebidasService: BebidasService) {}

  ngOnInit(): void {
    this.getBebidas();
  }
  
  onSelect(): void {
    this.onSelect();
  }

  Bebidas?: BebidaDetail[] = [];

  getBebidas(): void {
    this.Bebidas = this.bebidasService.getBebidas();
  }
}

export class BebidasEditComponent {
  BebidaSelecionada = 'bebida';
}
