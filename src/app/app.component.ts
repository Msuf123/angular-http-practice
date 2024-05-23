import { HttpClient, HttpClientModule, HttpClientXsrfModule, HttpContext, HttpContextToken, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Observable, Subject, catchError, debounceTime, delay, distinctUntilChanged, switchMap, tap } from 'rxjs';
import { HttpService } from './services/http.service';
export const Retry=new HttpContextToken(()=>4)
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[]
})
export class AppComponent implements OnInit,DoCheck{
  title = 'http-practice';
  private searchText$=new Subject<string>()
  result$!:Observable<any>
  fomrGroup=new FormGroup({
    
  })
  submitForm(){
    
  }
  loggerKey(event:any){
    console.log(event.key as string)
    if(event.key!='Backspace'){

    }
    this.searchText$.next(event.target.value+event.key as string)
  }
  constructor(private req:HttpService,private request:HttpClient){
    console.log(document.cookie)
    this.request.post('http://localhost:3333/apii','ll',{observe:'response',responseType:'text',withCredentials:true}).subscribe((a)=>console.log(a.headers.get('Connection')))
   }
  ngOnInit(): void {
    
    
        this.searchText$.pipe(
          debounceTime(1000),
          distinctUntilChanged(),
          switchMap((a) =>this.req.fetch(a)))
          .subscribe(term => { 
           console.log(term);
         });
  }
  ngDoCheck(): void {
    
    
  }
}
 
