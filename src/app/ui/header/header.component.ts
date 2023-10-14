import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
	imports: [CommonModule],
	selector: 'dcorg-header',
	standalone: true,
	styleUrls: ['./header.component.css'],
	templateUrl: './header.component.html'
})
export class HeaderComponent {}
