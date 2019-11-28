import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from 'app/material.module';
import { AddideaComponent } from './addidea/addidea.component';
import { BottomSheetOverviewExampleSheet } from './navbar/BottomSheetOverviewExampleSheet';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    BottomSheetOverviewExampleSheet,
    SidebarComponent,
    AddideaComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  entryComponents: [BottomSheetOverviewExampleSheet]
})
export class ComponentsModule { }
