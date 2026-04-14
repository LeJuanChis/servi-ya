import { Component } from '@angular/core';
import { HomeBanner } from '../../components/home-banner/home-banner';
import { FeaturedServices } from '../../components/featured-services/featured-services';
import { HomeCta } from '../../components/home-cta/home-cta';

@Component({
  selector: 'app-home',
  imports: [HomeBanner, FeaturedServices, HomeCta],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
