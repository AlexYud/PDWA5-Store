
import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-promocao',
  templateUrl: './promocao.page.html',
  styleUrls: ['./promocao.page.scss'],
})
export class PromocaoPage implements OnInit {

  private timeLeft: any = null;
  private countDownDate = new Date("Jul 25, 2021 16:37:52").getTime();
  private time: any = '00:00'

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.socket.on('time update', (time: string) => {
      this.timeString(time);
      var now = new Date(time);
      var timeLeft = new Date("May 27, 2022 19:00:00").getTime();
      this.calculateTime(now, timeLeft);
    })
  }

  timeString(time: any) {
    this.time = format(new Date(time), 'hh:mm:ss');
  }

  calculateTime(now: any, finalTime: any) {
    var left = finalTime - now;

    var hours: any = Math.floor((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes: any = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));
    var seconds: any = Math.floor((left % (1000 * 60)) / 1000);

    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    this.timeLeft = `${hours}:${minutes}:${seconds}`;

    // if (hours < 10 || minutes < 10 || seconds < 10) {
      
    // } else {
    //   this.timeLeft = `${hours}:${minutes}:${seconds}`
    // }

  }

}
