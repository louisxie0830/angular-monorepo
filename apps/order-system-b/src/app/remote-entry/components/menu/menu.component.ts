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
        label: '',
        items: [
          { label: '總覽管理', icon: 'pi pi-fw pi-th-large', routerLink: ['/'] },
          { label: '訂單管理', icon: 'pi pi-fw pi-list', routerLink: ['/'] },
          { label: '產品管理', icon: 'pi pi-fw pi-clone', routerLink: ['/'] },
          { label: '銷售分析', icon: 'pi pi-fw pi-chart-pie', routerLink: ['/'] }
        ]
      }
    ];
  }
}
