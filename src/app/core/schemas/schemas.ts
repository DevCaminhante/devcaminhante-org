import {literal, object, string} from 'valibot'

export const AppRouteSchema = object({
	blog: literal('blog'),
	caminhadaDev: literal('caminhada-dev'),
	sobre: literal('sobre')
})

export const ArticleSchema = object({
	author: string(),
	date: string(),
	slug: string(),
	title: string()
})
