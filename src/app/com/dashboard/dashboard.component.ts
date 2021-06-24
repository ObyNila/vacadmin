import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

// import { BroadcastService, MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  loggedIn = false;
  loggedadAdmin = false;
  profile: any;

  constructor( 
     private router: Router,private rest: RestService,
    //  private broadcastService: BroadcastService, private authService: MsalService
     ) {}


  data
  name_api
  position
  email_api
  phone
  ext
  dept
  start_work
  staff_id

  data1
  annual_leave
  extra_leave
  forward_leave
  sick_leave
  maternity_Leave
  maternity_leave_twin_kid
  personal_leave
  paternity_leave

  ngOnInit() {
    const authInfo = JSON.parse(localStorage.getItem(environment.localAuthenInfo));

    //  let email = 'Athanaml@maruhanjapanbanklao.com'
      this.getdata(authInfo.email)
    // this.getdata(email)

    // this.checkoutAccount();

    // this.broadcastService.subscribe('msal:loginSuccess', () => {
    //   this.checkoutAccount();
    // });

    // if (this.loggedIn) {
    //   this.profile = this.authService.getAccount();
    //   console.log(this.profile)
    // }
  }


  // checkoutAccount() {
  //   this.loggedIn = !!this.authService.getAccount();
  // }

 

  getdata(email){
    console.log("dashbiarddddd")
    console.log(email)
    this.rest.get_staff_details(email).subscribe( result=>{
console.log(result)
      this.data = result
      this.name_api   = this.data[0].full_name 
      this.position   = this.data[0].position
      this.email_api  = this.data[0].email
      this.phone      = this.data[0].tel
      this.ext        = this.data[0].ext
      this.dept       = this.data[0].deparment_name
      this.start_work = this.data[0].start_work_date
      this.staff_id   = this.data[0].staff_number

      this.annual_leave   = this.data[0].annual_leave
      this.extra_leave   = this.data[0].extra_leave
      this.forward_leave   = this.data[0].forward_leave
      this.sick_leave   = this.data[0].sick_leave
      this.maternity_Leave   = this.data[0].maternity_Leave
      this.maternity_leave_twin_kid  = this.data[0].maternity_leave_twin_kid
      this.personal_leave   = this.data[0].personal_leave
      this.paternity_leave   = this.data[0].paternity_leave


      console.log( this.data[0].full_name);
      console.log( this.data[0].email);
    });
  }

  getstaff_leave(email){
    this.rest.get_staff_leave(email).subscribe( result=>{
      console.log("-----------")
      this.data1 = result
    console.log(this.data1)
    });
  }


}
