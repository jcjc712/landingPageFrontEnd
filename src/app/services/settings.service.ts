import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class SettingsService {
  public _colorBackGround$: Subject<string>;
  public _typePage$: Subject<string>;
  public colorsBackGround: string[] = [
      'black','blue','red',
      'green','yellow','orange',
      'purple','brown','pink'
  ];
  public typePage: string = 'web';
  constructor() {
    this._colorBackGround$ = <Subject<string>>new Subject();
    this._typePage$ = <Subject<string>>new Subject();
  }

  get colorBackGround$(){
    return this._colorBackGround$.asObservable();
  }
  get typePage$(){
    return this._typePage$.asObservable();
  }

  getColorBackGroud() {
    return 'black';
  }
  getTypePage() {
    return this.typePage;
  }
  getColorsBackGroud() {
    return this.colorsBackGround;
  }
  changeBackGround(state: string) {
    this._colorBackGround$.next(state);
  }
  changeTypePage(state: string) {
    this.typePage = state;
    this._typePage$.next(state);
  }

}
