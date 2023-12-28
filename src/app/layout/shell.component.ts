import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { MainComponent } from './main.component'

@Component({
	selector: 'dcorg-shell',
	standalone: true,
	imports: [CommonModule, HeaderComponent, MainComponent],
	template: `
		<dcorg-header></dcorg-header>
		
		<dcorg-main></dcorg-main>
	`,
	styles: ``,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {}
