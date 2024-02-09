import {CommonModule} from '@angular/common'
import {ChangeDetectionStrategy, Component, Input} from '@angular/core'

import {MarkdownComponent} from 'ngx-markdown'
import {TimelineModule} from 'primeng/timeline'

@Component({
	selector: 'dcorg-markdown-previewer',
	standalone: true,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	imports: [CommonModule, MarkdownComponent, TimelineModule],
	template: `
		<div class="w-full sm:w-8">
			<markdown [src]="filenameWithoutExtension"></markdown>
		</div>
	`,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	styles: ``,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	host: {
		class: 'card flex justify-content-start sm:justify-content-center'
	},
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkdownPreviewerComponent {
	@Input() filenameWithoutExtension = ''
}
