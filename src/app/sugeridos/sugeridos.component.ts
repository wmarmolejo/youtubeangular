import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sugeridos',
  templateUrl: './sugeridos.component.html',
  styleUrls: ['./sugeridos.component.css']
})
export class SugeridosComponent implements OnInit {
  
  nombre:string="Pedrito";
  
  sugeridos: any = [
    {
      name:"foo",
      thumb:"bar",
      time:360
    }

  ];

  constructor() { }

  ngOnInit() {
  }

  add(){
    this.sugeridos.push(
      {
        name:this.nombre,
        thumb:"bar",
        time:560
      }
    );
  }

}
