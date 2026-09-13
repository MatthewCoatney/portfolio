import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogPost } from '../../models/blog-post';

@Component({
  selector: 'app-blog-article-shell',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-article-shell.html',
  styleUrl: './blog-article-shell.css'
})
export class BlogArticleShell {
  @Input({ required: true }) post!: BlogPost;
}
