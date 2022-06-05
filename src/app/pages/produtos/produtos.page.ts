import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  list = [];

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.socket.on('update products', data => {
      this.list = data;
    });

    this.api.getProducts().subscribe(data => {
      this.list = data;
    }, error => {
      console.log(error);
    });
  }

}
