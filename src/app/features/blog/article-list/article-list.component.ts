import {CommonModule} from '@angular/common'
import {ChangeDetectionStrategy, Component, Input} from '@angular/core'
import {RouterLink} from '@angular/router'

import {Article} from '@app/types'

@Component({
	selector: 'dcorg-article-list',
	standalone: true,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	imports: [CommonModule, RouterLink],
	template: `
		<h2>Articles</h2>

		@for (article of articles; track $index) {
		<h3>
			<a
				[routerLink]="['/blog/articles', article.slug]"
				[state]="{article: article}"
				class="no-underline"
				>{{ article.title }}</a
			>
		</h3>
		<h4>em {{ article.date | date }} por {{ article.author }}</h4>
		}
	`,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	styles: ``,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	host: {
		class: 'text-center'
	},
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleListComponent {
	@Input()
	articles: Article[] = []
}
