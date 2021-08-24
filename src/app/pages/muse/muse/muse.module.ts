import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MuseComponent } from '../components/muse/muse.component';
import { MuseRouterModule } from '../router/muse-router/muse-router.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MuseComponent],
  imports: [
    CommonModule,
    MuseRouterModule,
    SharedModule
  ]
})
export class MuseModule { }
