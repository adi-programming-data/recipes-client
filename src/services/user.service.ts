import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment';
import User from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  baseRouteUrl = `${environment.baseUrl}/User`;

  async Login(user: User) {
    ~(`${this.baseRouteUrl}/Login`);
    // let user: User;
    // user.Name = name;
    // user.Password = password;
    return await this.http.post<undefined>(`${this.baseRouteUrl}/Login/?u=${user}`, user);
  }

  Register(user: User) {
    ~(`${this.baseRouteUrl}/Register`);
    return this.http.post<undefined>(`${this.baseRouteUrl}/Register/?u=${user}`, user);

  }


}
