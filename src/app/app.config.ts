import {HttpClient, provideHttpClient} from '@angular/common/http'
import {ApplicationConfig} from '@angular/core'
import {provideClientHydration} from '@angular/platform-browser'
import {
	provideRouter,
	withComponentInputBinding,
	withRouterConfig
} from '@angular/router'

import {provideMarkdown} from 'ngx-markdown'

import {appRoutes} from './app.routes'

export const appConfig: ApplicationConfig = {
	providers: [
		provideHttpClient(),
		provideClientHydration(),
		provideRouter(
			appRoutes,
			withComponentInputBinding(),
			withRouterConfig({paramsInheritanceStrategy: 'always'})
		),
		provideMarkdown({loader: HttpClient})
	]
}
