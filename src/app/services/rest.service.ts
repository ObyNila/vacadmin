import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse,HttpRequest,HttpEvent  } from '@angular/common/http';
import * as moment from 'moment';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private baseURL = environment.node_static_url + 'api/v1/';
  // private beaseURL2 = "http://10.101.5.23:1111/api_mjbl_v1/"
   private beaseURL2 = "http://localhost:8001/api_mjbl_v1/"
  // private beaseURL2 = "http://192.168.1.63:8001/api_mjbl_v1/"
  
 constructor(private http: HttpClient) { }
  private authInfo = JSON.parse(localStorage.getItem(environment.localAuthenInfo));



  login(data): Observable<any> {
 
    const url = this.beaseURL2 + 'mj';
    console.log(url)
    console.log(data)
    return this.http.post(url, data);
  }


//eleave list

///mjbl/staff_details
get_staff_details(email:any): Observable<any> {

  let headers = new HttpHeaders();
  const data = { 'email': email };

  const url = this.beaseURL2 + 'mjbl/staff_details';
  console.log(url)
  console.log(data)
  // return this.http.post(url,data);
  // return this.http.post(url,data,{ headers: new HttpHeaders({'x-access-token':this.authInfo.token})});
  return this.http.post(url,data).pipe(
    catchError(this.handleError)
    );
}


handleError(error: HttpErrorResponse){
  console.log("lalalalalalalala");
  return throwError(error);
  }

get_staff_leave(email: any): Observable<any> {
  const data = { 'email': email };
  const url = this.beaseURL2 + 'mjbl/staff_leave_info';
  // console.log("123456")
  return this.http.post(url,data);
}




getrequest_leave(name:any,st_id:any,email:any,leave_id:any,total:any,start:any,
                end:any,back:any,cover:any,job:any,boss:any,comment:any,upload_status:any,
                annual_leave:any,
                extra_leave:any,
                forward_leave:any,
                sick_leave:any,
                maternity_Leave:any,
                maternity_leave_twin_kid:any,
                personal_leave:any,
                paternity_leave:any): Observable<any> {
  const data = {  'name': name,
                  'staff_id': st_id,
                  'staff_email':email,
                  'form_leave_select': leave_id,
                  'form_N_day' : total,
                  'form_N_date_start': start,
                  'form_N_date_end':end,
                  'form_N_come_back_date': back,
                  'form_N_cover_name' : cover,
                  'form_N_job_detail': job,
                  'form_N_boss_id':boss,
                  'form_N_comment': comment,
                  'upload_N_comment': upload_status,
                'annual_leave':annual_leave,
                'extra_leave':extra_leave,
                'forward_leave':forward_leave,
                'sick_leave':sick_leave,
                'maternity_Leave':maternity_Leave,
                'maternity_leave_twin_kid':maternity_leave_twin_kid,
                'personal_leave':personal_leave,
                'paternity_leave':paternity_leave
                };
  const url = `${this.beaseURL2}/mjbl/request_el`;
  console.log(url)
  console.log(data)
   return this.http.post(url, data);
}

get_leave_info(): Observable<any> {
  const url = `${this.beaseURL2}/mjbl/leave_info`;
  console.log(url)
   return this.http.get(url);
}

getbosslist(dept_id): Observable<any> {
  const url = `${this.beaseURL2}/mjbl/getboss?bossid=`+dept_id;
  console.log(url)
   return this.http.get(url);
}
// end eleave list

getleave_check(dept_id): Observable<any> {
  const url = `${this.beaseURL2}/mjbl/req_check?staff_id=`+dept_id;
  console.log(url)
   return this.http.get(url);
}

getstaff_history(dept_id): Observable<any> {
  const url = `${this.beaseURL2}/mjbl/staff_history?staff_id=`+dept_id;
  console.log(url)
   return this.http.get(url);
}
// staff_history_hr?start=2021-01-25&end=2021-01-25
getstaff_history_all(start,end): Observable<any> {
  const url = `${this.beaseURL2}/mjbl/staff_history_hr?start=`+start+`&end=`+end;
  console.log(url)
   return this.http.get(url);
}

gethead_history(dept_id): Observable<any> {
  const url = `${this.beaseURL2}/mjbl/head_history?staff_id=`+dept_id;
  console.log(url)
   return this.http.get(url);
}

getheadcheckappv_rej(dept_id): Observable<any> {
  const url = `${this.beaseURL2}/mjbl/head_check_appv_rej?staff_id=`+dept_id;
  console.log(url)
   return this.http.get(url);
}


getlink(token,state): Observable<any> {
  const url = `${this.beaseURL2}/mjbl/mjbllink?tokenid=`+token+'&state='+state;
  console.log(url)
   return this.http.get(url);
}
get_staff_manual_update_leave(al,el,fl,sl,ml,mltk,pl,pal,id): Observable<any> {
  const url = `${this.beaseURL2}/mjbl/staff_manual_update_leave?al=`+al+'&el='+el+'&fl='+fl+'&sl='+sl+'&ml='+ml+'&mltk='+mltk+'&pl='+pl+'&pal='+pal+'&staff_id='+id;
  console.log(url)
   return this.http.get(url);
}

