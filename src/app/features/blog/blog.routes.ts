/* eslint-disable sort-keys-fix/sort-keys-fix */
import {Route} from '@angular/router'

import {articleContentResolver} from '@app/resolvers/article-content.resolver'
import {articleListResolver} from '@app/resolvers/article-list.resolver'

export const blogRoutes: Route[] = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'articles'
	},
	{
		path: 'articles',
		resolve: {json: articleListResolver},
		loadComponent: () =>
			import('./article-list/article-list.component').then(
				(m) => m.ArticleListComponent
			)
	},
	{
		path: 'articles/:slug',
		resolve: {json: articleContentResolver},
		loadComponent: () =>
			import('./article-details/article-details.component').then(
				(m) => m.ArticleDetailsComponent
			)
	}
]
