import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor() { }

  ngOnInit() {
    emailjs.init("XeT5pgiI6hTXzEPCG"); //Insert your User ID
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_41b4bvp', 'template_y7k68d8', e.target as HTMLFormElement, 'XeT5pgiI6hTXzEPCG')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

}
