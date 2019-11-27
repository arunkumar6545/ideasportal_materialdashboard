import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeafeedsComponent } from './ideafeeds.component';

describe('IdeafeedsComponent', () => {
  let component: IdeafeedsComponent;
  let fixture: ComponentFixture<IdeafeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeafeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeafeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
