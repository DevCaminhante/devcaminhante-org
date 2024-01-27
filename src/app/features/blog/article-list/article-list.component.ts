import {CommonModule} from '@angular/common'
import {ChangeDetectionStrategy, Component, Input} from '@angular/core'
import {RouterLink} from '@angular/router'

import {Article} from '../../../core/types/types'

@Component({
	selector: 'dcorg-article-list',
	standalone: true,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	imports: [CommonModule, RouterLink],
	template: `
		<h2 class="u-center">Articles</h2>

		@for (article of articles; track $index) {
		<h3 class="u-center u-text-center">
			<a
				[routerLink]="['/blog/articles', article.slug]"
				[state]="{article: article}"
				>{{ article.title }}</a
			>
		</h3>
		<h6 class="u-center">
			em {{ article.date | date }} por {{ article.author }}
		</h6>
		}
	`,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	styles: ``,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleListComponent {
	@Input()
	articles: Article[] = []
}
