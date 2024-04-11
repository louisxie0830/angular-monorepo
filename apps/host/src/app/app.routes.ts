import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'order-system-f',
    loadChildren: () =>
      import('order-system-f/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'order-system-b',
    loadChildren: () =>
      import('order-system-b/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'pokemon',
    loadChildren: () =>
      import('pokemon/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('product/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('cart/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    redirectTo: '/pokemon',
    pathMatch: 'full',
  },
];
