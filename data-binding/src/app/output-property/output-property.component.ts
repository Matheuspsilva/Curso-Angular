import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

/*Input Property : Você usará esse cara quando quiser receber dados de um component pai.
*/
@Input() valor:number = 0;
//Emitimos um evento (output) pro pai informando que recebemos o objeto
@Output() mudouValor = new EventEmitter();

@ViewChild('campoInput') campoValorInput: ElementRef;


incrementa(){
  this.campoValorInput.nativeElement.value++;
  //emitt
  this.mudouValor.emit({novoValor: this.valor});
}

decrementa(){
  this.campoValorInput.nativeElement.value--;
  //emitt
  this.mudouValor.emit({novoValor: this.valor});

}

  constructor() { }

  ngOnInit() {
  }



}
