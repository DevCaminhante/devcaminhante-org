import {Input} from 'valibot'

import {ArticleSchema} from '@app/schemas'

export type Article = Input<typeof ArticleSchema>
