import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core'

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [],
	selector: 'dcorg-caminhada-dev',
	standalone: true,
	styles: [],
	templateUrl: './caminhada-dev.component.html'
})
export class CaminhadaDevComponent {
	@HostBinding('class') class = 'flex justify-content:center'
}
