import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeAlbumPage } from './liste-album.page';

const routes: Routes = [
  {
    path: '',
    component: ListeAlbumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeAlbumPageRoutingModule {}
