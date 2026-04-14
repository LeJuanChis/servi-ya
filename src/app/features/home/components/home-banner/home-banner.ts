import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-banner',
  imports: [RouterLink],
  templateUrl: './home-banner.html',
  styleUrl: './home-banner.css',
})
export class HomeBanner {
  ctaText = 'Explorar Catálogo';
  ctaLink = '/servicios';

  imageUrl = `/images/banner-office.jpeg`;
  imageAlt = 'Banner del home';
}
