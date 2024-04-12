import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  model: any[] = [];

  ngOnInit(): void {
    this.model = [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
        ]
      }
    ];
  }
}
