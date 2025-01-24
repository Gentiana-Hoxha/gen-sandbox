import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentNgContentComponent } from './parent-ng-content.component';

describe('ParentNgContentComponent', () => {
  let component: ParentNgContentComponent;
  let fixture: ComponentFixture<ParentNgContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentNgContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ParentNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
