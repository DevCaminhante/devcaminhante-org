import { Input } from 'valibot'

import { Schemas } from '@dcorg/core/schemas/schemas'

export const SchemasForTypes = Schemas

export type HeaderState = Input<typeof SchemasForTypes.HeaderStateSchema>
export type Article = Input<typeof SchemasForTypes.ArticleSchema>
