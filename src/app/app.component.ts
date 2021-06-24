import { Component } from '@angular/core';
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public get isAuthen() {
    try {
      let authenInfo = JSON.parse(
        localStorage.getItem(environment.localAuthenInfo)
      );
    
      return authenInfo.token != null && authenInfo.token != "";

    } catch (error) {
      return false;
    }
  }

}
