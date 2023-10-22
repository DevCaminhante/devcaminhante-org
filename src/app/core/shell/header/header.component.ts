import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'

import { GlobalConstants } from '@dcorg/core/constants/constants'
import { HamburgerButtonComponent } from '@dcorg/ui/hamburger-button/hamburger-button.component'
import { NavigationMenuComponent } from '@dcorg/ui/navigation-menu/navigation-menu.component'

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		CommonModule,
		HamburgerButtonComponent,
		NavigationMenuComponent
	],
	selector: 'dcorg-header',
	standalone: true,
	styles: [],
	templateUrl: './header.component.html'
})
export class HeaderComponent {
	protected readonly GlobalConstants = GlobalConstants
}
