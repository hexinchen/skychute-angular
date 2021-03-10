import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  helperInput = new BehaviorSubject('');
  currentText = this.helperInput.asObservable();

  setHelperInput(newText: string): void{
    this.helperInput.next(newText);
  }

  getHelperInput(): Observable<string>{
    return this.helperInput.asObservable();
  }

}

