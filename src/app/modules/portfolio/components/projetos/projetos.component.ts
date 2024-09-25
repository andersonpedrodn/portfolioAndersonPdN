import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjetos } from '../../interface/IProjetos.interface';

//Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog'; 

//Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent {
  #dialog = inject(MatDialog);

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
      title: 'Projeto em construção 2',
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
      title: 'Projeto em construção 3',
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
      title: 'Projeto em construção 4',
      width: '100px',
      height: '51px',
      description: '',
      links: [{
        name: 'Conheça',
        href: 'https://programadorAnderson.com.br',
      }]
    },
  ]);

  public openDialog(data: IProjetos){
    this.#dialog.open(DialogProjectsComponent,{
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
