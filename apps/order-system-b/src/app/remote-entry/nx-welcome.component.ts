import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { TopBarComponent } from './components/top-bar/top-bar.component';


@Component({
  selector: 'app-nx-welcome',
  templateUrl: './nx-welcome.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  @ViewChild(TopBarComponent) appTopbar!: TopBarComponent;
}
