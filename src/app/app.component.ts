import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { GlobalConstants } from '@dcorg/core/constants/constants'

@Component({
	imports: [CommonModule, RouterOutlet],
	selector: 'dcorg-app',
	standalone: true,
	styles: [],
	templateUrl: './app.component.html'
})
export class AppComponent {
	projectName = GlobalConstants.PROJECT_NAME
}
