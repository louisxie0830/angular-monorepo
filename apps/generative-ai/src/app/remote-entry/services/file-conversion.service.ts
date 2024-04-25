import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileConversionService {

  constructor(private http: HttpClient) { }

  async convertToBase64(filePath: string): Promise<string | ArrayBuffer | null> {
    const blob = await firstValueFrom(this.http.get(filePath, { responseType: 'blob' }));
    return this.convertBlobToBase64(blob);
  }

  async convertFileToBase64(file: File): Promise<string | ArrayBuffer | null> {
    const blob = new Blob([file], { type: 'image/jpeg' });
    return this.convertBlobToBase64(blob);
  }

  async convertBlobToBase64(blob: Blob): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.onloadend = () => {
        const base64Data = fileReader.result as string;
        resolve(base64Data.substring(base64Data.indexOf(',') + 1));
      };

      fileReader.onerror = error => {
        reject(error);
      };

      fileReader.readAsDataURL(blob);
    });
  }
}
