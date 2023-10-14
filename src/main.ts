import { bootstrapApplication } from '@angular/platform-browser'
import { initRuntime } from '@master/css'

import { AppComponent } from './app/app.component'
import { appConfig } from './app/app.config'
import { config } from '../master.css'

initRuntime(config)

bootstrapApplication(AppComponent, appConfig)
	.catch((error) => {
		console.error(error)
	})
