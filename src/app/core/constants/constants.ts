import { ConstantSchema } from '@dcorg/core/schemas/schemas'

export const Constants = {
	ORG_NAME: ConstantSchema.object.orgName.literal,
	PROJECT_NAME: ConstantSchema.object.projectName.literal,
	WINDOW_WIDTH: ConstantSchema.object.windowWidth.literal
} as const
