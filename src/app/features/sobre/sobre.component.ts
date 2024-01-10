import {CommonModule} from '@angular/common'
import {ChangeDetectionStrategy, Component} from '@angular/core'

@Component({
	selector: 'dcorg-sobre',
	standalone: true,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	imports: [CommonModule],
	template: `<p>sobre works!</p>`,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	styles: ``,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	changeDetection: ChangeDetectionStrategy.OnPush
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class SobreComponent {}
