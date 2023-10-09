import {Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {HeaderComponent} from '../../ui/header/header.component.js'

@Component({
	selector: 'dcorg-shell',
	standalone: true,
	templateUrl: './shell.component.html',
	styleUrls: ['./shell.component.css'],
	imports: [HeaderComponent]
})
export class ShellComponent {}
