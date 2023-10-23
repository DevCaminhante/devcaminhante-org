/* eslint-disable sort-keys */
import { type Routes } from '@angular/router'

import { ShellComponent } from '@dcorg/core/shell/shell.component'
import { shellRoutes } from '@dcorg/core/shell/shell.routes'

export const routes: Routes = [
	{
		path: '',
		component: ShellComponent,
		children: shellRoutes
	}
]
