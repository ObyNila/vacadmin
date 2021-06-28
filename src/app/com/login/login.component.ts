import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { RestService } from './../../services/rest.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { BroadcastService, MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user_name;
  password;
  loginForm: FormGroup;
  submitted = false;

  loggedIn = false;
  loggedadAdmin = false;
  profile: any;

  test = 'successful'
  user_role

  constructor(
      private router: Router,private rest: RestService,private formBuilder: FormBuilder,
      // private broadcastService: BroadcastService, private authService: MsalService
      ) { }


      public loadExternalScript(url: string) {
        const body = <HTMLDivElement> document.body;
        const script = document.createElement('script');
        script.innerHTML = '';
        script.src = url;
        script.async = true;
        script.defer = true;
        body.appendChild(script);
      }

      // channelArray: Array<string> = ['one', 'two', 'three'];

      // SuperAdmin = ['Athanaml@maruhanjapanbanklao.com']
      // adminEmail = ['Athanaml@maruhanjapanbanklao.com','2']


  ngOnInit(){
    // this.checkoutAccount();

    // this.broadcastService.subscribe('msal:loginSuccess', () => {
    //   this.checkoutAccount();
    // });

    // if (this.loggedIn) {
    //   this.profile = this.authService.getAccount();
    // }


  }


login_ad(){
console.log('12121')


}



  // checkoutAccount() {
  //   this.loggedIn = !!this.authService.getAccount();
  // }

  logout() {
    // this.authService.logout();
  }

  login_web(){
    console.log("test")
    const data = {
      'user_name': this.user_name,
      'password': this.password
    };
// console.log(this.profile.userName) //email : Athanaml@maruhanjapanbanklao.com
//       console.log(this.profile.name)
// console.log(this.loggedIn)
// console.log(this.profile.userName)



      this.rest.login(data).subscribe(result => {
        console.log(result);
        if (result.status === 'successful'){
          localStorage.setItem(environment.localAuthenInfo, JSON.stringify(result));


          Swal.fire({
            // position: 'top-end',
            icon: 'success',
            title: 'Your Are successful login',
            showConfirmButton: false,
            timer: 1500
          })

        }else{
          Swal.fire(
            'ກະລຸນາກວດສອບບັນຊີທ່ານຄືນ?',
            'Username or Password Incorrect?',
            'question'
          )
        }
      });

  }





  login_manual(): void {
console.log(this.user_name)

console.log("test")
    const data = {
      'user_name': this.user_name,
      'password': this.password
    };

    if (this.test === 'successful'){

      this.router.navigate(['/home']).then(() => {
        window.location.reload();
      });
    }else{
      Swal.fire(
        'ກະລຸນາກວດສອບບັນຊີທ່ານຄືນ?',
        'Username or Password Incorrect?',
        'question'
      )
    }



      // this.rest.login(data).subscribe(result => {
      //   //console.log(result);\


      //   if (this.test === 'successful'){

      //     this.router.navigate(['/home']).then(() => {
      //       window.location.reload();
      //     });

      //   }else{
      //     Swal.fire(
      //       'ກະລຸນາກວດສອບບັນຊີທ່ານຄືນ?',
      //       'Username or Password Incorrect?',
      //       'question'
      //     )
      //   }
      // });
  }


}
