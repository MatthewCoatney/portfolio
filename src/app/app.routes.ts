import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { BlogIndexComponent } from './pages/blog-index/blog-index.component';
import { EbayListerPostComponent } from './pages/blog-post/ebay-lister-post.component';
import { NxWorkspacesPost } from './pages/blog-post/nx-workspaces-post/nx-workspaces-post';
import { RapidVsAgilePost } from './pages/blog-post/a-bullet-is-rapid-a-leopard-is-agile/a-bullet-is-rapid-a-leopard-is-agile';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Matthew Coatney — Software Engineer' },
  { path: 'blog', component: BlogIndexComponent, title: 'Blog — Matthew Coatney' },
  {
    path: 'blog/building-an-ai-assisted-ebay-lister',
    component: EbayListerPostComponent,
    title: 'Building an AI-Assisted eBay Lister — Matthew Coatney'
  },
  {
    path: 'blog/monorepos-nx-workspaces',
    component: NxWorkspacesPost,
    title: 'Monorepos with Nx Workspaces — Matthew Coatney'
  },
  {
    path: 'blog/a-bullet-is-rapid-a-leopard-is-agile',
    component: RapidVsAgilePost,
    title: 'A Bullet Is Rapid. A Leopard Is Agile. — Matthew Coatney'
  },
  { path: '**', redirectTo: '' }
];
