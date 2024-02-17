import {inject} from '@angular/core'
import {
	ActivatedRouteSnapshot,
	ResolveFn,
	RouterStateSnapshot
} from '@angular/router'

import {Observable} from 'rxjs'

import {FileGetterService} from '@app/services/file-getter.service'
import {Article} from '@app/types'

export const articleListResolver: ResolveFn<Article[]> = (
	route: ActivatedRouteSnapshot,
	state: RouterStateSnapshot
) => {
	return inject(FileGetterService).getJSONFile(
		'assets/json/article-list.json'
	) as Observable<Article[]>
}
