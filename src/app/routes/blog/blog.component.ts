import { AsyncPipe, DatePipe, NgForOf, NgIf } from '@angular/common'
import {
	ChangeDetectionStrategy,
	Component,
	HostBinding,
	inject
} from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'

import { ArticleService } from '@dcorg/core/services/article.service'

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		RouterLink,
		RouterOutlet,
		DatePipe,
		NgForOf,
		NgIf,
		AsyncPipe
	],
	selector: 'dcorg-blog',
	standalone: true,
	styles: [],
	templateUrl: './blog.component.html'
})
export class BlogComponent {
	@HostBinding('class') class = 'flex justify-content:center'
	private articleService = inject(ArticleService)
	protected readonly article$ = this.articleService.getArticles()
}
