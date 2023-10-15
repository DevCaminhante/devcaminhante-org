import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

import { HamburgerButtonComponent } from '@dcorg/ui/hamburger-button/hamburger-button.component'

@Component({
	imports: [CommonModule, HamburgerButtonComponent],
	selector: 'dcorg-header',
	standalone: true,
	styleUrls: ['./header.component.css'],
	templateUrl: './header.component.html'
})
export class HeaderComponent {}
