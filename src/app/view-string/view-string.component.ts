import { Component, HostBinding, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-view-string',
  templateUrl: './view-string.component.html',
  styleUrls: ['./view-string.component.scss'],
})
export class ViewStringComponent implements OnInit {
  randomSymbols: string = '';

  ngOnInit(): void {
    const interval$ = interval(3000);
    interval$.subscribe(() => {
      this.randomSymbols = this.randomString(5);
  
    });
  }
  randomString(length) {
     const randomChars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    return result;
  }
  onlyNumbers() {
    let re = /[0-9]{5}/;
    let matchAll = this.randomSymbols.match(re);
    if(matchAll!==null){
      return true
    }
  }
  haveNull() {
    let re = /[0]/;
    let matchAll = this.randomSymbols.match(re);
    if(matchAll!==null){
      return true
    }
  }
  
  palindrome() {
  if(this.randomSymbols[1]===this.randomSymbols[3]&&
    this.randomSymbols[0]===this.randomSymbols[4]){
      return true
    }
  }
}
