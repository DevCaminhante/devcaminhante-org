import { appConfig } from './app.config'
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core'
import {
  provideServerRendering,
  ɵSERVER_CONTEXT as SERVER_CONTEXT
} from '@angular/platform-server'

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    { provide: SERVER_CONTEXT, useValue: 'ssr-analog' }
  ]
}

export const config = mergeApplicationConfig(appConfig, serverConfig)
