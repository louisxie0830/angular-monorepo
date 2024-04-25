import { Component } from '@angular/core';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrl: './ai.component.scss',
})
export class AiComponent {
  conditionExpression: string;

  constructor() {
    this.conditionExpression = 'gemini-pro';
  }

  setConditionExpression(type: string): void {
    this.conditionExpression = type;
  }
}
