import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of as observableOf } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators/delay';

import { User } from '../../../@core/data/models/user';
import { AppUserService } from '../../../@core/data/app-user.service';

import { NbAbstractAuthProvider, NbAuthResult } from '@nebular/auth';

export interface NbDummyAuthProviderConfig {
  delay?: number;
  alwaysFail?: boolean;
}

@Injectable()
export class NbDummyAuthProvider extends NbAbstractAuthProvider {

  protected defaultConfig: NbDummyAuthProviderConfig = {
    delay: 1000,
  };

  constructor(private userService: AppUserService) {
    super();
  }


  authenticate(data?: any): Observable<NbAuthResult> {
    return observableOf(this.login(data))
      .pipe(
        delay(this.getConfigValue('delay')),
    );
  }

  login(data) {
    const existe = this.userService.existe(data);
    if (!existe) {
      // TODO we dont call tokenService clear during logout in case result is not success
      return new NbAuthResult(false,
        this.createFailResponse(data),
        null,
        ['Something went wrong.']);
    }

    // TODO is it missed messages here, is it token should be defined
    return new NbAuthResult(true, this.createSuccessResponse(data), '/', [], ['Connecté avec succès'], '123456');
  }

  register(data?: any): Observable<NbAuthResult> {
    this.userService.add(data);
    console.log(this.userService.all());
    return observableOf(this.createDummyResult(data))
      .pipe(
        delay(this.getConfigValue('delay')),
    );
  }

  requestPassword(data?: any): Observable<NbAuthResult> {
    return observableOf(this.createDummyResult(data))
      .pipe(
        delay(this.getConfigValue('delay')),
    );
  }

  resetPassword(data?: any): Observable<NbAuthResult> {
    return observableOf(this.createDummyResult(data))
      .pipe(
        delay(this.getConfigValue('delay')),
    );
  }

  logout(data?: any): Observable<NbAuthResult> {
    return observableOf(this.createLogoutResult(data))
      .pipe(
        delay(this.getConfigValue('delay')),
    );
  }

  createLogoutResult(data?: any): NbAuthResult {
    if (this.getConfigValue('alwaysFail')) {
      // TODO we dont call tokenService clear during logout in case result is not success
      return new NbAuthResult(false,
        this.createFailResponse(data),
        null,
        ['Something went wrong.']);
    }

    // TODO is it missed messages here, is it token should be defined
    return new NbAuthResult(true, this.createSuccessResponse(data), '/', []);
  }

  protected createDummyResult(data?: any): NbAuthResult {
    if (this.getConfigValue('alwaysFail')) {
      // TODO we dont call tokenService clear during logout in case result is not success
      return new NbAuthResult(false,
        this.createFailResponse(data),
        null,
        ['Something went wrong.']);
    }

    // TODO is it missed messages here, is it token should be defined
    return new NbAuthResult(true, this.createSuccessResponse(data), '/', [], ['Connecté avec succès'], '123456');
  }
}