import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

@NgModule({
  declarations: [
    RemoteEntryComponent,
    NxWelcomeComponent,
    TopBarComponent,
    SidebarComponent,
    MenuComponent,
    MenuItemComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes)],
  providers: [],
  exports: [TopBarComponent, SidebarComponent, MenuComponent],
})
export class RemoteEntryModule {}
