import { NgForOf } from '@angular/common'
import { ChangeDetectionStrategy, Component, HostBinding, inject } from '@angular/core'

import { HeaderStateService } from '@dcorg/core/services/header-state.service'

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgForOf],
	selector: 'dcorg-hamburger-button',
	standalone: true,
	styles: [],
	templateUrl: './hamburger-button.component.html'
})
export class HamburgerButtonComponent {
	@HostBinding('class') class = 'abs right:10 top:5 hide@md'
	private headerStateService = inject(HeaderStateService)

	onHamburgerButtonClick() {
		this.headerStateService.changeNavigationMenuVisibility()
	}
}
