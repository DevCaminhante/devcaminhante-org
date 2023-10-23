import { BrowserModule } from '@angular/platform-browser'
// eslint-disable-next-line import/named
import { MarkdownModule } from 'ngx-markdown'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideHttpClient } from '@angular/common/http'
import { type ApplicationConfig, importProvidersFrom } from '@angular/core'
import {
	PreloadAllModules,
	provideRouter,
	withComponentInputBinding,
	withDebugTracing,
	withPreloading
} from '@angular/router'

import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(
			routes,
			withComponentInputBinding(),
			withPreloading(PreloadAllModules),
			withDebugTracing()
		),
		importProvidersFrom(
			BrowserModule,
			MarkdownModule.forRoot()
		),
		provideAnimations(),
		provideHttpClient()
	]
}
