import { number, object, string } from 'valibot'

export const ArticleSchema = object({
	author: string(),
	content: string(),
	date: string(),
	id: number(),
	slug: string(),
	title: string()
})
