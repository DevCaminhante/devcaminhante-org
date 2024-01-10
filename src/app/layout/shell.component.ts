import {CommonModule} from '@angular/common'
import {ChangeDetectionStrategy, Component} from '@angular/core'
import {RouterOutlet} from '@angular/router'

import {HeaderComponent} from './header.component'

@Component({
	selector: 'dcorg-shell',
	standalone: true,
	imports: [CommonModule, HeaderComponent, RouterOutlet],
	template: `
		<dcorg-header></dcorg-header>

		<div class="mt-8 mx-3 u-center u-text-justify">
			<router-outlet></router-outlet>
		</div>
	`,
	styles: ``,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent {}
