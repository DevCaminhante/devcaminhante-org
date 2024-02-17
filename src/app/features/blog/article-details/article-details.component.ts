import {CommonModule} from '@angular/common'
import {
	ChangeDetectionStrategy,
	Component,
	inject,
	OnDestroy,
	OnInit
} from '@angular/core'
import {ActivatedRoute} from '@angular/router'

import {MarkdownComponent} from 'ngx-markdown'
import {Subscription} from 'rxjs'

@Component({
	selector: 'dcorg-article-details',
	standalone: true,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	imports: [CommonModule, MarkdownComponent],
	template: `
		@if (content) {
		<div class="w-full sm:w-8">
			<!--				<h3 class="text-center">{{ article.title }}</h3>-->

			<markdown>{{ content }}</markdown>
		</div>
		}
	`,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	styles: `
		:host {
			::ng-deep markdown h3 {
				text-align: center;
				padding-bottom: 0.5rem !important;
			}
		}
	`,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	host: {
		class: 'card flex justify-content-start sm:justify-content-center'
	},
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleDetailsComponent implements OnInit, OnDestroy {
	content = ''
	#activatedRoute = inject(ActivatedRoute)
	#subscriptions$ = new Subscription()

	ngOnInit() {
		this.#subscriptions$.add(
			this.#activatedRoute.data.subscribe(({json}) => {
				this.content = json
			})
		)
	}

	ngOnDestroy() {
		this.#subscriptions$.unsubscribe()
	}
}
