import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

// Import Highlight.js
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import typescript from 'highlight.js/lib/languages/typescript';
const hljs = require('highlight.js/lib/core');
const json = require('highlight.js/lib/languages/json');

hljs.registerLanguage('json', json);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule,
    MatButtonModule,
    HighlightModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: { coreLibraryLoader: () => import('highlight.js') }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
