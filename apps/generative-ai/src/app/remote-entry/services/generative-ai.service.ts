import { Injectable } from '@angular/core';
import { GenerativeModel, GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import { BehaviorSubject } from 'rxjs';

export interface settingConfigs {
  temperature: number;
  top_k: number;
  top_p: number;
  maxOutputTokens: number;
}

@Injectable({
  providedIn: 'root'
})
export class GenerativeAiService {
  private googleGenerativeAI: GoogleGenerativeAI;

  private genConfig = new BehaviorSubject({
    safetySettings: [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE
      }
    ],
    temperature: 0.9,
    top_k: 32,
    top_p: 1,
    maxOutputTokens: 100
  });

  genConfig$ = this.genConfig.asObservable();

  getGenModel(model: string): GenerativeModel {
    return this.googleGenerativeAI.getGenerativeModel({
      model,
      ...this.genConfig.value
    });
  }

  setConfig(configs: settingConfigs) {
    this.genConfig.next({
      ...this.genConfig.value,
      ...configs,
    });
  }

  resetConfig() {
    this.genConfig.next({ ...this.genConfig.value });
  }

  constructor() {
    this.googleGenerativeAI = new GoogleGenerativeAI('AIzaSyDqar1AoWpdCVRaeKO1CsMsmxbBW8z41Gc');
  }
}
