import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  serverURL:string="http://localhost:3000"
  constructor(private http:HttpClient) { }



  loginApi(){
  return this.http.get(`${this.serverURL}/employee/1`)
  }

  addEmployeeApi(reqBody:any){
    return this.http.post(`${this.serverURL}/employee`,reqBody)

  }
}
 