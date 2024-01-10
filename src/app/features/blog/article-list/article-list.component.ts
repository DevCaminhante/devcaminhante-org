import {CommonModule} from '@angular/common'
import {ChangeDetectionStrategy, Component} from '@angular/core'

@Component({
	selector: 'dcorg-article-list',
	standalone: true,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	imports: [CommonModule],
	template: `
		<h2 class="u-center">Articles</h2>

		@for (article of articles; track article) {
		<p>Article's title</p>
		}
	`,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	styles: ``,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleListComponent {
	articles = [1, 2, 3]
}
