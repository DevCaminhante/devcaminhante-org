/* eslint-disable sort-keys-fix/sort-keys-fix */
import {Route} from '@angular/router'

import {blogRoutes} from '@app/blog/blog.routes'
import {AppRoute, Constant} from '@app/constants'
import {HomeComponent} from '@app/home/home.component'

export const shellRoutes: Route[] = [
	{
		path: Constant.EMPTY_STRING,
		component: HomeComponent
	},
	{
		path: AppRoute.blog.literal,
		loadComponent: () =>
			import('../features/blog/blog.component').then((m) => m.BlogComponent),
		children: blogRoutes
	}
	// ,
	// {
	// 	path: 'sobre',
	// 	loadComponent: () =>
	// 		import('../features/sobre/sobre.component').then((m) => m.SobreComponent)
	// }
]
