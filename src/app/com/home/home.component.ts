import { Component, OnInit } from '@angular/core';
// import { BroadcastService, MsalService } from '@azure/msal-angular';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedIn = false;
  profile: any;

  name = 'Angular';
  productForm: FormGroup;

staff_count
staff_leave_count
staff_leave_count_month
staff_leave_count_day

lineChart: any = []; //ประกาศตัวแปรเก็บค่า
lineDept = []
linedata = []


lineChart2: any = [];
lineDept2 = []
linedata2 = []

  constructor( private router: Router,private fb:FormBuilder,private rest: RestService) 
  {
    this.productForm = this.fb.group({
      name: '',
      quantities: this.fb.array([]) ,
    });
  }




  
  ngOnInit(): void {
   this.request_get_allstaffcount()
   this.request_allstaffleavecountt()
   this.request_allstaffleavecountbymonth()
   this.request_allstaffleavecounttbyday()

  }

  ngAfterViewInit(): void {
 
    console.log('ngAfterViewInit');

    this.request_chart1()
    this.request_chart2()
  
  }
 



  request_get_allstaffcount(){

    this.rest.get_allstaffcount().subscribe( result=>{
      this.staff_count = result[0].total
      console.log("----get name-----")
       console.log(result[0].total)
      // console.log( this.boss_name[0].id)
    });
  }

  request_allstaffleavecountt(){
    this.rest.get_allstaffleavecount().subscribe( result=>{
      this.staff_leave_count = result[0].total
  
    });
  }

  request_allstaffleavecountbymonth(){
    this.rest.get_allstaffleaveByMonth().subscribe( result=>{
      this.staff_leave_count_month = result[0].total

  
    });
  }
  request_allstaffleavecounttbyday(){
    this.rest.get_allstaffleaveByDay().subscribe( result=>{
      this.staff_leave_count_day = result[0].total
  
    });
  }


  request_chart1(){
    this.rest.get_chart_staff_leave().subscribe( result=>{
     console.log(result)

     for (let i = 0; i < result.length; i++) {
      //console.log(result[i]);
      //this.data.push(result[i])
      this.lineDept.push(result[i].deparment_name)
      this.linedata.push(result[i].total)
      //console.log(result[i].Year)
    }
  // this.lineDept = result[0].deparment_name
  // this.linedata = result[0].total


     console.log(this.lineDept)
     console.log(this.linedata)

     this.lineChart = new Chart('lineChart', { // สร้าง object และใช้ชื่อ id lineChart ในการอ้างอิงเพื่อนำมาเเสดงผล
       type: 'line', // ใช้ชนิดแผนภูมิแบบเส้นสามารถเปลี่ยนชิดได้
       data: { // ข้อมูลภายในแผนภูมิแบบเส้น
           labels: this.lineDept, // ชื่อของข้อมูลในแนวแกน x
           datasets: [{ // กำหนดค่าข้อมูลภายในแผนภูมิแบบเส้น
              label: 'Total',
              data: this.linedata, 
              fill: false,
              lineTension: 0.2,
              borderColor: "red", // สีของเส้น
              borderWidth: 1
           }]
       },
       options: {
          title: { // ข้อความที่อยู่ด้านบนของแผนภูมิ
             text: "All staff count leave by dept",
             display: true
          }
       }
    })

     
   });


  
  }
  request_chart2(){
    this.rest.get_chart_staff_all().subscribe( result=>{

      for (let i = 0; i < result.length; i++) {
        //console.log(result[i]);
        //this.data.push(result[i])
        this.lineDept2.push(result[i].deparment_name)
        this.linedata2.push(result[i].count_dept)
        //console.log(result[i].Year)
      }
    

      this.lineChart2 = new Chart('lineChart2', {
      type: 'doughnut',
      data: {
        labels:  this.lineDept2,
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9",
            "#c45850","#f1c40f","#fd79a8","#34495e","#e67e22","#e77f67",
            "#63cdda","#f5cd79","#6D214F","#BDC581","#F8EFBA"],
            data: this.linedata2
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'All staff count each dept'
        }
      }
    })

    //   this.lineChart2 = new Chart('lineChart2', { // สร้าง object และใช้ชื่อ id lineChart ในการอ้างอิงเพื่อนำมาเเสดงผล
    //     type: 'line', 
    //     data: { // ข้อมูลภายในแผนภูมิแบบเส้น
    //         labels: this.lineDept2, // ชื่อของข้อมูลในแนวแกน x
    //         datasets: [{ // กำหนดค่าข้อมูลภายในแผนภูมิแบบเส้น
    //            label: 'Total',
    //            data: this.linedata2, 
    //            fill: false,
    //            lineTension: 0.2,
    //            borderColor: "blue", // สีของเส้น
    //            borderWidth: 1
    //         }]
    //     },
    //     options: {
    //        title: { // ข้อความที่อยู่ด้านบนของแผนภูมิ
    //           text: "All staff count each dept",
    //           display: true
    //        }
    //     }
    //  })


    });
  }


  


}
