import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactFooterComponent } from '../../components/contact-footer/contact-footer.component';

@Component({
  selector: 'app-blog-index',
  standalone: true,
  imports: [RouterLink, ContactFooterComponent],
  templateUrl: './blog-index.component.html',
  styleUrl: './blog-index.component.css'
})
export class BlogIndexComponent {}
