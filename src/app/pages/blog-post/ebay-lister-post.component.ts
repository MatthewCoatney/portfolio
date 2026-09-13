import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactFooterComponent } from '../../components/contact-footer/contact-footer.component';
import { getBlogPost } from '../../data/blog-posts';
import { BlogPost } from '../../models/blog-post';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-ebay-lister-post',
  standalone: true,
  imports: [
    RouterLink,
    ContactFooterComponent
  ],
  templateUrl: './ebay-lister-post.component.html',
  styleUrl: './ebay-lister-post.component.css'
})
export class EbayListerPostComponent implements OnInit {
  readonly post: BlogPost =
    getBlogPost('building-an-ai-assisted-ebay-lister')!;

  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setBlogPost(this.post);
  }
}
