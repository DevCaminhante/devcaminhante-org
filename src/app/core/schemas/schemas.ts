import { literal, object } from 'valibot'

import { HeaderStateSchema } from './header-state-schema'

export const ConstantSchema = object({
	orgName: literal('DevCaminhante'),
	projectName: literal('devcaminhante-org')
})

export { HeaderStateSchema }
