import { Route } from '@angular/router';

import { ShellComponent } from './layout/shell.component'
import { shellRoutes } from './layout/shell.routes'

export const appRoutes: Route[] = [
	{
		path: '',
		component: ShellComponent,
		children: shellRoutes,
	}
];
