import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
	imports: [CommonModule],
	selector: 'dcorg-hamburger-button',
	standalone: true,
	styleUrls: ['./hamburger-button.component.css'],
	templateUrl: './hamburger-button.component.html'
})
export class HamburgerButtonComponent {
	a = ''
}
