import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ViewMessagePage } from './view-message.page';

import { IonicModule } from '@ionic/angular';

import { ViewMessagePageRoutingModule } from './view-message-routing.module';
import { DataService } from '../../services/data.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMessagePageRoutingModule,    
    HttpClientModule
  ],
  declarations: [ViewMessagePage],
  providers: [DataService]
})
export class ViewMessagePageModule {}
