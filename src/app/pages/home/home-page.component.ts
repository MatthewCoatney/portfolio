import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProjectShowcaseComponent } from '../../components/project-showcase/project-showcase.component';
import { AboutComponent } from '../../components/about/about.component';
import { ContactFooterComponent } from '../../components/contact-footer/contact-footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroComponent, ProjectShowcaseComponent, AboutComponent, ContactFooterComponent],
  template: `<main id="top"><app-hero /><app-project-showcase /><app-about /></main><app-contact-footer />`
})
export class HomePageComponent {}
