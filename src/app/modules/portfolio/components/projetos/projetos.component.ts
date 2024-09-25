import { Component, signal } from '@angular/core';

// Interface
import { IProjetos } from '../../interface/IProjetos.interface';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent {
  public arrayProjetos = signal<IProjetos[]>([
    {
      src: 'assets/img/projetos/loading.png',
      alt: 'Projeto em construção',
      title: 'Projeto em construção',
      width: '100px',
      height: '51px',
      description: '',
      links: [{
        name: 'Conheça',
        href: 'https://programadorAnderson.com.br',
      }]
    },
    {
      src: 'assets/img/projetos/loading.png',
      alt: 'Projeto em construção',
      title: 'Projeto em construção',
      width: '100px',
      height: '51px',
      description: '',
      links: [{
        name: 'Conheça',
        href: 'https://programadorAnderson.com.br',
      }]
    },
    {
      src: 'assets/img/projetos/loading.png',
      alt: 'Projeto em construção',
      title: 'Projeto em construção',
      width: '100px',
      height: '51px',
      description: '',
      links: [{
        name: 'Conheça',
        href: 'https://programadorAnderson.com.br',
      }]
    },
    {
      src: 'assets/img/projetos/loading.png',
      alt: 'Projeto em construção',
      title: 'Projeto em construção',
      width: '100px',
      height: '51px',
      description: '',
      links: [{
        name: 'Conheça',
        href: 'https://programadorAnderson.com.br',
      }]
    },
    {
      src: 'assets/img/projetos/loading.png',
      alt: 'Projeto em construção',
      title: 'Projeto em construção',
      width: '100px',
      height: '51px',
      description: '',
      links: [{
        name: 'Conheça',
        href: 'https://programadorAnderson.com.br',
      }]
    },
  ]);
}
