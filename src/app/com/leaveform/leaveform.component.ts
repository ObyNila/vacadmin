import { Component, OnInit, ɵConsole } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ConsoleService } from '@ng-select/ng-select/lib/console.service';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-leaveform',
  templateUrl: './leaveform.component.html',
  styleUrls: ['./leaveform.component.css']
})
export class LeaveformComponent implements OnInit {

  constructor(private rest: RestService, private router:Router,  private modalService: NgbModal) {}
  // leave_info = [];
  // leave_id = [];
  selectedFiles: FileList;
  progressInfos = [];
  message = '';
  fileInfos: Observable<any>;

leaveinfo
leaveinfo_id



data
name
position
email
phone
ext
dept
start_work
staff_id
staff_number
dept_id

boss_name

data1
annual_leave
extra_leave
forward_leave
sick_leave
maternity_Leave
maternity_leave_twin_kid
personal_leave
paternity_leave

upload_status

cover_name
cover_id
cover_email
staff_list

form_name : any = null;
form_leave_select : any = null;
form_N_day  : any = null;
form_N_date_start  : any = null;
form_N_date_end  : any = null;
form_N_come_back_date  : any = null;
form_N_cover_name   : any = null;
form_N_job_detail : any = null; 
form_N_boss_id : any = null; 
form_N_boss_name : any = null; 
form_N_comment  : any = null;

form_N_cover_list  : any = null;



  ngOnInit(): void {
    const authInfo = JSON.parse(localStorage.getItem(environment.localAuthenInfo));
    console.log(authInfo)
    // <!-- Color picker js -->
    // <script type="text/javascript" src="assets/bower_components/spectrum/js/spectrum.js"></script>



    //  this.rest.get_leave_info().subscribe(res => {
    //   // this.leave_info = res;
    //   // this.leave_id = res
    //   console.log(res)

    //   for (let entry of res) {
    //     // console.log(entry.laotypeleave);
    //     this.leave_id.push(entry.id)
    //     this.leave_info.push(entry.laotypeleave)
      
    //   }
    
    //   console.log(this.leave_info)
    //   console.log(this.leave_id)
    // });
    this.getleave_info()

    //let email = 'Athanaml@maruhanjapanbanklao.com'
    //this.getdata(email) //authInfo.token
    this.getdata(authInfo.email)

    // this.getdepet( this.dept_id)




    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var today2 = mm + '/' + dd + '/' + yyyy;
    console.log(today2)

    if ('02/18/2021'>=today2){
      console.log('innnn 3 month')
    }else{
      console.log('over 3 month')
    }




   
  }

getdepet(id){
  this.rest.get_stafflist_dept(id).subscribe(result => {
    

  console.log(result)
  });
}



  getleave_info(){
    this.rest.get_leave_info().subscribe(result => {
    
      this.leaveinfo = result
      // this.leaveinfo = result
      console.log('show leave type')
    console.log(this.leaveinfo)
    });
  }
  

  getdata(email){
    console.log("get detail")
    console.log(email)
    this.rest.get_staff_details(email).subscribe( result=>{
    console.log(result)
      this.data = result
      this.staff_id   = this.data[0].id 
      this.name       = this.data[0].full_name 
      this.position   = this.data[0].position
      this.email      = this.data[0].email
      this.phone      = this.data[0].tel
      this.ext        = this.data[0].ext
      this.dept       = this.data[0].deparment_name
      this.dept_id       = this.data[0].department_id
 
      this.staff_number   = this.data[0].staff_number

      this.annual_leave   = this.data[0].annual_leave
      this.extra_leave   = this.data[0].extra_leave
      this.forward_leave   = this.data[0].forward_leave
      this.sick_leave   = this.data[0].sick_leave
      this.maternity_Leave   = this.data[0].maternity_Leave
      this.maternity_leave_twin_kid  = this.data[0].maternity_leave_twin_kid
      this.personal_leave   = this.data[0].personal_leave
      this.paternity_leave   = this.data[0].paternity_leave

console.log(this.data[0].department_id)
      console.log( this.data[0].full_name);
      console.log( this.data[0].email);

      this.request_bossname(this.dept_id)
      this.get_dept(this.dept_id)
      
    });
  }


