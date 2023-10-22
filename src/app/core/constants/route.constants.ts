import { SchemasForConstants } from '@dcorg/core/constants/constants'

export const Route = {
	BLOG: SchemasForConstants.RouteSchema.object.blog.literal,
	CAMINHADA_DEV: SchemasForConstants.RouteSchema.object.caminhadaDev.literal,
	HOME: SchemasForConstants.RouteSchema.object.home.literal,
	SOBRE: SchemasForConstants.RouteSchema.object.sobre.literal
} as const

export const RouteTitle = {
	BLOG: SchemasForConstants.RouteTitleSchema.object.blog.literal,
	CAMINHADA_DEV: SchemasForConstants.RouteTitleSchema.object.caminhadaDev.literal,
	HOME: SchemasForConstants.RouteTitleSchema.object.home.literal,
	SOBRE: SchemasForConstants.RouteTitleSchema.object.sobre.literal
} as const
