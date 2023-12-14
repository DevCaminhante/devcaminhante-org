import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'dcorg-root',
	template: `
		<dcorg-nx-welcome></dcorg-nx-welcome>

		<router-outlet></router-outlet>
	`,
  styles: '',
})
export class AppComponent {
  title = 'devcaminhante-org';
}
