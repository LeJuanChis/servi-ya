import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FeaturedServiceItem {
  category: string;
  title: string;
  description?: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
  imageAlt: string;
  size: 'large' | 'small';
  layout: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

@Component({
  selector: 'app-featured-services',
  imports: [RouterLink],
  templateUrl: './featured-services.html',
  styleUrl: './featured-services.css',
})
export class FeaturedServices {
  sectionTitle = 'Servicios Destacados';
  sectionDescription =
    'El pináculo de nuestros servicios en la palma de tus manos.';
  viewAllText = 'Ver todas las categorías';
  viewAllLink = '/servicios';

  services: FeaturedServiceItem[] = [
    {
      category: 'TECNOLOGÍA',
      title: 'Escalamiento de Infraestructura en la Nube',
      description:
        'Soluciones arquitectónicas potenciadas para empresas digitales de alto crecimiento que buscan un tiempo de actividad del 99%',
      ctaText: 'Saber más',
      ctaLink: '/servicios',
      imageUrl: 'images/cloud-service.jpg',
      imageAlt: 'Ilustración de infraestructura en la nube',
      size: 'large',
      layout: 'top-left',
    },
    {
      category: 'TURISMO',
      title: 'Escapadas Curadas',
      description: '',
      ctaText: 'Saber más',
      ctaLink: '/servicios',
      imageUrl: 'images/service-travel.jpg',
      imageAlt: 'Servicio de escapadas curadas',
      size: 'small',
      layout: 'top-right',
    },
    {
      category: 'EDUCACIÓN',
      title: 'Mentoría Ejecutiva',
      description: '',
      ctaText: 'Saber más',
      ctaLink: '/servicios',
      imageUrl: 'images/service-mentoring.jpg',
      imageAlt: 'Servicio de mentoría ejecutiva',
      size: 'small',
      layout: 'bottom-left',
    },
    {
      category: 'COMERCIAL',
      title: 'Diseño Retail Estratégico',
      description:
        'Transformando espacios físicos en experiencias de marca inmersivas que impulsan el compromiso.',
      ctaText: 'Saber más',
      ctaLink: '/servicios',
      imageUrl: 'images/service-retail.jpg',
      imageAlt: 'Servicio de diseño retail estratégico',
      size: 'large',
      layout: 'bottom-right',
    },
  ];
}