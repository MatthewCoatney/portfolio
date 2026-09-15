import { Component, OnInit } from '@angular/core';
import { ContactFooterComponent } from '../../../components/contact-footer/contact-footer.component';
import { BlogArticleShell } from '../../../components/blog-article-shell/blog-article-shell';
import { getBlogPost } from '../../../data/blog-posts';
import { BlogPost } from '../../../models/blog-post';
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-rapid-vs-agile-post',
  standalone: true,
  imports: [BlogArticleShell, ContactFooterComponent],
  templateUrl: './a-bullet-is-rapid-a-leopard-is-agile.html',
  styleUrl: './a-bullet-is-rapid-a-leopard-is-agile.css'
})
export class RapidVsAgilePost implements OnInit {
  readonly post: BlogPost =
    getBlogPost('a-bullet-is-rapid-a-leopard-is-agile')!;

  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setBlogPost(this.post);
  }
}
