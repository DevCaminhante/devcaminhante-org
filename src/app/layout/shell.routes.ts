/* eslint-disable sort-keys-fix/sort-keys-fix */
import {Route} from '@angular/router'

import {blogRoutes} from '../features/blog/blog.routes'
import {HomeComponent} from '../features/home/home.component'

export const shellRoutes: Route[] = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'blog',
		loadComponent: () =>
			import('../features/blog/blog.component').then((m) => m.BlogComponent),
		children: blogRoutes
	},
	{
		path: 'sobre',
		loadComponent: () =>
			import('../features/sobre/sobre.component').then((m) => m.SobreComponent)
	}
]
