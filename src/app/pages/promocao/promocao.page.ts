
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
  private time: any = '00:00';
  private isPromo: boolean = false;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.socket.on('time update', (time: string) => {
      
      this.timeString(time);
      
      var now = new Date(time);
      var timeLeft = new Date("May 27, 2030 22:00:00").getTime();
      if(now.getHours() < 18 || now.getHours() >= 22 ) {
        this.isPromo = false;
      } else {
        this.isPromo = true;
      }
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

  }

}
