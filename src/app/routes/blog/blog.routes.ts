/* eslint-disable sort-keys */
import { BlogComponent } from './blog.component'
import { type Routes } from '@angular/router'

export const blogRoutes: Routes = [
	{
		path: '',
		component: BlogComponent
	},
	{
		path: 'article/:id',
		async loadComponent() {
			return (await import('./article/article.component')).ArticleComponent
		}
	}
]
