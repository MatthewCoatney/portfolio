import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-document-modal',
  standalone: true,
  imports: [],
  templateUrl: './document-modal.html',
  styleUrl: './document-modal.css'
})
export class DocumentModal {
  @Input() title = '';
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }
}
