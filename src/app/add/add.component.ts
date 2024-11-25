import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
empusername :string=""
empemail:string=""
emostatus:string=""

constructor(private api:ApiService){}

cancel(){
this.empusername =""
this.empemail=""
this.emostatus=""
 }
 
 addEmployee(){
  if(!this.empusername || !this.empemail ||!this.emostatus){
    Swal.fire({
      title: "Oops!",
      text: "Please fill the form completely",
      icon: "info"

    })
  }
  else{
    //api call 

  }
 }
}
