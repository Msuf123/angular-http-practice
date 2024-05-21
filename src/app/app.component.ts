import { HttpClient, HttpClientModule, HttpContext, HttpContextToken } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
export const Retry=new HttpContextToken(()=>4)
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[]
})
export class AppComponent {
  title = 'http-practice';
  constructor(private req:HttpClient){
 req.get('http://localhost:3333/api',{observe:'body',responseType:'text',context:new HttpContext().set(Retry,5)}).subscribe((a)=>{
  console.log(a)
 })
  }
}
 
