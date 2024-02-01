/* eslint-disable sort-keys-fix/sort-keys-fix */
import {Route} from '@angular/router'

import {ShellComponent} from '@app/layout/shell.component'
import {shellRoutes} from '@app/layout/shell.routes'

export const appRoutes: Route[] = [
	{
		path: '',
		component: ShellComponent,
		children: shellRoutes
	}
]
