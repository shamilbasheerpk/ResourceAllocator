import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatamoverService {
  // private messageSource = new BehaviorSubject("default message");
  // currentMessage = this.messageSource.asObservable();

  // constructor() { }

  // changeMessage(message: string) {
  //   this.messageSource.next(message)
  // }

  

  

    private messageSource = new BehaviorSubject('meera');
    currentMessage = this.messageSource.asObservable();
  
    constructor() { }
  
    changeMessage(message: string) {
      this.messageSource.next(message)
    }
  
  }

