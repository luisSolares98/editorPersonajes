import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneAvatarComponent } from './clone-avatar.component';

describe('CloneAvatarComponent', () => {
  let component: CloneAvatarComponent;
  let fixture: ComponentFixture<CloneAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloneAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
