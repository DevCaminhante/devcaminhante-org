import { Schemas } from '@dcorg/core/schemas/schemas'

export const SchemasForConstants = Schemas

export const GlobalConstants = {
	FIRST_ID: SchemasForConstants.GlobalConstantSchema.object.firstId.literal,
	ORG_NAME: SchemasForConstants.GlobalConstantSchema.object.orgName.literal,
	PROJECT_NAME: SchemasForConstants.GlobalConstantSchema.object.projectName.literal,
	UNDEFINED_NUMBER: SchemasForConstants.GlobalConstantSchema.object.undefinedNumber.literal,
	UNDEFINED_TEXT: SchemasForConstants.GlobalConstantSchema.object.undefinedText.literal,
	WINDOW_WIDTH: SchemasForConstants.GlobalConstantSchema.object.windowWidth.literal
} as const

