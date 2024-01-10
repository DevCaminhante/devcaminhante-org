import {bootstrapApplication} from '@angular/platform-browser'

import {AppComponent} from './app/app.component'
import {appConfig} from './app/app.config'

// eslint-disable-next-line no-console,unicorn/prefer-top-level-await
bootstrapApplication(AppComponent, appConfig).catch((error) => console.error(error))
