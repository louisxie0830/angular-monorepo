import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { UploadService } from './services/upload.service';

@Component({
  selector: 'app-nx-welcome',
  templateUrl: './nx-welcome.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  imagesSrc: string[] = [];
  @ViewChild('filesRef') filesRef!: ElementRef;

  constructor(private uploadService: UploadService) { }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const files: FileList = target.files as FileList;
    this.imagesSrc = [];
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = () => {
          this.imagesSrc.push(reader.result as string);
        }
        reader.readAsDataURL(file);
      });
    }
  }

  delAllImage() {
    this.imagesSrc = [];
    this.filesRef.nativeElement.value = '';
  }

  delImageSrc(src: string) {
    this.imagesSrc = this.imagesSrc.filter((item) => item !== src);
  }

  uploadImage() {
    const formData = new FormData();
    for (let i = 0; i < this.filesRef.nativeElement.files.length; i++) {
      formData.append('images', this.filesRef.nativeElement.files[i], this.filesRef.nativeElement.files[i].name);
    }
    this.uploadService.fetchUploadImage(formData).subscribe(blob => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'compressed_images.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(a.href);
      this.delAllImage();
    });
  }
}
