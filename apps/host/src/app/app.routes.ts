import { Route } from '@angular/router';

export const appRoutes: Route[] = [
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
    pathMatch: 'full'
  },
];
