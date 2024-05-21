import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private request:HttpClient) { }
  fetch(name:string){
    console.log(name)
    return this.request.get('https://dummyjson.com/products/1',{observe:'body',responseType:'json'})
  }
}
