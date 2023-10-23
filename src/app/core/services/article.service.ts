import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'

import { Article } from '@dcorg/core/types/types'
import { ArticleStateService } from '@dcorg/core/services/article-state.service'
import { GlobalConstants } from '@dcorg/core/constants/constants'

@Injectable({
	providedIn: 'root'
})
export class ArticleService {
	private httpClient = inject(HttpClient)
	private articleStateService = inject(ArticleStateService)
	private urls = ['2021-07-07_e-nos-tornamos-devcaminhantes']

	getArticles(): Observable<Article>[] {
		let id = GlobalConstants.FIRST_ID

		return this.urls.map((url) => {
			return this.httpClient.get(`blog/articles/${url}.md`, { responseType: 'text' })
				.pipe(map((string): Article => {
					const parsedString = {
						author: string.split('author: \'')[1].split('\'\n')[0],
						content: string.split('author: ')[1].split(/-{3}\W+/u)[1],
						date: string.split('date: \'')[1].split('\'\n')[0],
						id,
						slug: url,
						title: string.split('title: \'')[1].split('\'\n')[0]
					}

					this.articleStateService.addArticle(parsedString)

					id++

					return parsedString
				}))
		})
	}
}
