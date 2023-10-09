import {bootstrapApplication} from '@angular/platform-browser'
import {initRuntime} from '@master/css'
import {config} from 'master.css.js'
import {appConfig} from './app/app.config.js'
import {AppComponent} from './app/app.component.js'

initRuntime(config)

bootstrapApplication(AppComponent, appConfig)
	// eslint-disable-next-line unicorn/prefer-top-level-await
	.catch(error => {
		console.error(error)
	})
