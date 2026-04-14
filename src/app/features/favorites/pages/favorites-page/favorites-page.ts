import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FavoritesService } from '../../../favorites/services/favorites-service/favorites-service';

@Component({
  selector: 'app-favorites-page',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './favorites-page.html',
  styleUrl: './favorites-page.css',
})
export class FavoritesPage {
  // Obtenemos el servicio de favoritos
  private favoritesService = inject(FavoritesService);

  favorites = this.favoritesService.favorites;
  favoriteCount = this.favoritesService.favoriteCount;

  hasFavorites = computed(() => this.favorites().length > 0);

  removeFavorite(serviceId: number): void {
    this.favoritesService.removeFavorite(serviceId);
  }

  // Limpiar favoritos
  clearFavorites(): void {
    this.favoritesService.clearFavorites();
  }
}