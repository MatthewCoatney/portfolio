import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArticleShell } from './blog-article-shell';

describe('BlogArticleShell', () => {
  let component: BlogArticleShell;
  let fixture: ComponentFixture<BlogArticleShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogArticleShell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogArticleShell);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
