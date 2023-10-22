import { Component } from '@angular/core'

import { HeaderComponent } from '@dcorg/ui/header/header.component'

@Component({
	imports: [HeaderComponent],
	selector: 'dcorg-shell',
	standalone: true,
	styles: [],
	templateUrl: './shell.component.html'
})
export class ShellComponent {}
