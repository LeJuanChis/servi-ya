import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, shareReplay } from 'rxjs';
import { ServiceItem } from '../models/service-item.model';

@Injectable({
  providedIn: 'root',
})
// Creamos el servicio que se encargara de manejar nuestra data desde un json.
export class ServicesDataService {
  private http = inject(HttpClient);

  private services$ = this.http
    .get<ServiceItem[]>('/data/services.json')
    .pipe(shareReplay(1));

  getServices(): Observable<ServiceItem[]> {
    return this.services$;
  }
  // Servicios destacados en el home
  getFeaturedServices(): Observable<ServiceItem[]> {
    return this.services$.pipe(
      map(services => services.filter(service => service.featured))
    );
  }
  // Servicio individual
  getServiceBySlug(slug: string): Observable<ServiceItem | undefined> {
    return this.services$.pipe(
      map(services => services.find(service => service.slug === slug))
    );
  }
  // Servicios por categoria
  getServicesByCategory(category: string): Observable<ServiceItem[]> {
    return this.services$.pipe(
      map(services =>
        category === 'all'
          ? services
          : services.filter(service => service.category === category)
      )
    );
  }
}
