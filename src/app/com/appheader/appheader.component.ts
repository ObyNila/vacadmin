import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { BnNgIdleService } from 'bn-ng-idle';
import { environment } from 'src/environments/environment';
import { RestService } from './../../services/rest.service';
import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
// import { BroadcastService, MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})



export class AppheaderComponent implements OnInit {

  loggedIn = false;
  profile: any;
  constructor(
     private router: Router,
     private bnIdle: BnNgIdleService,
    //  private broadcastService: BroadcastService, private authService: MsalService
     ) { }

     user_role
  ngOnInit(): void {
    // this.bnIdle.startWatching(120).subscribe((res) => {
    //   if (res) {
    //     console.log('session expired');
    //     localStorage.removeItem(environment.localAuthenInfo);
    //     this.router.navigate(["/login"])
    //      .then(() => {
    //     window.location.reload();
    //   });
    //   }
    // });



    // this.checkoutAccount();

    // this.broadcastService.subscribe('msal:loginSuccess', () => {
    //   this.checkoutAccount();
    // });

    // if (this.loggedIn) {
    //   this.profile = this.authService.getAccount();
    // }
    this.gerUser()
  }





gerUser(){

  const auth = JSON.parse(localStorage.getItem(environment.localAuthenInfo));
  // this.user_role = auth.user_role;

  //admon
  if(auth.user_role == 'admin'){
    this.user_role = 1;
  }
  //manager
  if(auth.user_role == 'user'){
    this.user_role = 2;
  }

  
  console.log(this.user_role)
}




not_ready(){
  Swal.fire(
          'Something Error?',
         'This page not ready yet',
          'error'
        )
}_

  // checkoutAccount() {
  //   this.loggedIn = !!this.authService.getAccount();
  // }

  // logout() {
  //   this.authService.logout();
  // }

  logout_info() {
    Swal.fire({
      title: 'ອອກຈາກລະບົບ',
      text: "ທ່ານຕ້ອງການອອກຈາກລະບົບແທ້ບໍ ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {

  
           localStorage.removeItem(environment.localAuthenInfo);
          this.router.navigate(["/login"])
           .then(() => {
          window.location.reload();
        });
      }
    })
  }



}
