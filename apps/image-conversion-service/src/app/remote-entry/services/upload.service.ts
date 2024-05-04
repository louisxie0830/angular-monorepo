import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  fetchUploadImage(formData: FormData) {
    console.log('formData: ', formData);
    return this.http.post('https://image-conversion-service.onrender.com/upload', formData, {
      responseType: 'blob'
    });
  }
}
