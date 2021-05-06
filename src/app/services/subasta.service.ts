import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubastaService {

  idSubasta : string;
  constructor() { }

  getSubasta(){
    return this.idSubasta;
  }
}
