import { ChangeDetectorRef, Component } from '@angular/core';
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
    private cdRef: ChangeDetectorRef,
    private generativeAiService: GenerativeAiService,
    private fileConversionService: FileConversionService
  ) { }
}
