import { Component, signal } from '@angular/core';

// Interface
import { IConhecimentos } from '../../interface/IConhecimentos.interface';

@Component({
  selector: 'app-conhecimentos',
  standalone: true,
  imports: [],
  templateUrl: './conhecimentos.component.html',
  styleUrl: './conhecimentos.component.scss'
})
export class ConhecimentosComponent {
  public arrayConhecimentos = signal<IConhecimentos[]>([
    {
      src: 'assets/icons/conhecimentos/html.svg',
      alt: 'Logo HTML5'
    },
    {
      src: 'assets/icons/conhecimentos/css.svg',
      alt: 'Logo CSS'
    },
    {
      src: 'assets/icons/conhecimentos/javascript.svg',
      alt: 'Logo JavaScript'
    },
    {
      src: 'assets/icons/conhecimentos/angular.svg',
      alt: 'Logo Angular'
    },
    {
      src: 'assets/icons/conhecimentos/react.svg',
      alt: 'Logo React'
    },
    {
      src: 'assets/icons/conhecimentos/java.svg',
      alt: 'Logo Java'
    },
    {
      src: 'assets/icons/conhecimentos/figma.svg',
      alt: 'Logo Figma'
    },
    {
      src: 'assets/icons/conhecimentos/bootstrap.svg',
      alt: 'Logo Bootstrap'
    },
  ]);
}
