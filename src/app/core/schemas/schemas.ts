/* eslint-disable no-magic-numbers */
import { literal, object } from 'valibot'

import { ArticleSchema } from '@dcorg/core/schemas/article.schema'
import { HeaderStateSchema } from './header-state.schema'
import { RouteSchema, RouteTitleSchema } from './route.schema'

const GlobalConstantSchema = object({
	articleContentFirstLineIndex: literal(6),
	firstArticleId: literal(1),
	lessOrMoreOneWholeNumber: literal(1),
	orgName: literal('DevCaminhante'),
	projectName: literal('devcaminhante-org'),
	undefinedNumber: literal(0),
	undefinedText: literal(''),
	windowWidth: literal(1024)
})

export const Schemas = {
	ArticleSchema,
	GlobalConstantSchema,
	HeaderStateSchema,
	RouteSchema,
	RouteTitleSchema
}
