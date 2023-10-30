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
		let id = GlobalConstants.FIRST_ARTICLE_ID
		const articleContentFirstLineIndex = GlobalConstants.ARTICLE_CONTENT_FIRST_LINE_INDEX
		const lessOrMoreOneWholeNumber = GlobalConstants.LESS_OR_MORE_ONE_WHOLE_NUMBER

		return this.urls.map((url) => {
			return this.httpClient.get(`assets/blog/articles/${url}.md`, { responseType: 'text' })
				.pipe(map((string): Article => {
					const articleLines = string.split('\n')
					const titleLineStart = 'title: '
					const dateLineStart = 'date: '
					const authorLineStart = 'author: '

					const titleLine = articleLines
						.filter((line) => {
							return line.includes(titleLineStart)
						})
						.join()
					const dateLine = articleLines
						.filter((line) => {
							return line.includes(dateLineStart)
						})
						.join()
					const authorLine = articleLines
						.filter((line) => {
							return line.includes(authorLineStart)
						})
						.join()
					const contentLines = articleLines
						.slice(articleContentFirstLineIndex, articleLines.length)
						.join('\n')

					const title = titleLine.substring(
						titleLineStart.length + lessOrMoreOneWholeNumber,
						titleLine.length - lessOrMoreOneWholeNumber
					)
					const date = dateLine.substring(
						dateLineStart.length + lessOrMoreOneWholeNumber,
						dateLine.length - lessOrMoreOneWholeNumber
					)
					const author = authorLine.substring(
						authorLineStart.length + lessOrMoreOneWholeNumber,
						authorLine.length - lessOrMoreOneWholeNumber
					)

					const parsedString = {
						author,
						content: contentLines,
						date,
						id,
						slug: url,
						title
					}

					this.articleStateService.addArticle(parsedString)

					id++

					return parsedString
				}))
		})
	}
}
