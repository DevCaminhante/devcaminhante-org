import {bootstrapApplication} from '@angular/platform-browser'
import {AppComponent} from './app/app.component.js'
import {config} from './app/app.config.server.js'

const bootstrap = async () => bootstrapApplication(AppComponent, config)

export default bootstrap
