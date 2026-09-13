import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { BlogPost } from '../models/blog-post';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly jsonLdId = 'blog-post-json-ld';

  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  setBlogPost(post: BlogPost): void {
    const canonicalUrl = this.buildCanonicalUrl(post.route);

    this.title.setTitle(post.seoTitle);

    this.meta.updateTag({
      name: 'description',
      content: post.description
    });

    this.meta.updateTag({
      name: 'keywords',
      content: post.topics.join(', ')
    });

    this.meta.updateTag({
      name: 'author',
      content: 'Matthew Coatney'
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow, max-image-preview:large'
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'article'
    });

    this.meta.updateTag({
      property: 'og:title',
      content: post.title
    });

    this.meta.updateTag({
      property: 'og:description',
      content: post.description
    });

    this.meta.updateTag({
      property: 'og:url',
      content: canonicalUrl
    });

    this.meta.updateTag({
      property: 'og:site_name',
      content: 'Matthew Coatney'
    });

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: post.title
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: post.description
    });

    if (post.published) {
      this.meta.updateTag({
        property: 'article:published_time',
        content: post.published
      });
    } else {
      this.meta.removeTag("property='article:published_time'");
    }

    if (post.updated) {
      this.meta.updateTag({
        property: 'article:modified_time',
        content: post.updated
      });
    } else {
      this.meta.removeTag("property='article:modified_time'");
    }

    this.setCanonicalUrl(canonicalUrl);
    this.setBlogPostingSchema(post, canonicalUrl);
  }

  private buildCanonicalUrl(route: string): string {
    const origin =
      this.document.location?.origin &&
      this.document.location.origin !== 'null'
        ? this.document.location.origin
        : '';

    return `${origin}${route}`;
  }

  private setCanonicalUrl(url: string): void {
    let canonical = this.document.head.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', url);
  }

  private setBlogPostingSchema(
    post: BlogPost,
    canonicalUrl: string
  ): void {
    this.document
      .getElementById(this.jsonLdId)
      ?.remove();

    const schema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: canonicalUrl,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl
      },
      author: {
        '@type': 'Person',
        name: 'Matthew Coatney'
      },
      publisher: {
        '@type': 'Person',
        name: 'Matthew Coatney'
      },
      keywords: post.topics.join(', '),
      articleSection: post.category
    };

    if (post.published) {
      schema['datePublished'] = post.published;
    }

    if (post.updated) {
      schema['dateModified'] = post.updated;
    }

    const script = this.document.createElement('script');

    script.id = this.jsonLdId;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);

    this.document.head.appendChild(script);
  }
}
