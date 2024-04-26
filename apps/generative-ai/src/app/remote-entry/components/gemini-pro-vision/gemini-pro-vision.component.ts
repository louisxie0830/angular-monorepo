import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GenerativeAiService } from '../../services/generative-ai.service';
import { FileConversionService } from '../../services/file-conversion.service';

@Component({
  selector: 'app-gemini-pro-vision',
  templateUrl: './gemini-pro-vision.component.html',
  styleUrl: './gemini-pro-vision.component.scss',
})
export class GeminiProVisionComponent {
  isLoading = false;
  isBlocked = false;

  prompt = this.formBuilder.control('', Validators.required);
  promptText = '';

  imageFile: File | undefined;
  preview = '';
  responseText = '';

  constructor(
    public formBuilder: FormBuilder,
    private generativeAiService: GenerativeAiService,
    private fileConversionService: FileConversionService
  ) { }

  fileChangeEvent(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    const fileList: FileList | null = element.files;

    if (fileList && fileList.length > 0) {
      this.imageFile = fileList[0];
      this.preview = URL.createObjectURL(this.imageFile);
    }
  }

  async sendTextAndImages() {
    try {
      this.promptText = this.prompt.value ?? '';
      this.generativeAiService.resetConfig();
      this.isLoading = true;
      this.isBlocked = false;

      const imageBase64 = await this.fileConversionService.convertFileToBase64(this.imageFile!);

      if (typeof imageBase64 !== 'string') {
        throw new Error('Image conversion to Base64 failed.');
      }

      const genModel = this.generativeAiService.getGenModel('gemini-pro-vision');
      const result = await genModel.generateContent([
        {
          inlineData: {
            mimeType: 'image/jpeg',
            data: imageBase64
          }
        },
        {
          text: this.prompt.value ?? ''
        }
      ]);
      const response = await result.response;
      if (!response) {
        this.isBlocked = true;
        this.responseText = 'No response.';
      } else {
        if (response.promptFeedback?.blockReason) {
          this.isBlocked = true;
          this.responseText = `Not available. ${response.promptFeedback?.blockReason} reason.`;
        } else {
          this.responseText = response.text();
        }
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
