import { Component, Input } from '@angular/core';
import { ProjectLoopItem } from '../../models/project';

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: ProjectLoopItem;
  @Input({ required: true }) totalProjects = 0;

  get isExternal(): boolean {
    return this.project.link.startsWith('http');
  }

  get visualTitle(): string {
    return this.project.id === 'ebay-lister' ? 'From image → market-ready data' : 'Case study framework';
  }

  get visualCaption(): string {
    return this.project.id === 'ebay-lister'
      ? 'Reduce repetitive research. Preserve human judgment.'
      : 'Problem → decisions → system → outcome.';
  }
}
