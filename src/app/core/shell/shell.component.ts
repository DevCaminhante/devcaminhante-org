import { Component } from '@angular/core'

import { HamburgerButtonComponent } from '@dcorg/ui/hamburger-button/hamburger-button.component'
import { HeaderComponent } from '@dcorg/ui/header/header.component'

@Component({
	imports: [HamburgerButtonComponent, HeaderComponent],
	selector: 'dcorg-shell',
	standalone: true,
	styleUrls: ['./shell.component.css'],
	templateUrl: './shell.component.html'
})
export class ShellComponent {}
