import {CommonModule} from '@angular/common'
import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'

import {map, Observable} from 'rxjs'

import {MarkdownPreviewerComponent} from '@app/shared/components/markdown-previewer.component'
import {Article} from '@app/types'

@Component({
	selector: 'dcorg-article-details',
	standalone: true,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	imports: [CommonModule, MarkdownPreviewerComponent],
	template: `
		@if (article$ | async; as article) {
		<h3 class="text-center">{{ article.title }}</h3>

		<dcorg-markdown-previewer
			filenameWithoutExtension="./articles/{{ article.slug }}.md"
		></dcorg-markdown-previewer>
		}
	`,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	styles: ``,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleDetailsComponent implements OnInit {
	article$: Observable<Article> | undefined
	private activatedRoute = inject(ActivatedRoute)

	ngOnInit() {
		this.article$ = this.activatedRoute.paramMap.pipe(
			map(() =>
				typeof window !== 'undefined' ? window.history.state['article'] : ''
			)
		)
	}
}
