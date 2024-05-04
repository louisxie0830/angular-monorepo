import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: 'image-conversion-service',
    loadChildren: () => import('image-conversion-service/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'generative-ai',
    loadChildren: () => import('generative-ai/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'order-system-f',
    loadChildren: () => import('order-system-f/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'order-system-b',
    loadChildren: () => import('order-system-b/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'pokemon',
    loadChildren: () => import('pokemon/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'product',
    loadChildren: () => import('product/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('cart/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
