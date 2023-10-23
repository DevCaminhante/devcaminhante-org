import { AsyncPipe, DatePipe, NgIf } from '@angular/common'
// eslint-disable-next-line import/named
import { MarkdownModule } from 'ngx-markdown'
import { ChangeDetectionStrategy, Component, HostBinding, inject, Input } from '@angular/core'

import { ArticleService } from '@dcorg/core/services/article.service'
import { GlobalConstants } from '@dcorg/core/constants/constants'

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		MarkdownModule,
		DatePipe,
		NgIf,
		AsyncPipe
	],
	selector: 'dcorg-article',
	standalone: true,
	styles: [],
	templateUrl: './article.component.html'
})
export class ArticleComponent {
	@Input() id: number = GlobalConstants.UNDEFINED_NUMBER
	@Input() slug: string = GlobalConstants.UNDEFINED_TEXT
	@HostBinding('class') class = 'text:center'
	private articleService = inject(ArticleService)
	protected article$ = this.articleService.getArticles()[this.id]
}
