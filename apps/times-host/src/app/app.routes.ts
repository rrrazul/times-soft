import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'times-pay',
    loadChildren: () =>
      import('times-pay/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'times-ems',
    loadChildren: () =>
      import('times-ems/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