  // console.log(this.name)
  // console.log(this.staff_id)
  // console.log(this.form_leave_select)
  // console.log(this.form_N_day)
  // console.log(this.form_N_date_start)
  // console.log(this.form_N_date_end)
  // console.log(this.form_N_come_back_date)
  // console.log(this. form_N_cover_name )
  // console.log(this.form_N_job_detail )
  // console.log(this. form_N_boss_id)
  // console.log(this. form_N_comment )



  get_dept(detp_id){
    this.rest.get_stafflist_dept(detp_id).subscribe( result=>{
       this.staff_list = result
      
       console.log(result)
      // console.log( this.boss_name[0].id)
    });
  }
 
  request_bossname(detp_id){
    console.log(detp_id)
    this.rest.getbosslist(detp_id).subscribe( result=>{
      this.boss_name = result
      console.log("----get name-----")
      //  console.log(result)
      // console.log( this.boss_name[0].id)
    });
  }
    
  submit(){
  console.log("click submit")


  console.log(this.name)
  console.log(this.staff_id)
  console.log(this.form_leave_select)
  console.log(this.form_N_day)
  console.log(this.form_N_date_start)
  console.log(this.form_N_date_end)
  console.log(this.form_N_come_back_date)
  console.log(this. form_N_cover_name )
  console.log(this.form_N_job_detail )
  console.log(this. form_N_boss_id)
  console.log(this. form_N_comment )




if (this.form_leave_select == 2){
  // blockleave 5 day
  this.form_N_day = 5 // 5 day
  console.log('blcok leave---'+this.form_N_day )
}      
if (this.form_leave_select == 6){
  this.form_N_day = 105 //105 day
}      

if (this.form_leave_select == 7){
  this.form_N_day = 120 //120 day
}    
console.log(this.form_N_day)
console.log(this.annual_leave)


if (this.form_leave_select == 1){ // ລາພັກປະຈຳປີ / Annual Leave
 if ( this.form_N_day <= this.annual_leave ){
  console.log('leave ok annual_leave')

   this.insert_leave()  
    //insert
} else{
  console.log('CAN Not take Leave')
  Swal.fire(
    'error!',
    'Your balance not enough',
    'error'
  )
}
}else if (this.form_leave_select == 2){ //ລາພັກແບບຕໍ່ເນື່ອງ 5 ມື້ / Block Leave
  console.log('CAN Not take Leaveລາພັກແບບຕໍ່ເນື່ອງ 5 ມື້ / Block Leave')
  if( this.form_N_day <= this.annual_leave) {
      console.log('leave ok extra_leave')
      this.insert_leave() 
    } else{
      console.log('CAN Not take Leave extra_leave')
      Swal.fire(
        'error!',
        'Your balance not enough',
        'error'
      )
    }
} else if(this.form_leave_select == 3){ //ລາພັກສຸກເສີນ  / Emergency Leave
  if( this.form_N_day <= this.annual_leave) {
    console.log('leave ok Emergency Leave')
    this.insert_leave() 
  }else{
    console.log('CAN Not take Emergency')
    Swal.fire(
      'error!',
      'Your balance not enough',
      'error'
    )
  }
}else if(this.form_leave_select == 4){ //ລາພັກບໍ່ສະບາຍ / Sick Leave
  if( this.form_N_day <= this.sick_leave) {
    console.log('leave ok Sick Leave')
    this.insert_leave() 
  }else{
    console.log('CAN Not take Sick Leave')
    Swal.fire(
      'error!',
      'Your balance not enough',
      'error'
    )
  }
}else if(this.form_leave_select == 5){ //ລາພັກນອນໂຮງໝໍ / Hospitalisation
  if( this.form_N_day <= this.sick_leave) {
    console.log('leave ok Hospitalisation Leave')
    this.insert_leave() 
  }else{
    console.log('CAN Not take Hospitalisation')
    Swal.fire(
      'error!',
      'Your balance not enough',
      'error'
    )
  }
}else if(this.form_leave_select == 6){ //ລາພັກເກີດລູກ / Maternity Leave
  if( this.form_N_day <= this.maternity_Leave) {
    console.log('leave ok maternity_Leave Leave')
    // console.log('loop select'+this.form_N_day)
    this.insert_leave() 
  }else{
    console.log('CAN Not take maternity_Leave')
    Swal.fire(
      'error!',
      'Your balance not enough',
      'error'
    )
  }
}else if(this.form_leave_select == 7){ //ລາພັກເກີດລູກແຝດ / Maternity Leave twin kid
  if( this.form_N_day <= this.maternity_leave_twin_kid) {
    console.log('leave ok maternity_leave_twin_kid Leave')
    this.insert_leave() 
  }else{
    console.log('CAN Not take maternity_leave_twin_kid')
    Swal.fire(
      'error!',
      'Your balance not enough',
      'error'
    )
  }
}
else if(this.form_leave_select == 9){ //ລາພັກເບິ່ງລູກ / Paternity Leave
  if( this.form_N_day <= this.paternity_leave) {
    console.log('leave ok paternity_leave Leave')
   this.insert_leave() 
  }else{
    console.log('CAN Not take paternity_leave')
    Swal.fire(
      'error!',
      'Your balance not enough',
      'error'
    )
  }
}
else if(this.form_leave_select == 10){ //ລາພັກສ່ວນຕົວ / Personal Leave
  if( this.form_N_day <= this.personal_leave) {
    console.log('leave ok personal_leave Leave')
   this.insert_leave() 
  }else{
    console.log('CAN Not take personal_leave')
    Swal.fire(
      'error!',
      'Your balance not enough',
      'error'
    )
  }
}else if(this.form_leave_select == 13){ //ມື່ລາພັກທີ່ໄດ້ຈາກປີກ່ອນ / Forward Leave
  if( this.form_N_day <= this.forward_leave) {
    console.log('leave ok forward_leave Leave')
// block forward leave

var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var today2 = mm + '/' + dd + '/' + yyyy;
var date_m = mm + '/' + dd ;
    console.log(date_m)

    if (date_m>'03/31'){   // check over 3 month or not
      console.log('over 3 month')
      Swal.fire(
        'error!',
        'Forward Leave cannot submit after 3 months',
        'error'
      )

    }else{
      console.log('innnn 3 month')
      this.insert_leave() 
    }

  }else{
    console.log('CAN Not take forward_leave')

   
    Swal.fire(
      'error!',
      'Your balance not enough',
      'error'
    )
  }
}else{
  console.log('CAN Not take Leave')
}

// if ( this.form_N_day >= this.annual_leave ){
//   console.log('leave ok annual_leave')
// }else if( this.form_N_day >= this.extra_leave) {
//   console.log('leave ok extra_leave')
// }else if( this.form_N_day >= this.forward_leave) {
//   console.log('leave ok forward_leave')
// }else if( this.form_N_day >= this.sick_leave) {
//   console.log('leave ok sick_leave')
// }else if( this.form_N_day >= this.maternity_Leave) {
//   console.log('leave ok maternity_Leave')
// }else if( this.form_N_day >= this.maternity_leave_twin_kid) {
//   console.log('leave ok maternity_leave_twin_kid')
// }else if( this.form_N_day >= this.personal_leave) {
//   console.log('leave ok personal_leave')
// }else if( this.form_N_day >= this.paternity_leave) {
//   console.log('leave ok paternity_leave')
// } else{
//   console.log('CAN Not take Leave')
// }


// if ( this.form_N_day >= this.annual_leave ){
//   console.log('leave ok annual_leave')
// } else{
//   console.log('CAN Not take Leave')
// }


      // console.log(this.name)
      // console.log(this.staff_id)
      // console.log(this.email)


      // console.log(this.form_leave_select)
      // console.log(this.form_N_day)
      // console.log(this.form_N_date_start)
      // console.log(this.form_N_date_end)
      // console.log(this.form_N_come_back_date)
      // console.log(this.form_N_cover_name )
      // console.log(this.form_N_job_detail )
      // console.log(this.form_N_boss_id)
      // console.log(this.form_N_comment )
 

      // this.rest.getleave_check(this.staff_id).subscribe( result=>{
      //   console.log(result)
      //   console.log(result.status)
      //   if(result.status == 'error'){
      //     Swal.fire(
      //       'Something Error?',
      //       result.message,
      //       'error'
      //     )
      //   }else{
      //   this.rest.getrequest_leave(this.name,this.staff_id,this.email,this.form_leave_select,this.form_N_day,this.form_N_date_start,this.form_N_date_end,this.form_N_come_back_date,this.form_N_cover_name,this.form_N_job_detail,this.form_N_boss_id,this.form_N_comment).subscribe( result=>{
      //     console.log("-----rq leave------")
       
      //    console.log(result)
      //   });
      
      //   }
      // });

        // this.rest.getrequest_leave(this.name,this.staff_id,this.email,this.form_leave_select,this.form_N_day,
        //                           this.form_N_date_start,this.form_N_date_end,this.form_N_come_back_date,
        //                           this.form_N_cover_name,this.form_N_job_detail,this.form_N_boss_id,
        //                           this.form_N_comment,
        //                           this.annual_leave,
        //                           this.extra_leave,   
        //                           this.forward_leave,   
        //                           this.sick_leave,   
        //                           this.maternity_Leave,  
        //                           this.maternity_leave_twin_kid,  
        //                           this.personal_leave,
        //                           this.paternity_leave).subscribe( result=>{
        //   console.log("-----rq leave------")
       
        //  console.log(result)
        // });
      

      
    }
    refresh(): void {
      window.location.reload();
     }

