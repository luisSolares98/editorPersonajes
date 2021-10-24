import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAvataresComponent } from './list-avatares.component';

describe('ListAvataresComponent', () => {
  let component: ListAvataresComponent;
  let fixture: ComponentFixture<ListAvataresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAvataresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAvataresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
