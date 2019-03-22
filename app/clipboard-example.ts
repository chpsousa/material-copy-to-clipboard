import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'clipboard-example',
  templateUrl: 'clipboard-example.html',
  styleUrls: ['clipboard-example.css'],
})
export class ClipboardExample {

  @ViewChild('inputUrl') inputUrl: ElementRef;

  constructor() {
  }

  copy(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }
}