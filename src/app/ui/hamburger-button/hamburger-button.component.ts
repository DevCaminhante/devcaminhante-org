import { CommonModule } from '@angular/common'
import { Component, HostBinding } from '@angular/core'

@Component({
	imports: [CommonModule],
	selector: 'dcorg-hamburger-button',
	standalone: true,
	styleUrls: ['./hamburger-button.component.css'],
	templateUrl: './hamburger-button.component.html'
})
export class HamburgerButtonComponent {
	isHidden = false
	@HostBinding('class') class = 'abs right:10 top:5'
}
