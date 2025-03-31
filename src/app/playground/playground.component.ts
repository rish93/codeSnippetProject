import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [MatToolbarModule, MatCardModule, MatButtonModule,FormsModule, NgIf], // Import Material modules

  template: `
  <mat-toolbar color="primary">Angular Playground</mat-toolbar>

  <div class="container">
    <!-- Left Side: Code Editor -->
    <mat-card class="editor">
      <h3>Write Code</h3>
      <textarea [(ngModel)]="code" (keyup)="runCode()"></textarea>
      <button mat-raised-button color="primary" (click)="runCode()">Run</button>
    </mat-card>

    <!-- Right Side: Output -->
    <mat-card class="output">
      <h3>Output</h3>
      <iframe #outputFrame></iframe>
    </mat-card>
  </div>
`,
styles: [
  `
    .container {
      display: flex;
      gap: 20px;
      padding: 20px;
    }
    mat-card {
      padding: 15px;
      width: 50%;
    }
    textarea {
      width: 100%;
      height: 150px;
      font-family: monospace;
    }
    iframe {
      width: 100%;
      height: 150px;
      border: 1px solid #ddd;
      background: white;
    }
  `,
],})
export class PlaygroundComponent {
  code: string = `<h1>Hello, Angular!</h1>`;
  output: string = '';
  editorOptions = { theme: 'vs-dark', language: 'html' };

  runCode() {
    const iframe: any = document.querySelector('iframe');
    if (iframe) {
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      doc.open();
      doc.write(this.code);
      doc.close();
    }
  }
}