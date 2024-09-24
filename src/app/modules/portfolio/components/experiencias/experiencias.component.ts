import { Component, signal } from '@angular/core';
// Interface
import { IExperiencias } from '../../interface/IExperiencias.interface';

@Component({
  selector: 'app-experiencias',
  standalone: true,
  imports: [],
  templateUrl: './experiencias.component.html',
  styleUrl: './experiencias.component.scss'
})
export class ExperienciasComponent {
  public arrayExperiencias = signal<IExperiencias[]>([
    {
      summary: {
        strong: 'Front-end Estagiário',
        p: 'TRE-RN | Set 2024 - Atual'
      },
      text: '<p>Atuando como estagiário em Desenvolvimento Web no TRE-RN na Seção de Novas Tecnologias e Desenvolvimento Web (SNT) </ p>'
    }
  ])
}
