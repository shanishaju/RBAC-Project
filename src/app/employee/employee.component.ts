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
  //get employee
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
  //sorting by id
  sortById() {
    this.allEmployee.sort((a:any,b:any)=>a.id-b.id)
    // alert("sorting working properly")
  }
    //sorting by name
  sortByName() {
    //localCompare - string to compare
    // alert("sorting working properly")
    // before : -1 , after: 1 and equal: 0

    this.allEmployee.sort((a: any, b: any) => {
      const nameA = a.empusername ? a.empusername.toLowerCase() : '';
      const nameB = b.empusername ? b.empusername.toLowerCase() : '';
      return nameA.localeCompare(nameB);
    });
  } 

  //delete employee
  removeEmployee(id:any){
    this.api.deleteEmployeeApi(id).subscribe({
      next:(res:any)=>{
        // console.log(res);
        this.getEmployee()
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

}
