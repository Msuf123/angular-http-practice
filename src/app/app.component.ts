import { HttpClient, HttpClientModule, HttpContext, HttpContextToken, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Observable, catchError, tap } from 'rxjs';
export const Retry=new HttpContextToken(()=>4)
function errorHandler(e:HttpErrorResponse){
  if(e.status===0){
    console.log('On our side')
  }
  else{
    
    console.log('Error on our side',e)
  }
  return new Observable((e)=>e.next('Error'))
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[]
})
export class AppComponent {
  title = 'http-practice';
  fomrGroup=new FormGroup({
    file:new FormControl('')
  })
  submitForm(){
    console.log(this.fomrGroup.value)
  }
  constructor(private req:HttpClient){
 req.get('http://localhost:3333/api',{params:{name:'akshat'},observe:'events',reportProgress:true,responseType:'text',context:new HttpContext().set(Retry,5)}).pipe(tap((a)=>{
  if(a.type===HttpEventType.Sent){
    console.log(a,'Reqest is sendt to the server')
  }
  if(a.type===HttpEventType.ResponseHeader){
    console.log(a,'Reviced respisne form server')
  }
  if(a.type===HttpEventType.Response){
      console.log(a,'Full Response form server')
  }
  if(a.type===HttpEventType.DownloadProgress){
    console.log(a,'Whats the pregfess fo server')
  }
  if(a.type===HttpEventType.UploadProgress){
    console.log(a,'Uplading progress')
  }
 
 
 })
).subscribe((a)=>{
  
}
  
)
  }
}
 
