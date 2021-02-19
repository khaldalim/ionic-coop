import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeAlbumPageRoutingModule } from './liste-album-routing.module';

import { ListeAlbumPage } from './liste-album.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeAlbumPageRoutingModule
  ],
  declarations: [ListeAlbumPage]
})
export class ListeAlbumPageModule {}
