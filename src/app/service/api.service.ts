import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  serverURL:string="http://localhost:3000"
  constructor(private http:HttpClient) { }


  //login api
  loginApi(){
  return this.http.get(`${this.serverURL}/employee/1`)
  }
  
  //add employee api
  addEmployeeApi(reqBody:any){
    return this.http.post(`${this.serverURL}/employee`,reqBody)

  }
  // get all employees api
  getAllEmployeeApi(){
    return this.http.get(`${this.serverURL}/employee`)

  }

  //delete employee api
  deleteEmployeeApi(id:any){
   return this.http.delete(`${this.serverURL}/employee/${id}`)
  }

  //to get particular employee
  geAtEmployeeApi(id:any){
    return this.http.get(`${this.serverURL}/employee/${id}`)

  }

  //api to update employee
  updateEmployeeApi(id:any, reqBody:any){
    return this.http.put(`${this.serverURL}/employee/${id}`,reqBody)

  }

  //api to update admin details
  updateAdminApi(reqBody:any){
    return this.http.put(`${this.serverURL}/employee/1`,reqBody)
   
  }
}