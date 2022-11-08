import { BEBIDAS } from './mock-bebidas';
import { BebidaDetail } from './Bebida';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BebidasService {

  constructor() { }

getBebidas(): BebidaDetail[] {
  return BEBIDAS;
}
}
