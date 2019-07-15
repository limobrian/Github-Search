import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ProfileService {
  private username: string;
  private clientid = 'abb72375447e71d384e4';
  private clientsecret = 'e54046e6604386f3c2ec288b8bf9150ba5410de4';
  constructor(private http:Http) {
    console.log("service is now ready!");
    this.username = 'limobrian';
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .map(res => res.json());
  }

  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .map(res => res.json());
  }
  updateProfile(username:string){
    this.username = username;
  }
}