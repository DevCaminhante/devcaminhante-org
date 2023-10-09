import {bootstrapApplication} from '@angular/platform-browser'
import {initRuntime} from '@master/css'
import {config} from 'master.css.js'
import {appConfig} from './app/app.config.js'
import {AppComponent} from './app/app.component.js'

initRuntime(config);

(window as any).doBootstrap = () => {
	bootstrapApplication(AppComponent, appConfig).catch(error => {
		console.error(error)
	})
}
