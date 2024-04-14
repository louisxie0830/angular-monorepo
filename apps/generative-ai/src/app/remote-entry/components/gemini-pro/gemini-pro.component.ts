import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GenerativeAiService } from '../../services/generative-ai.service';

@Component({
  selector: 'app-gemini-pro',
  templateUrl: './gemini-pro.component.html',
  styleUrl: './gemini-pro.component.scss'
})
export class GeminiProComponent {
  isLoading = false;
  isBlocked = false;

  prompt = this.formBuilder.control('', Validators.required);
  promptText = ''
  responseText = '';

  constructor(
    public formBuilder: FormBuilder,
    private cdRef: ChangeDetectorRef,
    private generativeAiService: GenerativeAiService) { }

  async sendText() {
    const genModel = this.generativeAiService.getGenModel('gemini-pro');

    this.promptText = this.prompt.value ?? '';
    this.generativeAiService.resetConfig();
    this.isLoading = true;
    this.isBlocked = false;

    try {
      const result = await genModel.generateContent(this.promptText);
      if (!result || !result.response) {
        this.isBlocked = true;
        this.responseText = "Response not available.";
        return;
      }

      const response = result.response;
      if (response.promptFeedback?.blockReason) {
        this.responseText = `Not available. ${response.promptFeedback?.blockReason} reason.`;
      } else {
        this.responseText = response.text();
      }

    } catch (error) {
      console.error('Error generating content:', error);
      this.isBlocked = true;
      this.responseText = "Error occurred while generating content.";
    } finally {
      this.isLoading = false;
      this.prompt.reset();
    }
  }
}
