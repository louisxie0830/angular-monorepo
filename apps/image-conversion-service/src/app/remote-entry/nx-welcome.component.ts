import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nx-welcome',
  templateUrl: './nx-welcome.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  imagesSrc: string[] = [];
  @ViewChild('files') filesRef: ElementRef<HTMLInputElement> | undefined;


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
  }

  delImageSrc(src: string) {
    this.imagesSrc = this.imagesSrc.filter((item) => item !== src);
  }
}
