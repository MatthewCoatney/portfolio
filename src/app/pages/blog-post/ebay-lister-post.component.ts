import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactFooterComponent } from '../../components/contact-footer/contact-footer.component';

@Component({
  selector: 'app-ebay-lister-post',
  standalone: true,
  imports: [RouterLink, ContactFooterComponent],
  templateUrl: './ebay-lister-post.component.html',
  styleUrl: './ebay-lister-post.component.css'
})
export class EbayListerPostComponent {}
