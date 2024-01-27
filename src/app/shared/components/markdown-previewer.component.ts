import {CommonModule} from '@angular/common'
import {ChangeDetectionStrategy, Component, Input} from '@angular/core'

import {MarkdownComponent} from 'ngx-markdown'

@Component({
	selector: 'dcorg-markdown-previewer',
	standalone: true,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	imports: [CommonModule, MarkdownComponent],
	template: ` <markdown [src]="filenameWithoutExtension"></markdown> `,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	styles: ``,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkdownPreviewerComponent {
	@Input() filenameWithoutExtension = ''
}
