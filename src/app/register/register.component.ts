import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import User from '../../Models/User';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  empty: User = new User(null, null, null, null, null);

  constructor(public myActive: ActivatedRoute, public userService: UserService, public action: Router) {
    this.myActive.params.subscribe((pa) => { this.empty.Name = pa['name'] })
  }

  ngOnInit(): void { }

  public async register() {

    var x = (await this.userService.Register(this.empty)).subscribe((success) => {
      console.log("suc:" + success);

      if (x as unknown as boolean == false) {
        alert(" משתמש קיים. הנך מועבר לכניסה רגילה");
        this.action.navigate(["login"]);
      }
      else if (x as unknown as boolean == true)
        alert("שם המשתמש כבר קיים. בחר שם אחר");

      else if ((x as unknown as User).Name)
        this.action.navigate(["recipeList"]);
    },
      (error) => {
        alert("שגיאה בנתונים");
        console.log(error);
      });
    this.empty = new User(null, null, null, null, null);
  }
}