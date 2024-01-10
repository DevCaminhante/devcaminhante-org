import {CommonModule} from '@angular/common'
import {ChangeDetectionStrategy, Component} from '@angular/core'
import {RouterLink, RouterLinkActive} from '@angular/router'

@Component({
	selector: 'dcorg-header',
	standalone: true,
	imports: [CommonModule, RouterLink, RouterLinkActive],
	template: `
		<div
			class="header header-fixed u-unselectable header-animated header-dark bg-purple-dcorg"
		>
			<div class="header-brand">
				<div class="nav-item no-hover">
					<a>
						<h6 class="title">DevCaminhante</h6>
					</a>
				</div>
				<div class="nav-item nav-btn" id="header-btn">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<div class="header-nav" id="header-menu">
				<div class="nav-left">
					<div class="nav-item active">
						<a
							routerLink="/"
							routerLinkActive="active"
							ariaCurrentWhenActive="page"
							>Home</a
						>
					</div>
					<div class="nav-item">
						<a
							routerLink="/blog"
							routerLinkActive="active"
							ariaCurrentWhenActive="page"
							>Blog</a
						>
					</div>
					<div class="nav-item">
						<a
							routerLink="/sobre"
							routerLinkActive="active"
							ariaCurrentWhenActive="page"
							>Sobre</a
						>
					</div>
				</div>
			</div>
		</div>
	`,
	styles: ``,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}
