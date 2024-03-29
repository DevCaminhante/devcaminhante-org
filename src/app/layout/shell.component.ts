import {CommonModule} from '@angular/common'
import {ChangeDetectionStrategy, Component} from '@angular/core'
import {RouterOutlet} from '@angular/router'

import {HeaderComponent} from '@app/layout/header.component'

@Component({
	selector: 'dcorg-shell',
	standalone: true,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	imports: [CommonModule, HeaderComponent, RouterOutlet],
	template: `
		<dcorg-header></dcorg-header>

		<div class="m-3 text-justify">
			<router-outlet></router-outlet>
		</div>
	`,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	styles: ``,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	changeDetection: ChangeDetectionStrategy.OnPush
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ShellComponent {}
