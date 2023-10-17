import { CommonModule } from '@angular/common'
import { Component, HostBinding, inject } from '@angular/core'

import { HeaderStateService } from '@dcorg/core/services/header-state.service'

@Component({
	imports: [CommonModule],
	selector: 'dcorg-hamburger-button',
	standalone: true,
	styleUrls: ['./hamburger-button.component.css'],
	templateUrl: './hamburger-button.component.html'
})
export class HamburgerButtonComponent {
	private headerStateService = inject(HeaderStateService)
	@HostBinding('class') class = 'abs right:10 top:5 hide@md'

	onHamburgerButtonClick() {
		this.headerStateService.changeNavigationMenuVisibility()
	}
}
