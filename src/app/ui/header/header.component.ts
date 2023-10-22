import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

import { HamburgerButtonComponent } from '@dcorg/ui/hamburger-button/hamburger-button.component'
import { NavigationMenuComponent } from '@dcorg/ui/navigation-menu/navigation-menu.component'

@Component({
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
export class HeaderComponent {}
