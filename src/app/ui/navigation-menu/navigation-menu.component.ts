import { RouterLink } from '@angular/router'
import { Component, DoCheck, HostListener, inject } from '@angular/core'

import { GlobalConstants } from '@dcorg/core/constants/constants'
import { HeaderStateService } from '@dcorg/core/services/header-state.service'
import { Route, RouteTitle } from '@dcorg/core/constants/route.constants'

@Component({
	imports: [RouterLink],
	selector: 'dcorg-navigation-menu',
	standalone: true,
	styles: [],
	templateUrl: './navigation-menu.component.html'
})
export class NavigationMenuComponent implements DoCheck {
	@HostListener('window:resize', ['$event'])
	private headerStateService = inject(HeaderStateService)
	protected readonly Route = Route
	protected readonly RouteTitle = RouteTitle
	isHidden: boolean | undefined

	ngDoCheck() {
		this.isHidden = this.headerStateService.isNavigationMenuHidden()

		if (window.innerWidth >= GlobalConstants.WINDOW_WIDTH && this.isHidden) {
			this.isHidden = false
		}
	}
}