    negative(number) {
      return !Object.is(Math.abs(number), +number);
    }

    reset(){
     this.form_leave_select = ''
      this.form_N_day = ''
      this.form_N_date_start = ''
     this.form_N_date_start = ''
      this. form_N_cover_name  = ''
       this.form_N_job_detail  = ''
       this. form_N_boss_id = ''
       this. form_N_comment  = ''
    }
  
    insert_leave(){
    
    if (this.form_N_day == null){
      console.log('leave is null ff--------------')
    return false
    }  



    if (this.form_N_day == null){
      console.log('leave is null ff--------------')
    return false
    }  


      console.log('check number'); 
      console.log(this.negative(this.form_N_day)); 

    if (this.negative(this.form_N_day)){ // check -1 if ture is fail // if fail is ture
      console.log('fotmat piddd')

      Swal.fire(
        'error!',
        'please check your format of leave amount.',
        'error'
      )
    }else{ 

      if(this.staff_id == this. form_N_boss_id ){
        console.log('blcok user use boss same id---staff id '+this.form_N_day+'boss_id'+this.form_N_boss_id )
        Swal.fire(
          'error!',
          'Can not select yourself',
          'error'
        )
      } else {
        
        console.log('fotmat okokkokoko')
        let timerInterval
  
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          // html: '<pre>' + str + '</pre>',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#2ecc71',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, GO Ahead',
        }).then((result) => {
          if (result.isConfirmed) {
            
            // Swal.fire(
            //   'Success!',
            //   'Thank You for using E-Leave your info will send notify to your boss via Email.',
            //   'success'
            // )
            Swal.fire({
              icon: 'success',
              title: 'Thank You for using E-Leave your info will send notify to your boss via Email.',
              // timer: 1500,
            })
  
           this.rest.getrequest_leave(this.name,this.staff_id,this.email,this.form_leave_select,this.form_N_day,
                this.form_N_date_start,this.form_N_date_end,this.form_N_come_back_date,
                this.form_N_cover_name,this.form_N_job_detail,this.form_N_boss_id,
                this.form_N_comment,
                this.upload_status,
                this.annual_leave,
                this.extra_leave,   
                this.forward_leave,   
                this.sick_leave,   
                this.maternity_Leave,  
                this.maternity_leave_twin_kid,  
                this.personal_leave,
                this.paternity_leave).subscribe( result=>{
                console.log("-----rq leave------")
                console.log(result)
  
                for (let i = 0; i < this.selectedFiles.length; i++) {
                  this.upload(i, this.selectedFiles[i]);
                }
  
  
                });
  
  
            setTimeout(() => 
            {
                this.refresh()
            },
            3000);
  
              //    this.refresh()
  
  
  
  
  
          }
          })


      }





    }




     

    }



    selectFiles(event): void {
      this.progressInfos = [];
      this.selectedFiles = event.target.files;
     console.log(this.selectedFiles[0]) 
     console.log(this.selectedFiles[0].name) 
     this.upload_status = this.selectedFiles[0].name

    }

    upload(idx, file): void {
      this.progressInfos[idx] = { value: 0, fileName: file.name };
  
      this.rest.upload(file).subscribe(
        event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            this.fileInfos = this.rest.getFiles();
          }
        },
        err => {
          this.progressInfos[idx].value = 0;
          this.message = 'Could not upload the file:' + file.name;
        });
    }
  
    uploadFiles(): void {

  
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }


}
