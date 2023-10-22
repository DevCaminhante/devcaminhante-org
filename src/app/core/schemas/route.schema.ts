import { literal, object } from 'valibot'

export const RouteSchema = object({
	blog: literal('blog'),
	caminhadaDev: literal('caminhada-dev'),
	home: literal('home'),
	sobre: literal('sobre')
})

export const RouteTitleSchema = object({
	blog: literal('Blog'),
	caminhadaDev: literal('Caminhada Dev'),
	home: literal('Home'),
	sobre: literal('Sobre')
})
