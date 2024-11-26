import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { EmployeeModel } from 'src/employee.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{


  employeeDetails:EmployeeModel={}


  //Activated Route - class is used to access data from the path

  constructor(private Aroute:ActivatedRoute , private api:ApiService, private router:Router ){}
  
  ngOnInit(): void {
    //params - method return observable - subscribe
    this.Aroute.params.subscribe((res:any)=>{
      // console.log(res.id);
      const {id} = res
      this.getEmployee(id)
      
    })
  }

  //get employee details
  getEmployee(id:any){
    this.api.geAtEmployeeApi(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.employeeDetails=res
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })

  }
  
  //cancel button
  cancelUpdate(id:any){
    this.getEmployee(id)
  }

   //edit employee
  editEmployee(){
    this.api.updateEmployeeApi(this.employeeDetails.id, this.employeeDetails).subscribe({
      next:(res:any)=>{
        console.log(res);
        Swal.fire
        ({
          title: 'Wow!',
          text: 'Employee Updated Successfully',
          icon: 'success',
          confirmButtonText: 'OK'
          })

        this.router.navigateByUrl('/employee')
      },
      error:(err:any)=>{
        console.log(err);
        //alert
        Swal.fire
        ({
          title: 'Oops!',
          text: 'Employee Update Failed',
          icon: 'error',
          confirmButtonText: 'OK'
          })
        }
    })
  }
}
