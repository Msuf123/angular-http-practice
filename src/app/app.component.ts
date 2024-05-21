import { HttpClient, HttpClientModule, HttpContext, HttpContextToken, HttpErrorResponse, HttpEventType } from '@angular/common/http';
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
    
    this.searchText$.next(event.target.value as string)
  }
  constructor(private req:HttpService){ }
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
 
