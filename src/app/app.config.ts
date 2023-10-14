import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { type ApplicationConfig, importProvidersFrom } from '@angular/core'

import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
	providers: [importProvidersFrom(BrowserModule, HttpClientModule, RouterModule.forRoot(routes))]
}
