import { Component } from '@angular/core';

// Components
import { HeaderComponent } from '../../components/header/header.component';
import { ConhecimentosComponent } from '../../components/conhecimentos/conhecimentos.component';
import { ExperienciasComponent } from '../../components/experiencias/experiencias.component';
import { ProjetosComponent } from '../../components/projetos/projetos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ConhecimentosComponent, ExperienciasComponent, ProjetosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
