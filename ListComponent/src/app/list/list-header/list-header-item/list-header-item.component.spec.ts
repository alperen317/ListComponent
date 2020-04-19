import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHeaderItemComponent } from './list-header-item.component';

describe('ListHeaderItemComponent', () => {
  let component: ListHeaderItemComponent;
  let fixture: ComponentFixture<ListHeaderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHeaderItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHeaderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
