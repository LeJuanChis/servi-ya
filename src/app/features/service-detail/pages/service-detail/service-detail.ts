import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ServicesDataService } from '../../../../core/services/services-data.service';

@Component({
  selector: 'app-service-detail',
  imports: [CurrencyPipe, RouterLink, AsyncPipe],
  templateUrl: './service-detail.html',
  styleUrl: './service-detail.css',
})
export class ServiceDetail {
  private route = inject(ActivatedRoute);
  private servicesDataService = inject(ServicesDataService);

  service$ = this.route.paramMap.pipe(
    switchMap(params =>
      this.servicesDataService.getServiceBySlug(params.get('slug') ?? '')
    )
  );
}