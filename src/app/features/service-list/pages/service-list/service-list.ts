import { Component, inject } from '@angular/core';
import { NgClass, CurrencyPipe, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { ServicesDataService } from '../../../../core/services/services-data.service';
import { FavoritesService } from '../../../favorites/services/favorites-service/favorites-service';

interface ServiceCategory {
  id: string;
  label: string;
}

@Component({
  selector: 'app-service-list',
  imports: [NgClass, CurrencyPipe, RouterLink, AsyncPipe],
  templateUrl: './service-list.html',
  styleUrl: './service-list.css',
})
export class ServiceList {

  // Obtenemos el servicio de favoritos y de los servicios usando inyección de dependencias.
  private servicesDataService = inject(ServicesDataService);
  private favoritesService = inject(FavoritesService);

  categories: ServiceCategory[] = [
    { id: 'all', label: 'Todas las Servicios' },
    { id: 'technology', label: 'Tecnología y Digital' },
    { id: 'education', label: 'Educación' },
    { id: 'tourism', label: 'Turismo' },
    { id: 'creative', label: 'Creativo' },
  ];

  activeCategory = 'all';
  currentPage = 1;
  totalPages = 12;

  // Obtenemos los servicios que vienen desde nuestro json
  services$ = this.servicesDataService.getServices();

  // Filtramos por categoria
  filteredServices$ = this.services$.pipe(
    map(services =>
      this.activeCategory === 'all'
        ? services
        : services.filter(service => service.category === this.activeCategory)
    )
  );

  // Obtenemos todos los servicios por esta categoria seleccionada
  selectCategory(categoryId: string): void {
    this.activeCategory = categoryId;

    this.filteredServices$ = this.services$.pipe(
      map(services =>
        categoryId === 'all'
          ? services
          : services.filter(service => service.category === categoryId)
      )
    );
  }

  // Funciones de favoritos
  toggleFavorite(serviceId: number): void {
    this.favoritesService.toggleFavorite(serviceId);
  }

  isFavorite(serviceId: number): boolean {
    return this.favoritesService.isFavorite(serviceId);
  }
}
