import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NB_AUTH_OPTIONS, NbAuthSocialLink, NbAuthResult, NbAuthService, NbAuthJWTToken, NbEmailPassAuthProvider } from '@nebular/auth';
import { getDeepFromObject } from '../helpers';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  redirectDelay: number = 0;
  showMessages: any = {};
  provider: string = '';

  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  submitted: boolean = false;
  socialLinks: NbAuthSocialLink[] = [];

  aleradyLoggedIn: boolean = false;

  constructor(protected service: NbAuthService, private emailProvider: NbEmailPassAuthProvider,
    @Inject(NB_AUTH_OPTIONS) protected config = {},
    protected router: Router) {

    this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
    this.showMessages = this.getConfigValue('forms.login.showMessages');
    this.provider = this.getConfigValue('forms.login.provider');
    this.socialLinks = this.getConfigValue('forms.login.socialLinks');
  }

  ngOnInit() {
    this.service.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          this.user = token.getPayload();
          this.aleradyLoggedIn = true;
          this.emailProvider.setConfig({
            login: {
              rememberMe: true,
              endpoint: 'https://easylocatusapi.herokuapp.com/api/auth/login',
              redirect: {
                success: 'auth/reset-password',
                failure: null,
              },
            },
            logout: {
              endpoint: 'https://easylocatusapi.herokuapp.com/api/auth/logout',
            },
            register: {
              endpoint: 'https://easylocatusapi.herokuapp.com/api/auth/register',
            },
            resetPass: {
              endpoint: 'https://easylocatusapi.herokuapp.com/api/auth/reset-pass',
            }
          });
        } else {
          this.emailProvider.setConfig({
            login: {
              rememberMe: true,
              endpoint: 'https://easylocatusapi.herokuapp.com/api/auth/login',
              redirect: {
                success: '/',
                failure: null,
              },
            },
            logout: {
              endpoint: 'https://easylocatusapi.herokuapp.com/api/auth/logout',
            },
            register: {
              endpoint: 'https://easylocatusapi.herokuapp.com/api/auth/register',
            },
            resetPass: {
              endpoint: 'https://easylocatusapi.herokuapp.com/api/auth/reset-pass',
            }
          });
        }
      });
  }

  login(): void {
    this.errors = this.messages = [];
    this.submitted = true;
    this.service.authenticate(this.provider, this.user).subscribe((result: NbAuthResult) => {
      this.submitted = false;

      if (result.isSuccess()) {
        this.messages = result.getMessages();
      } else {
        this.errors = result.getErrors();
      }

      let redirect = result.getRedirect();
      if (redirect) {
        this.router.navigateByUrl(redirect);
      }
    });
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.config, key, null);
  }

}
