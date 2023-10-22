import { RouterOutlet } from '@angular/router'
import { ChangeDetectionStrategy, Component } from '@angular/core'

import { HeaderComponent } from '@dcorg/core/shell/header/header.component'
import { HomeComponent } from '../../routes/home/home.component'

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		HomeComponent,
		HeaderComponent,
		RouterOutlet
	],
	selector: 'dcorg-shell',
	standalone: true,
	styles: [],
	templateUrl: './shell.component.html'
})
export class ShellComponent {}
