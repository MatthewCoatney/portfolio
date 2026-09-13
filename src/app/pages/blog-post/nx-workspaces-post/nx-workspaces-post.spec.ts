import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NxWorkspacesPost } from './nx-workspaces-post';

describe('NxWorkspacesPost', () => {
  let component: NxWorkspacesPost;
  let fixture: ComponentFixture<NxWorkspacesPost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NxWorkspacesPost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NxWorkspacesPost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
