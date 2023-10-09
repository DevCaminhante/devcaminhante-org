import {bootstrapApplication} from '@angular/platform-browser'
import {importProvidersFrom, mergeApplicationConfig} from '@angular/core'
import {ServerModule} from '@angular/platform-server'
import {AppComponent} from './app/app.component.js'
import {config} from './app/app.config.server.js'

const serverConfig = mergeApplicationConfig(config, {
	providers: [importProvidersFrom(ServerModule)]
})

const bootstrapServer = async () => bootstrapApplication(AppComponent, serverConfig)

export default bootstrapServer
