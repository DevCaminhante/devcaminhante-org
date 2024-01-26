/* eslint-disable sort-keys-fix/sort-keys-fix */
import {Route} from '@angular/router'

const blogArticleData = {
	articles: [
		{
			author: 'Klaus Ferreira',
			date: '2021-07-07',
			slug: '2021-07-07_e-nos-tornamos-devcaminhantes',
			title: '...E nos tornamos DevCaminhantes'
		}
	]
}

export const blogRoutes: Route[] = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'articles'
	},
	{
		path: 'articles',
		data: blogArticleData,
		loadComponent: () =>
			import('./article-list/article-list.component').then(
				(m) => m.ArticleListComponent
			)
	},
	{
		path: 'articles/:slug',
		loadComponent: () =>
			import('./article-details/article-details.component').then(
				(m) => m.ArticleDetailsComponent
			)
	}
]
