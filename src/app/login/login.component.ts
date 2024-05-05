import { HttpClient } from '@angular/common/http';
import { NgForm, NgModel } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import User from '../../Models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public userService: UserService, public action: Router) { }
  baseRouteUrl = `${environment.baseUrl}/user/Login`;

  ngOnInit(): void {
  }

  public async login(name: string, password: string) {

    var c = (await this.userService.Login(new User(null, name, null, null, password))).subscribe((success) => {
      console.log("suc:" + success);

      if (success as unknown as boolean === false) {
        this.action.navigate(["register",name]);
        return;
      }
      else if (success as unknown as boolean === true)
        alert("סיסמא שגויה");

      else if ((success as User).Name)
        this.action.navigate(["recipeList"]);

      else console.log("err");

    },
      (error) => {
        alert("שגיאה בנתונים");
        console.log(error);
      });
  }

}
