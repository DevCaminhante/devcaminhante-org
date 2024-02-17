import {inject} from '@angular/core'
import {
	ActivatedRouteSnapshot,
	ResolveFn,
	RouterStateSnapshot
} from '@angular/router'

import {FileGetterService} from '@app/services/file-getter.service'

export const articleContentResolver: ResolveFn<string> = (
	route: ActivatedRouteSnapshot,
	state: RouterStateSnapshot
) => {
	return inject(FileGetterService).getMarkdownFile(
		'/assets/markdown/' + route.paramMap.get('slug') + '.md'
	)
}
