import { boolean, object, undefinedType, union } from 'valibot'

export const HeaderStateSchema = object({
	isNavigationMenuHidden: union([boolean(), undefinedType()])
})
