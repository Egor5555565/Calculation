import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

clickCounter: number = 0;
name: string = '';
name_child_pages : string = "Breweries!";

  constructor() { }

  ngOnInit() {
  }

  countClick() {
    this.clickCounter += 1;
  }

  setClasses() {
    let myClasses = {
      active: this.clickCounter > 4,
      notactive: this.clickCounter <= 4
    };
    return myClasses;
  }

  onChanged(increased:any){
    //increased == true ? this.clickCounter++: this.clickCounter--;
    //((increased) && (this.clickCounter >= 0)) ? this.clickCounter++ : (this.clickCounter != 0) ? this.clickCounter-- : "123";
    increased == (true && (this.clickCounter >= 0)) ? this.clickCounter++ : (this.clickCounter != 0) ? this.clickCounter-- : "123";
  }

}
