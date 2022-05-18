import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.testConnection().subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

}
