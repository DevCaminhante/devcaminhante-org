/* eslint-disable max-len */
import { Schemas } from '@dcorg/core/schemas/schemas'

export const SchemasForConstants = Schemas

export const GlobalConstants = {
	ARTICLE_CONTENT_FIRST_LINE_INDEX: SchemasForConstants.GlobalConstantSchema.object.articleContentFirstLineIndex.literal,
	FIRST_ARTICLE_ID: SchemasForConstants.GlobalConstantSchema.object.firstArticleId.literal,
	LESS_OR_MORE_ONE_WHOLE_NUMBER: SchemasForConstants.GlobalConstantSchema.object.lessOrMoreOneWholeNumber.literal,
	ORG_NAME: SchemasForConstants.GlobalConstantSchema.object.orgName.literal,
	PROJECT_NAME: SchemasForConstants.GlobalConstantSchema.object.projectName.literal,
	UNDEFINED_NUMBER: SchemasForConstants.GlobalConstantSchema.object.undefinedNumber.literal,
	UNDEFINED_TEXT: SchemasForConstants.GlobalConstantSchema.object.undefinedText.literal,
	WINDOW_WIDTH: SchemasForConstants.GlobalConstantSchema.object.windowWidth.literal
} as const

