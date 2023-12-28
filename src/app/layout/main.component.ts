import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../features/home/home.component'

@Component({
	selector: 'dcorg-main',
	standalone: true,
	imports: [CommonModule, HomeComponent],
	template: `
		<div class="mt-8 mx-3 u-text-justify">
			<dcorg-home></dcorg-home>
		</div>`,
	styles: ``,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
