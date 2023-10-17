import { Input } from 'valibot'

import { HeaderStateSchema } from '@dcorg/core/schemas/schemas'

export type HeaderState = Input<typeof HeaderStateSchema>
