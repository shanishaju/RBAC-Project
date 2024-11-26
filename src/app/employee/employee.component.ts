import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { EmployeeModel } from 'src/employee.model';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
}) 
// OnInit in Angular is a lifecycle hook that gets called once after the component's data-bound properties are initialized
export class EmployeeComponent  implements OnInit{

  //variable to store data
  allEmployee:EmployeeModel[]=[]
   
  //for searching
  searchkey:string =""

  //date pipe
   time:any = new Date() //fetches the system date and time

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

  //generate pdf 
  // This jsPDF plugin adds the ability to generate PDF tables either by parsing HTML tables or by using Javascript data directly. 
   generatePdf(){
      // 1) create object for jspdf
      const pdf = new jsPDF()
     
      let head=[['id','username','email','status']]
      const body:any=[]
        this.allEmployee.forEach((item:any)=>{
          if(item.id!="1"){ // inorder to exclude admin
            body.push([item.id,item.empusername,item.empemail,item.emostatus])

          }
        })

      //2) call auto table function
      autoTable(pdf,{head, body})

      //3) download
      pdf.save("Employee_Tale.pdf")


   }

}
