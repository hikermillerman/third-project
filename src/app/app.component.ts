import { Component, OnInit } from '@angular/core';
import { MochaService } from './mocha.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'third-project';

  constructor(private mochaService: MochaService, private http: HttpClient) {
    this.mochaService.printToConsole('Hello');
  }

  ngOnInit() {
    const obs = this.http.get('https://api.github.com/users/hikermillerman');
    // obs.subscribe((response) => console.log(response));
  }
}
