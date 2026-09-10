import { Component } from '@angular/core';
@Component({ selector: 'app-contact-footer', standalone: true, templateUrl: './contact-footer.component.html', styleUrl: './contact-footer.component.css' })
export class ContactFooterComponent { readonly year = new Date().getFullYear(); }
