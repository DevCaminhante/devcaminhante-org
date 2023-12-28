import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'dcorg-article-list',
	standalone: true,
	imports: [CommonModule],
	template: `
		<h2 class="u-center">Articles</h2>

		@for (article of articles; track article) {
			<p>Article's title</p>
		}
	`,
	styles: ``,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleListComponent {
	articles = [1, 2, 3];
}
