import { Routes } from '@angular/router';
import { Home } from './features/home/pages/home/home';
import { ServiceDetail } from './features/service-detail/pages/service-detail/service-detail';
import { ServiceList } from './features/service-list/pages/service-list/service-list';
import { Contact } from './features/contact/pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home, title: 'Inicio' },
  { path: 'servicios/:id', component: ServiceDetail, title: 'Detalle del servicio' },
  { path: 'servicios', component: ServiceList, title: 'Lista de servicios' },
  { path: 'contacto', component: Contact, title: 'Contacto' },
  { path: '**', redirectTo: '' }

];
