import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(remoteRoutes)],
  providers: [],
})
export class RemoteEntryModule { }
