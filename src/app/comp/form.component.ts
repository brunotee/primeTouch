import { Component, OnInit } from '@angular/core';

export interface nombreInfo  {
value :number;
divisible: boolean;
facteurs: number[];
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

data: nombreInfo[]  =[
  {value:27,divisible:true,facteurs:[3,3,3]},
  {value:11,divisible:false,facteurs:[11]},
  {value:87,divisible:false,facteurs:[87]},
  {value:121,divisible:true,facteurs:[11,11]}
  
]
  constructor() { 
    }

  ngOnInit(): void {
  }
//  receptione la valeur emise par child
onChildClick(value)
  {
  console.log("child emet ",value );
  }
}
