import {CommonModule} from '@angular/common'
import {
	ChangeDetectionStrategy,
	Component,
	inject,
	OnDestroy,
	OnInit
} from '@angular/core'
import {ActivatedRoute, RouterLink} from '@angular/router'

import {Subscription} from 'rxjs'

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
			<a [routerLink]="['/blog/articles', article.slug]" class="no-underline">{{
				article.title
			}}</a>
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
export class ArticleListComponent implements OnInit, OnDestroy {
	articles: Article[] = []
	#activatedRoute = inject(ActivatedRoute)
	#subscriptions$ = new Subscription()

	ngOnInit() {
		this.#subscriptions$.add(
			this.#activatedRoute.data.subscribe(({json}) => {
				const a: Article[] = json
				a.map((a) => this.articles.push(a))
			})
		)
	}

	ngOnDestroy() {
		this.#subscriptions$.unsubscribe()
	}
}
