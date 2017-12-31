import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { EventLoggerProvider } from '../../providers/event-logger/event-logger';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public platform: Platform,public logger: EventLoggerProvider) {

  }

  logClick() {
      this.logger.logButton('homeButton',{ pram: "paramValue" })
  }
}
