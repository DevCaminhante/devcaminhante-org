import { MainSchema } from '@dcorg/core/schemas/schemas'

export const Constants = {
	ORG_NAME: MainSchema.object.orgName.literal,
	PROJECT_NAME: MainSchema.object.projectName.literal
} as const
