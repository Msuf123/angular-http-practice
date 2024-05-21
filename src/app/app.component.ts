import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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
 req.get('http://localhost:3333/api',{observe:'body',responseType:'text'}).subscribe((a)=>{
  console.log(a)
 })
  }
}
