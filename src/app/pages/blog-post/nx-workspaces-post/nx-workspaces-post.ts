import { Component, OnInit } from '@angular/core';
import { ContactFooterComponent } from '../../../components/contact-footer/contact-footer.component';
import { BlogArticleShell } from '../../../components/blog-article-shell/blog-article-shell';
import { getBlogPost } from '../../../data/blog-posts';
import { BlogPost } from '../../../models/blog-post';
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-nx-workspaces-post',
  standalone: true,
  imports: [
    BlogArticleShell,
    ContactFooterComponent
  ],
  templateUrl: './nx-workspaces-post.html',
  styleUrl: './nx-workspaces-post.css'
})
export class NxWorkspacesPost implements OnInit {
  readonly post: BlogPost = getBlogPost('monorepos-nx-workspaces')!;

  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setBlogPost(this.post);
  }
}
