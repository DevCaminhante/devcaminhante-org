/* eslint-disable no-magic-numbers */
import { literal, object } from 'valibot'

import { HeaderStateSchema } from './header-state-schema'

export const ConstantSchema = object({
	orgName: literal('DevCaminhante'),
	projectName: literal('devcaminhante-org'),
	windowWidth: literal(1024)
})

export { HeaderStateSchema }
