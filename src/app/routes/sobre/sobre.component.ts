import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core'

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [],
	selector: 'dcorg-sobre',
	standalone: true,
	styles: [],
	templateUrl: './sobre.component.html'
})
export class SobreComponent {
	@HostBinding('class') class = 'flex justify-content:center'
}
