import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { EmployeeModel } from 'src/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
}) 
// OnInit in Angular is a lifecycle hook that gets called once after the component's data-bound properties are initialized
export class EmployeeComponent  implements OnInit{

  //variable to store data
  allEmployee:EmployeeModel[]=[]

 constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getEmployee()
    
  }
  getEmployee(){
    this.api.getAllEmployeeApi().subscribe({
      next:(res:any)=>{
        // console.log(res);
        this.allEmployee=res;
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })

  }
  //sorting
  sortById(){
    this.allEmployee.sort((a:any,b:any)=>a.id-b.id)
  }
 
  sortByName(){
    //localeCompare()-letter
    //return -1, 1, 0 -before, after, equal
    this.allEmployee.sort((a:any,b:any)=>a.name.localeCompare(b.name))

  }

}
