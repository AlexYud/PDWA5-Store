import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabelaPageRoutingModule } from './tabela-routing.module';

import { TabelaPage } from './tabela.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabelaPageRoutingModule
  ],
  declarations: [TabelaPage]
})
export class TabelaPageModule {}
