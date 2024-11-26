import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ApiService } from '../service/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selected:Date= new Date()
  
  //pie chart
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions={}; 

  isClicked:boolean =false
  AdminDetails:any={}
  total:number=0 
  profileimg : string="https://cdn-icons-png.flaticon.com/512/4975/4975693.png"


  constructor( private api:ApiService){
    this.chartOptions ={
      chart: {
          type: 'pie'
      },
      title: {
          text: 'Project Completion Report'
      },
      tooltip: {
          valueSuffix: '%'
      },
      
      plotOptions: {
          series: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: [{
                  enabled: true,
                  distance: 20
              }, {
                  enabled: true,
                  distance: -40,
                  format: '{point.percentage:.1f}%',
                  style: {
                      fontSize: '1.2em',
                      textOutline: 'none',
                      opacity: 0.7
                  },
                  filter: {
                      operator: '>',
                      property: 'percentage',
                      value: 10
                  }
              }]
          }
      },
      credits:{
        enabled:false
    },
      series: [
          {
              name: 'Project',
              colorByPoint: true,
              data: [
                  {
                      name: 'safari',
                      y: 55.02
                  },
                  {
                      name: 'chrome',
                      sliced: true,
                      selected: true,
                      y: 26.71 
                  },
                  {
                      name: 'firefox',
                      y: 1.09
                  },
                  {
                      name: 'edge',
                      y: 15.5
                  },
                  {
                      name: 'opera',
                      y: 1.68
                  }
              ]
          }
      ]
  }
  }

  ngOnInit(): void {
    this.api.loginApi().subscribe({
        next: (res:any) => {
            console.log(res)
            this.AdminDetails=res
            if(res.profile){
                this.profileimg = res.profile
            }
            },
            error: (err:any) => {
                console.error(err);
                }

    })
    
    //for employee count
    this.api.getAllEmployeeApi().subscribe
    ({
        next: (res:any) => {
            console.log(res)
            this.total=res.length-1 //-1 bcoz excluding admin
            },
            error: (err:any) => {
                console.error(err);
                }
                })
                

  }

  buttonClick(){
    this.isClicked=true
  }

  //cancel button 
  cancel(){
    this.isClicked=false
    if(this.AdminDetails.profile){
        this.profileimg= this.AdminDetails.profile

    }
    else{
        this.profileimg="https://cdn-icons-png.flaticon.com/512/4975/4975693.png"

    }


  }

  //store image
     getFile(event:any){

        const file = event.target.files[0]

        //fileReader - class used to convert img to url

        //1) create an object for the class
        const fr = new FileReader()

        //2) url convert
        fr.readAsDataURL(file)

        //3) access url - onload()
        fr.onload =(event:any)=>{
            console.log(event.target.result);
            this.profileimg=event.target.result
            
        }

     }

     //update admin
     updateAdmin(){
        this.AdminDetails.profile=this.profileimg


        this.api.updateAdminApi(this.AdminDetails).subscribe({
            next:(res:any)=>{
                console.log(res);
                //sweetalert
                Swal.fire
                ({
                    title: 'Success',
                    text: 'Profile updated successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                    })

                    

                
                },
                error:(err:any)=>{
                    console.log(err);
                    //alert
                    Swal.fire
                    ({
                        title: 'Error',
                        text: 'Failed to update admin',
                        icon: 'error',
                        confirmButtonText: 'OK'
                        })

                    
                        }

        })


     }

}

