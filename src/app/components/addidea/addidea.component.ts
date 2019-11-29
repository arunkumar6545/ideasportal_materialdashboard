import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addidea',
  templateUrl: './addidea.component.html',
  styleUrls: ['./addidea.component.scss']
})
export class AddideaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchkey(event){
    if (event.keyCode === 13) {
      
      event.preventDefault();
      alert("enter pressed");
      
    }
  }

}
