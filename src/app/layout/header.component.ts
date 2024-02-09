import {CommonModule, NgOptimizedImage} from '@angular/common'
import {ChangeDetectionStrategy, Component} from '@angular/core'

import {MenuItem} from 'primeng/api'
import {MenubarModule} from 'primeng/menubar'

@Component({
	selector: 'dcorg-header',
	standalone: true,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	imports: [CommonModule, MenubarModule, NgOptimizedImage],
	template: `
		<p-menubar [model]="routes" styleClass="dcorg-purple border-noround">
			<ng-template pTemplate="start"
				><img
					priority
					ngSrc="../../assets/images/DevCaminhante_dark.png"
					height="54"
					width="229"
					alt="DevCaminhante Logo"
			/></ng-template>
		</p-menubar>
	`,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	styles: `
		:host {
			::ng-deep .p-menuitem-text,
			::ng-deep .p-menubar-button {
				color: #ffffff;
			}

			::ng-deep .p-menuitem-content {
				background: var(--dcorg-purple);
				border-radius: 0;
				font-size: 1.1rem;
			}
		}
	`,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	host: {
		class: 'card'
	},
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
	routes: MenuItem[] = [
		{label: 'Home', routerLink: '/'},
		{label: 'Blog', routerLink: '/blog'}
	]
}
