import {CommonModule} from '@angular/common'
import {ChangeDetectionStrategy, Component} from '@angular/core'

@Component({
	selector: 'dcorg-sobre',
	standalone: true,
	imports: [CommonModule],
	template: `<p>sobre works!</p>`,
	styles: ``,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SobreComponent {}
