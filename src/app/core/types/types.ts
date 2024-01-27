import {Input} from 'valibot'

import {ArticleSchema} from '../schemas/schemas'

export type Article = Input<typeof ArticleSchema>
