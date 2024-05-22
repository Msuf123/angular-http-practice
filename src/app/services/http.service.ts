import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private request:HttpClient) { }
  fetch(name:string){
    console.log(name)
    return this.request.post('http://localhost:3333/api','kk',{observe:'body',responseType:'text',headers:{'Content-Type':'application/x-www-form-urlencoded'}})
  }
}
