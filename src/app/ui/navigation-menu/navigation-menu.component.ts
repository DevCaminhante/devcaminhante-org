/* eslint-disable no-magic-numbers */
import { CommonModule } from '@angular/common'
import { Component, DoCheck, HostListener, inject } from '@angular/core'

import { Constants } from '@dcorg/core/constants/constants'
import { HeaderStateService } from '@dcorg/core/services/header-state.service'

@Component({
	imports: [CommonModule],
	selector: 'dcorg-navigation-menu',
	standalone: true,
	styleUrls: ['./navigation-menu.component.css'],
	templateUrl: './navigation-menu.component.html'
})
export class NavigationMenuComponent implements DoCheck {
	private headerStateService = inject(HeaderStateService)
	isHidden: boolean | undefined
	@HostListener('window:resize', ['$event'])

	ngDoCheck() {
		this.isHidden = this.headerStateService.isNavigationMenuHidden()

		if (window.innerWidth >= Constants.WINDOW_WIDTH && this.isHidden) {
			this.isHidden = false
		}
	}
}
