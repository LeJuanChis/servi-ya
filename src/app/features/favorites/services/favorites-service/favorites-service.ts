import { Injectable, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ServicesDataService } from '../../../../core/services/services-data.service';
import { ServiceItem } from '../../../../core/models/service-item.model';

@Injectable({
  providedIn: 'root',
})
// Servicio para gestionar los favoritos
export class FavoritesService {
  private readonly storageKey = 'favorite_service_ids';
  private servicesDataService = inject(ServicesDataService);

  private allServices = toSignal(this.servicesDataService.getServices(), { initialValue: [] as ServiceItem[] });
  private favoriteIds = signal<number[]>(this.loadFavorites());

  favorites = computed(() => {
    const ids = this.favoriteIds();
    return this.allServices().filter(service => ids.includes(service.id));
  });

  favoriteCount = computed(() => this.favoriteIds().length);

  isFavorite(serviceId: number): boolean {
    return this.favoriteIds().includes(serviceId);
  }

  // Esta función añade o elimina un favorito dependiendo de si ya está en la lista o no
  toggleFavorite(serviceId: number): void {
    const currentIds = this.favoriteIds();

    if (currentIds.includes(serviceId)) {
      const updatedIds = currentIds.filter(id => id !== serviceId);
      this.favoriteIds.set(updatedIds);
      this.persistFavorites(updatedIds);
      return;
    }

    const updatedIds = [...currentIds, serviceId];
    this.favoriteIds.set(updatedIds);
    this.persistFavorites(updatedIds);
  }

  removeFavorite(serviceId: number): void {
    const updatedIds = this.favoriteIds().filter(id => id !== serviceId);
    this.favoriteIds.set(updatedIds);
    this.persistFavorites(updatedIds);
  }

  clearFavorites(): void {
    this.favoriteIds.set([]);
    localStorage.removeItem(this.storageKey);
  }

  // Obtenemos los favoritos del localStorage
  private loadFavorites(): number[] {
    if (typeof window === 'undefined') {
      return [];
    }

    const raw = localStorage.getItem(this.storageKey);

    if (!raw) {
      return [];
    }

    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed.filter(id => typeof id === 'number') : [];
    } catch {
      return [];
    }
  }

  // Esta funcion añade el ID de un favorito al localStorage
  private persistFavorites(ids: number[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(ids));
  }
}