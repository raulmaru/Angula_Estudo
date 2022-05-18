import { Component, OnInit } from '@angular/core';
import {CarService} from '../../services/car.service'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  resultado: string = "teu cu";
  constructor(private carService: CarService) {}

  ngOnInit() {
  //this.resultado = "testando e comprovando";
  }
  soma (){
    this.carService.getsoma().subscribe(res =>{
      this.resultado = res;
    });
  }
  sub (){
    this.carService.getsub().subscribe(res =>{
      this.resultado = res;
    });
  }

}
