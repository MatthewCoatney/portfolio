import { Component } from '@angular/core';
import { HeroComponent, HeroDocument } from '../../components/hero/hero.component';
import { ProjectShowcaseComponent } from '../../components/project-showcase/project-showcase.component';
import { AboutComponent } from '../../components/about/about.component';
import { ContactFooterComponent } from '../../components/contact-footer/contact-footer.component';
import { DocumentModal } from '../../components/document-modal/document-modal';
import { Resume } from '../../components/resume/resume';
import { BragDoc } from '../../components/brag-doc/brag-doc';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroComponent,
    ProjectShowcaseComponent,
    AboutComponent,
    ContactFooterComponent,
    DocumentModal,
    Resume,
    BragDoc
  ],
  template: `
    <main id="top">
      <app-hero (openDocument)="openDocument($event)" />
      <app-project-showcase />
      <app-about />
    </main>

    <app-contact-footer />

    @if (selectedDocument) {
      <app-document-modal
        [title]="selectedDocument === 'resume' ? 'Résumé' : 'Brag Doc'"
        (close)="closeDocument()"
      >
        @if (selectedDocument === 'resume') {
          <app-resume />
        } @else {
          <app-brag-doc />
        }
      </app-document-modal>
    }
  `
})
export class HomePageComponent {
  selectedDocument: HeroDocument | null = null;

  openDocument(selected: HeroDocument): void {
    this.selectedDocument = selected;
    window.document.body.classList.add('modal-open');
  }

  closeDocument(): void {
    this.selectedDocument = null;
    window.document.body.classList.remove('modal-open');
  }
}
