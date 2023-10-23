import { RouterOutlet } from '@angular/router'
import { ChangeDetectionStrategy, Component } from '@angular/core'

import { GlobalConstants } from '@dcorg/core/constants/constants'

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterOutlet],
	selector: 'dcorg-app',
	standalone: true,
	styles: [],
	templateUrl: './app.component.html'
})
export class AppComponent {
	projectName = GlobalConstants.PROJECT_NAME
}
