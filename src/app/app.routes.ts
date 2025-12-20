import { Routes } from '@angular/router';

import { PATHS } from '@baf/core';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@baf/ui/layout').then((m) => m.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('@baf/ui/layout').then((m) => m.HeaderComponent),
        outlet: 'header',
      },
      {
        path: '',
        loadComponent: () => import('@baf/ui/layout').then((m) => m.FooterComponent),
        outlet: 'footer',
      },
      {
        path: '',
        loadChildren: () => import('./routes/home.routes').then((m) => m.homeRoutes),
      },
      {
        path: '',
        loadChildren: () => import('./routes/documents.routes').then((m) => m.documentsRoutes),
      },
      {
        path: PATHS.search,
        loadComponent: () => import('@baf/search/avia/ui/filters').then((m) => m.SearchFiltersAviaComponent),
      },
      {
        path: '',
        loadChildren: () => import('./routes/errors.routes').then((m) => m.errorsRoutes),
      },
    ],
  },
];
