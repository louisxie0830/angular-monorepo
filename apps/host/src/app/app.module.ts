import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SharedUiModule } from '@angular-monorepo/shared/ui';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    SharedUiModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: "enabledBlocking"})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}