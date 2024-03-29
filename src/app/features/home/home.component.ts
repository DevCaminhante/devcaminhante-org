import {CommonModule} from '@angular/common'
import {ChangeDetectionStrategy, Component} from '@angular/core'

import {TimelineModule} from 'primeng/timeline'

@Component({
	selector: 'dcorg-home',
	standalone: true,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	imports: [CommonModule, TimelineModule],
	template: `
		<p class="w-full sm:w-8">
			DevCaminhante &eacute; um projeto dedicado ao acolhimento tanto para quem
			est&aacute; pensando em entrar na &aacute;rea de programa&ccedil;&atilde;o
			como para quem est&aacute; come&ccedil;ando a aprender nesta &aacute;rea.
			Tamb&eacute;m recebe de bra&ccedil;os abertos os devs mais experientes que
			querem compartilhar conhecimento e tamb&eacute;m aprender, estimulando o
			crescimento m&uacute;tuo, sempre com a mentalidade que todos somos
			aprendizes. :)
		</p>
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
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class HomeComponent {}
