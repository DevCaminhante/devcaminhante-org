import {HttpClient, provideHttpClient, withFetch} from '@angular/common/http'
import {ApplicationConfig} from '@angular/core'
import {provideClientHydration} from '@angular/platform-browser'
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async'
import {
	provideRouter,
	withComponentInputBinding,
	withRouterConfig
} from '@angular/router'

import {provideMarkdown} from 'ngx-markdown'

import {appRoutes} from './app.routes'

export const appConfig: ApplicationConfig = {
	providers: [
		provideHttpClient(withFetch()),
		provideClientHydration(),
		provideRouter(
			appRoutes,
			withComponentInputBinding(),
			withRouterConfig({paramsInheritanceStrategy: 'always'})
		),
		provideMarkdown({loader: HttpClient}),
		provideAnimationsAsync()
	]
}
