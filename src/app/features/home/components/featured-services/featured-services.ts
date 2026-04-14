import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ServicesDataService } from '../../../../core/services/services-data.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-featured-services',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './featured-services.html',
  styleUrl: './featured-services.css',
})
export class FeaturedServices {

  private servicesDataService = inject(ServicesDataService);
  
  sectionTitle = 'Servicios Destacados';
  sectionDescription =
    'El pináculo de nuestros servicios en la palma de tus manos.';
  viewAllText = 'Ver todas las categorías';
  viewAllLink = '/servicios';

  // Obtenemos los servicios destacados para mostrar en el home
  services$ = this.servicesDataService.getFeaturedServices();
}