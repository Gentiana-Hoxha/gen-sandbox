import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildNgContentComponent } from './child-ng-content.component';

describe('ChildNgContentComponent', () => {
  let component: ChildNgContentComponent;
  let fixture: ComponentFixture<ChildNgContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildNgContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
