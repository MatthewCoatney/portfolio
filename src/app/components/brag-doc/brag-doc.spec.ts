import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BragDoc } from './brag-doc';

describe('BragDoc', () => {
  let component: BragDoc;
  let fixture: ComponentFixture<BragDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BragDoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BragDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
