import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { PROJECTS } from '../../data/projects';
import { ProjectLoopItem } from '../../models/project';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-project-showcase',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './project-showcase.component.html',
  styleUrl: './project-showcase.component.css'
})
export class ProjectShowcaseComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scroller', { static: true }) scrollerRef!: ElementRef<HTMLElement>;

  readonly projects = PROJECTS;
  readonly loopProjects: ProjectLoopItem[] = [0, 1, 2].flatMap(copy =>
    PROJECTS.map(project => ({ ...project, copy }))
  );

  private observer?: IntersectionObserver;
  private resizeHandler = () => this.setInitialPosition();
  private scrollHandler = () => this.keepLooping();
  private resetting = false;

  ngAfterViewInit(): void {
    const scroller = this.scrollerRef.nativeElement;
    const cards = Array.from(scroller.querySelectorAll<HTMLElement>('.project-card'));

    this.observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        entry.target.classList.toggle('is-active', entry.isIntersecting && entry.intersectionRatio > 0.55);
      }
    }, { root: scroller, threshold: [0.3, 0.55, 0.8] });

    cards.forEach(card => this.observer?.observe(card));
    scroller.addEventListener('scroll', this.scrollHandler, { passive: true });
    window.addEventListener('resize', this.resizeHandler);
    requestAnimationFrame(() => this.setInitialPosition());
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.scrollerRef.nativeElement.removeEventListener('scroll', this.scrollHandler);
    window.removeEventListener('resize', this.resizeHandler);
  }

  private setInitialPosition(): void {
    const scroller = this.scrollerRef.nativeElement;
    const cards = Array.from(scroller.querySelectorAll<HTMLElement>('.project-card'));
    const middleStart = cards[this.projects.length];
    if (middleStart) scroller.scrollTop = middleStart.offsetTop;
  }

  private keepLooping(): void {
    if (this.resetting) return;
    const scroller = this.scrollerRef.nativeElement;
    const cards = Array.from(scroller.querySelectorAll<HTMLElement>('.project-card'));
    const middleStartCard = cards[this.projects.length];
    const thirdStartCard = cards[this.projects.length * 2];
    if (!middleStartCard || !thirdStartCard) return;

    const setHeight = thirdStartCard.offsetTop - middleStartCard.offsetTop;
    const middleStart = middleStartCard.offsetTop;
    const middleEnd = middleStart + setHeight;

    if (scroller.scrollTop < middleStart - setHeight * 0.35) {
      this.resetting = true;
      scroller.scrollTop += setHeight;
      requestAnimationFrame(() => this.resetting = false);
    } else if (scroller.scrollTop > middleEnd + setHeight * 0.35) {
      this.resetting = true;
      scroller.scrollTop -= setHeight;
      requestAnimationFrame(() => this.resetting = false);
    }
  }
}
