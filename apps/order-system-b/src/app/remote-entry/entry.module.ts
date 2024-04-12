import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent, TopBarComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes)],
  providers: [],
  exports: [TopBarComponent],
})
export class RemoteEntryModule {}
