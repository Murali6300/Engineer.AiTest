import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  apidata: any;
  apidetails: any;
  rawJsondata: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    timer(0, 10000).pipe(switchMap(() => this.http.get('https://hn.algolia.com/api/v1/search_by_date?tags=story'))).subscribe(response => {
      this.apidata = response;
      // console.log('apidata', this.apidata);
      this.apidetails = this.apidata.hits;
    })
  }

  viewRawJsonData(json){
    // console.log('raq json data', json);
    this.rawJsondata = json;
    

  }

}
