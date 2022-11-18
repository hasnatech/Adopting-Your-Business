import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkFrameComponent } from './link-frame.component';

describe('LinkFrameComponent', () => {
  let component: LinkFrameComponent;
  let fixture: ComponentFixture<LinkFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
