import { Component } from '@angular/core';

// Components
import { HeaderComponent } from '../../components/header/header.component';
import { ConhecimentosComponent } from '../../components/conhecimentos/conhecimentos.component';
import { ExperienciasComponent } from '../../components/experiencias/experiencias.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ConhecimentosComponent, ExperienciasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
