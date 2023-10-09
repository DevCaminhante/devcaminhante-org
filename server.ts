import {fileURLToPath} from 'node:url'
import {dirname, join} from 'node:path'
import process from 'node:process'
import {APP_BASE_HREF} from '@angular/common'
import {ngExpressEngine} from '@nguniversal/express-engine'
import express from 'express'
import {renderHTML} from '@master/css'
import {config} from 'master.css.js'
import bootstrap from './src/main.server.js'

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
	const server = express()
	const distFolder = dirname(fileURLToPath(import.meta.url))
	const indexHtml = join(distFolder, 'index.server.html')

	// Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
	server.engine('html', ngExpressEngine({
		bootstrap
	}))

	server.set('view engine', 'html')
	server.set('views', distFolder)

	// Example Express Rest API endpoints
	// server.get('/api/**', (req, res) => { });
	// Serve static files from /browser
	server.get('*.*', express.static(distFolder, {
		maxAge: '1y'
	}))

	// All regular routes use the Universal engine
	server.get('*', (request, response) => {
		response.render(indexHtml, {req: request, providers: [{provide: APP_BASE_HREF, useValue: request.baseUrl}]},
			(error: Error, html: string) => {
				if (error) {
					console.log(error)
				} else {
					response.send(renderHTML(html, config))
				}
			})
	})

	return server
}

function run(): void {
	const port = process.env['PORT'] ?? 4000

	// Start up the Node server
	const server = app()
	server.listen(port, () => {
		console.log(`Node Express server listening on http://localhost:${port}`)
	})
}

run()
