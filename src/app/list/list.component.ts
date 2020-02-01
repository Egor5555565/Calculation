import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

brews: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getBeer().subscribe(data => {
      this.brews = data
      console.log(this.brews);
    }
  );
  this._http.myMethod();
  }

  //
  @Input() name_parent_page: string = "Breweries";
  @Output() onChangedTest = new EventEmitter<boolean>();
    change(increased:any) {
        this.onChangedTest.emit(increased);
    }
  //
  @Input() userNameTest:string;
  @Output() userNameTestChange = new EventEmitter<string>();
    onNameTestChange(model: string){
        this.userNameTest = model;
        this.userNameTestChange.emit(model);
    }
}
