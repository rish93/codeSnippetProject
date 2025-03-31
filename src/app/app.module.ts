import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatCardModule } from '@angular/material/card';

// Import Highlight.js
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);
@NgModule({ 
    
    declarations: [
   
        AppComponent
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatToolbarModule,
        MatCardModule,
        MatTabsModule,
        MatButtonModule,
        HighlightModule], providers: [
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: { coreLibraryLoader: () => import('highlight.js') }
        },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
