import {mergeApplicationConfig, type ApplicationConfig} from '@angular/core'
import {provideServerRendering} from '@angular/platform-server'
import {appConfig} from './app.config.js'

const serverConfig: ApplicationConfig = {
	providers: [
		provideServerRendering()
	]
}

export const config = mergeApplicationConfig(appConfig, serverConfig)
