import { Component, OnInit } from '@angular/core';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'personal-informations',
  templateUrl: './personal-informations.component.html',
  styleUrls: ['./personal-informations.component.scss']
})
export class PersonalInformationsComponent implements OnInit {

  user: any = {};

  location: any = {};

  constructor(protected authService: NbAuthService, private http: HttpClient) { }

  ngOnInit() {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          this.user = token.getPayload();
          this.http.get('https://easylocatusapi.herokuapp.com/api/user').subscribe(result =>  {
            console.log(result);
          })
        }
      });
  }

}
