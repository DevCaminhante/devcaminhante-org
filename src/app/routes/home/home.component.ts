import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core'

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [],
	selector: 'dcorg-home',
	standalone: true,
	styles: [],
	templateUrl: './home.component.html'
})
export class HomeComponent {
	@HostBinding('class') class = 'flex justify-content:center'
}
