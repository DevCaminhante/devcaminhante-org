/* eslint-disable sort-keys */
import { type Routes } from '@angular/router'

export const shellRoutes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home'
	},
	{
		path: 'home',
		pathMatch: 'full',
		async loadComponent() {
			return (await import('../../routes/home/home.component')).HomeComponent
		}
	},
	{
		path: 'blog',
		async loadChildren() {
			return (await import('../../routes/blog/blog.routes')).blogRoutes
		}
	},
	{
		path: 'caminhada-dev',
		pathMatch: 'full',
		async loadComponent() {
			return (await import('../../routes/caminhada-dev/caminhada-dev.component')).CaminhadaDevComponent
		}
	},
	{
		path: 'sobre',
		pathMatch: 'full',
		async loadComponent() {
			return (await import('../../routes/sobre/sobre.component')).SobreComponent
		}
	}
]
