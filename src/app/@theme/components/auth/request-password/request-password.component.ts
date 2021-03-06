import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NB_AUTH_OPTIONS, NbAuthSocialLink, NbAuthResult, NbAuthService } from '@nebular/auth';
import { getDeepFromObject } from '../helpers';

@Component({
  selector: 'request-password',
  templateUrl: './request-password.component.html',
  styleUrls: ['./request-password.component.scss']
})
export class RequestPasswordComponent {

  redirectDelay: number = 0;
  showMessages: any = {};
  provider: string = '';

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};

  constructor(protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected config = {},
    protected router: Router) {

    this.redirectDelay = this.getConfigValue('forms.requestPassword.redirectDelay');
    this.showMessages = this.getConfigValue('forms.requestPassword.showMessages');
    this.provider = this.getConfigValue('forms.requestPassword.provider');
  }

  requestPass(): void {
    this.errors = this.messages = [];
    this.submitted = true;

    this.service.requestPassword(this.provider, this.user).subscribe((result: NbAuthResult) => {
      this.submitted = false;
      if (result.isSuccess()) {
        this.messages = result.getMessages();
      } else {
        this.errors = result.getErrors();
      }

      const redirect = result.getRedirect();
      if (redirect) {
        setTimeout(() => {
          return this.router.navigateByUrl(redirect);
        }, this.redirectDelay);
      }
    });
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.config, key, null);
  }

}
