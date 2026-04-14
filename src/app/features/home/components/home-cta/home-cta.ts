import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-cta',
  imports: [RouterLink],
  templateUrl: './home-cta.html',
  styleUrl: './home-cta.css',
})
export class HomeCta {
  title = 'Mantente informado sobre las últimas actualizaciones.';
  description =
    'Información semanal sobre tendencias tecnológicas, avances educativos y oportunidades comerciales exclusivas.';
  buttonText = 'Contáctanos';
  buttonLink = '/contacto';
}