import {HttpClient} from '@angular/common/http'
import {inject, Injectable} from '@angular/core'

import {Observable} from 'rxjs'

import {Article} from '@app/types'

@Injectable({
	providedIn: 'root'
})
export class FileGetterService {
	#httpClient = inject(HttpClient)

	getMarkdownFile(slug: string) {
		return this.#httpClient.get(slug, {responseType: 'text'})
	}

	getJSONFile(url: string): Observable<Article[]> {
		return this.#httpClient.get<Article[]>(url)
	}
}
