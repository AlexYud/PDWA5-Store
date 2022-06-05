import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.page.html',
  styleUrls: ['./tabela.page.scss'],
})
export class TabelaPage implements OnInit {

  list = [];
  name = undefined;
  price = undefined;

  constructor(public api: ApiService, public toastController: ToastController) { }

  ngOnInit() {
    this.api.socket.on('update products', data => {
      this.list = data;
    });

    this.api.getProducts().subscribe(data => {
      this.list = data;
      //console.log(data);
    }, error => {
      console.log(error);
    });
  }

  async presentToast(msg: string, color: string, icon: string) {
    const toast = await this.toastController.create({
      message: msg,
      color: color,
      icon: icon,
      duration: 2000
    });
    toast.present();
  }

  add() {
    this.api.addProduct().subscribe(async data => {
      await this.presentToast(data, 'success', 'checkmark-circle');
    }, async error => {
      console.log(error);
      await this.presentToast(error.error, 'danger', 'close-circle');
    });
  }

  async create() {
    if (await this.validate()) {

      this.api.newProduct(this.name, Number(this.price)).subscribe(async data => {
        await this.presentToast(data, 'success', 'checkmark-circle');
      }, async error => {
        console.log(error);
        await this.presentToast(error.error, 'danger', 'close-circle');
      })
    }
  }

  delete(id: number) {
    this.api.deleteProduct(id).subscribe(async data => {
      await this.presentToast(data, 'success', 'checkmark-circle');
    }, async error => {
      console.log(error);
      await this.presentToast(error.error, 'danger', 'close-circle');
    })
  }

  onlyNumbers(str: string) {
    return /^[0-9.]+$/.test(str);
  }

  async validate() {
    if (this.name === undefined || this.name === '' || this.name === ' ') {
      await this.presentToast('Nome inválido', 'danger', 'close-circle');
      return false;
    }
    if (this.price === undefined || this.price === 0 || this.price < 0 || !this.onlyNumbers(this.price)) {
      await this.presentToast('Preço inválido', 'danger', 'close-circle');
      return false;
    }

    return true;
  }

}
