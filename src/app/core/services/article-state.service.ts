/* eslint-disable no-undefined */
import { Injectable, signal } from '@angular/core'

import { Article } from '@dcorg/core/types/types'
import { GlobalConstants } from '@dcorg/core/constants/constants'

@Injectable({
	providedIn: 'root'
})
export class ArticleStateService {
	state = signal<Article>({
		author: GlobalConstants.UNDEFINED_TEXT,
		content: GlobalConstants.UNDEFINED_TEXT,
		date: GlobalConstants.UNDEFINED_TEXT,
		id: GlobalConstants.UNDEFINED_NUMBER,
		slug: GlobalConstants.UNDEFINED_TEXT,
		title: GlobalConstants.UNDEFINED_TEXT
	})
	articlesState = signal<Article[]>([])

	changeCurrentArticle(article: Article) {
		this.state.update((state) => {
			return {
				...state,
				author: article.author,
				content: article.content,
				date: article.date,
				id: article.id,
				slug: article.slug,
				title: article.title
			}
		})
	}

	addArticle(article: Article) {
		this.articlesState.update((state) => {
			return [...state, article]
		})
	}
}
