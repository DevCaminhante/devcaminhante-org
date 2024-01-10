import {CommonModule} from '@angular/common'
import {ChangeDetectionStrategy, Component} from '@angular/core'

@Component({
	selector: 'dcorg-home',
	standalone: true,
	imports: [CommonModule],
	template: `
		<p>
			DevCaminhante &eacute; um projeto dedicado ao acolhimento tanto para quem
			est&aacute; pensando em entrar na &aacute;rea de programa&ccedil;&atilde;o
			como para quem est&aacute; come&ccedil;ando a aprender nesta &aacute;rea.
			Tamb&eacute;m recebe de bra&ccedil;os abertos os devs mais experientes que
			querem compartilhar conhecimento e tamb&eacute;m aprender, estimulando o
			crescimento m&uacute;tuo, sempre com a mentalidade que todos somos
			aprendizes. :)
		</p>
	`,
	styles: ``,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}
