import { computed, Injectable, signal } from '@angular/core'

import { HeaderState } from '@dcorg/core/types/types'

@Injectable({
	providedIn: 'root'
})
export class HeaderStateService {
	state = signal<HeaderState>({
		// eslint-disable-next-line no-undefined
		isNavigationMenuHidden: undefined
	})
	isNavigationMenuHidden = computed(() => {
		return this.state().isNavigationMenuHidden
	})

	changeNavigationMenuVisibility() {
		this.state.update((state) => {
			return {
				...state,
				isNavigationMenuHidden: !this.state().isNavigationMenuHidden
			}
		})
	}
}
