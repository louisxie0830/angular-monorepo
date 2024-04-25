import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeminiProVisionComponent } from './gemini-pro-vision.component';

describe('GeminiProVisionComponent', () => {
  let component: GeminiProVisionComponent;
  let fixture: ComponentFixture<GeminiProVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeminiProVisionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GeminiProVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
