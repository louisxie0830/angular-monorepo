import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeminiProChatComponent } from './gemini-pro-chat.component';

describe('GeminiProChatComponent', () => {
  let component: GeminiProChatComponent;
  let fixture: ComponentFixture<GeminiProChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeminiProChatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GeminiProChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
