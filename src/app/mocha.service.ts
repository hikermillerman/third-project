import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MochaService {

  constructor() { }

  printToConsole(arg: string) {
    console.log('Serving mocha ' + arg);
  }
}
