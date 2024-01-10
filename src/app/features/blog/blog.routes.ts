import {Route} from '@angular/router'

export const blogRoutes: Route[] = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'articles'
	},
	{
		path: 'articles',
		loadComponent: () =>
			import('./article-list/article-list.component').then(
				(m) => m.ArticleListComponent
			)
	}
]
