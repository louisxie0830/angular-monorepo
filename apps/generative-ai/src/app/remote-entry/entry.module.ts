import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';
import { SettingsComponent } from './components/settings/settings.component';
import { AiComponent } from './components/ai/ai.component';
import { SettingComponent } from './components/setting/setting.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GeminiProComponent } from './components/gemini-pro/gemini-pro.component';
import { GeminiProVisionComponent } from './components/gemini-pro-vision/gemini-pro-vision.component';
import { MarkdownModule } from 'ngx-markdown';
import { GeminiProChatComponent } from './components/gemini-pro-chat/gemini-pro-chat.component';

@NgModule({
  declarations: [
    RemoteEntryComponent,
    NxWelcomeComponent,
    SettingsComponent,
    AiComponent,
    SettingComponent,
    GeminiProComponent,
    GeminiProVisionComponent,
    GeminiProChatComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, MarkdownModule.forRoot(), RouterModule.forChild(remoteRoutes)],
  providers: [],
  exports: [
    SettingsComponent,
    AiComponent,
    SettingComponent,
    GeminiProComponent,
    GeminiProVisionComponent,
    GeminiProChatComponent,
  ],
})
export class RemoteEntryModule {}
