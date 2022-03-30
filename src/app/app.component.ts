import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Produtos', url: '/produtos', icon: 'shirt' },
    { title: 'Tabela', url: '/tabela', icon: 'layers' },
    { title: 'Cadastro', url: '/cadastro', icon: 'person' },
  ];
  constructor() {}
}
