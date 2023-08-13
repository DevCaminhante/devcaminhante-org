import { ApplicationConfig } from '@angular/core'
import { provideContent, withMarkdownRenderer } from '@analogjs/content'
import { provideFileRouter } from '@analogjs/router'
import { provideHttpClient } from '@angular/common/http'
import { withComponentInputBinding } from '@angular/router'
import {
  BrowserAnimationsModule,
  provideAnimations
} from '@angular/platform-browser/animations'
import {
  BrowserModule,
  provideClientHydration
} from '@angular/platform-browser'
import 'prismjs/components/prism-powershell.js'

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideClientHydration(),
    provideContent(withMarkdownRenderer()),
    provideFileRouter(withComponentInputBinding()),
    provideHttpClient(),
    BrowserModule,
    BrowserAnimationsModule
  ]
}