get_headdept(): Observable<any> {
  const url = `${this.beaseURL2}/mjbl/get_headdept`;
  console.log(url)
   return this.http.get(url);
}

get_allstaff(): Observable<any> {
  const url = `${this.beaseURL2}/mjbl/all_staff`;
  console.log(url)
   return this.http.get(url);
}

get_allstaff_countleave(): Observable<any> {
  const url = `${this.beaseURL2}/mjbl/all_staff_leavecount`;
  console.log(url)
   return this.http.get(url);
}



get_allstaffcount(): Observable<any> {
  const url = `${this.beaseURL2}/mjbl/count_allstaff`;
  console.log(url)
   return this.http.get(url);
}

get_allstaffleavecount(): Observable<any> {
  const url = `${this.beaseURL2}/mjbl/count_staffleaveALL`;
  console.log(url)
   return this.http.get(url);
}


get_allstaffleaveByMonth(): Observable<any> {
  const url = `${this.beaseURL2}/mjbl/count_staffleaveBYMONTH`;
  console.log(url)
   return this.http.get(url);
}
get_allstaffleaveByDay(): Observable<any> {
  const url = `${this.beaseURL2}/mjbl/count_staffleaveBYday`;
  console.log(url)
   return this.http.get(url);
}



get_all_Dept(): Observable<any> {
  const url = `${this.beaseURL2}/mjbl/get_dept`;
  console.log(url)
   return this.http.get(url);
}

update_staff_del(dept_id): Observable<any> {
  const url = `${this.beaseURL2}/mjbl/staff_delete?staff_id=`+dept_id;
  console.log(url)
   return this.http.get(url);
}


get_chart_staff_leave(): Observable<any> {
  const url = `${this.beaseURL2}/mjbl/chart_staffleaveBYCur_month`;
  console.log(url)
   return this.http.get(url);
}

get_chart_staff_all(): Observable<any> {
  const url = `${this.beaseURL2}/mjbl/chart_stafflist`;
  console.log(url)
   return this.http.get(url);
}



update_staff(id:any,form_name:any,form_email:any,form_tel:any,form_start:any,form_dept:any,form_staff_number:any,form_ext:any,form_position:any): Observable<any> {
  const data = {
    'id': id,
  'form_name': form_name,
  'form_email':form_email,
  'form_tel': form_tel,
  'form_start' : form_start,
  'form_dept': form_dept,
  'form_staff_number':form_staff_number,
  'form_ext': form_ext,
  'form_position' : form_position
};
  const url = `${this.beaseURL2}/mjbl/staff_update`;
  console.log(url)
   return this.http.post(url,data);
}

get_recall(id: any): Observable<any> {
  const data = { 'id': id };
  const url = this.beaseURL2 + 'mjbl/staff_recall';
  // console.log("123456")
  return this.http.post(url,data);
}

get_insert(data): Observable<any> {
  const url = this.beaseURL2 + 'mjbl/staff_insert';
  console.log(url)
  console.log(data)
  return this.http.post(url,data);
}

get_insert_manual(data): Observable<any> {
  const url = this.beaseURL2 + 'mjbl/staff_manual_insert';
  console.log(url)
  console.log(data)
  return this.http.post(url,data);
}

// login(data): Observable<any> {
 
//   const url = this.beaseURL2 + 'mj';
//   console.log(url)
//   console.log(data)
//   return this.http.post(url, data);
// }


hr_update_password(data): Observable<any> {
  const url = this.beaseURL2 + 'mjbl/hr_update_password';
  console.log(url)
  console.log(data)
  return this.http.post(url,data);
}


get_stafflist_dept(id): Observable<any> {
  const url = `${this.beaseURL2}/mjbl/get_dept_list?id=${id}`;
  // console.log(url)
   return this.http.get(url);
}


upload(file: File): Observable<HttpEvent<any>> {
  const formData: FormData = new FormData();

  formData.append('file', file);

  // const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
  //   reportProgress: true,
  //   responseType: 'json'
  // });
  const req = new HttpRequest('POST', `${this.beaseURL2 }mjbl/get_upload`, formData, {
    reportProgress: true,
    responseType: 'json'
  });

  return this.http.request(req);
}
getFiles(): Observable<any> {
  return this.http.get(`${this.beaseURL2}/files`);
}

}


function getDateFromObject(obj, format = 'YYYY-M-D') {
  try {
    return moment(`${obj.year}-${obj.month}-${obj.day}`, format).format('YYYY-MM-DD');
  } catch (err) {
    return null;

  }
}

class Range { from: any; to: any }


