import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public num1: string="0";
  public num2: string="0";
  public result: number=0;
  public sib: string="+";
  constructor(public navCtrl: NavController) {
    
  }

  sum(){
    this.result=(Number.parseInt(this.num1)+(Number.parseInt(this.num2)));
    this.sib="+";
  }

  res(){
    this.result=(Number.parseInt(this.num1)-(Number.parseInt(this.num2)));
    this.sib="-";
  }

  div(){
    this.result=(Number.parseInt(this.num1)/(Number.parseInt(this.num2)));
    this.sib="/";
  }

  mul(){
    this.result=(Number.parseInt(this.num1)*(Number.parseInt(this.num2)));
    this.sib="*";
  }

  mod(){
    this.result=(Number.parseInt(this.num1)%(Number.parseInt(this.num2)));
    this.sib="%";
  }
}
