import { Input } from 'valibot'

import { MainSchema } from '@dcorg/core/schemas/schemas'

export type Main = Input<typeof MainSchema>
