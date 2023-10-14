import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { Constants } from '@dcorg/core/constants/constants'

@Component({
	imports: [CommonModule, RouterOutlet],
	selector: 'dcorg-app',
	standalone: true,
	styleUrls: ['./app.component.css'],
	templateUrl: './app.component.html'
})
export class AppComponent {
	projectName = Constants.PROJECT_NAME
}
