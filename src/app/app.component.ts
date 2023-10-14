import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
	imports: [CommonModule, RouterOutlet],
	selector: 'dcorg-app',
	standalone: true,
	styleUrls: ['./app.component.css'],
	templateUrl: './app.component.html'
})
export class AppComponent {
	title = 'devcaminhante-org'
}
