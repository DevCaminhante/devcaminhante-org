import {ChangeDetectionStrategy, Component} from '@angular/core'
import {RouterModule} from '@angular/router'

@Component({
	selector: 'dcorg-root',
	standalone: true,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	imports: [RouterModule],
	template: `<router-outlet></router-outlet>`,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	styles: ``,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	title = 'devcaminhante-org'
}
