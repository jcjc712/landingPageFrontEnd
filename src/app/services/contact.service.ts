import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class ContactService {
  urlBackEnd: string = 'http://socialland.dev/api/contact';

  constructor(private http: Http) { }

  postContact(params: any) {
    /*const headers = new Headers({
      'Content-Type': 'application/json'
    });*/

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.urlBackEnd, params, options)
    // return this.http.post( this.urlBackEnd, '', { headers })
        .map( (res) => {
          console.log(res.json());
          return res.json();
        });
  }

  getContacts() {

    return this.http.get( this.urlBackEnd )
        .map( (res) => {
          return res.json();
        });
  }
}
