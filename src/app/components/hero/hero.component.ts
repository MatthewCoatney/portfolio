import { Component, EventEmitter, Output } from '@angular/core';

export type HeroDocument = 'resume' | 'brag';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Output() openDocument = new EventEmitter<HeroDocument>();

  showDocument(document: HeroDocument): void {
    this.openDocument.emit(document);
  }
}
