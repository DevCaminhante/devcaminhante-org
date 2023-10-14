import { literal, object } from 'valibot'

export const MainSchema = object({
	orgName: literal('DevCaminhante'),
	projectName: literal('devcaminhante-org')
})
