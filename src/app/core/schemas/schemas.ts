import {object, string} from 'valibot'

export const ArticleSchema = object({
	author: string(),
	date: string(),
	slug: string(),
	title: string()
})
