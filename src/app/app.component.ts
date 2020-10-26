import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  payee='';
  date='';
  amount=0;
  height=0;
  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit debitis modi fugiat quam in labore at animi ipsa accusamus reiciendis cum consequuntur, itaque dolorem alias. Minima, repudiandae modi! Autem, placeat?";
  milles=0;
  collection: string[] = ['a', 'b', 'c', 'd'];

  onPayeeChange(value){
    console.log(value);
    
    this.payee=value;
  }
  onDateChange(value){
    this.date=value;
  }
  onAmountChange(value){
   this.amount=parseFloat(value);
  }
  onHeightChange(value){
    this.height=parseFloat(value);
  }
  onMillesChange(value){
    this.milles=value;
  }
  

}
