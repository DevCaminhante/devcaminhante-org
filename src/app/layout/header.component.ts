import {CommonModule} from '@angular/common'
import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core'
import {Router, RouterLink, RouterLinkActive} from '@angular/router'

@Component({
	selector: 'dcorg-header',
	standalone: true,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
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
					<div class="nav-item" [class.active]="selectedRoute === '/'">
						<a
							routerLink="/"
							routerLinkActive="active"
							ariaCurrentWhenActive="page"
							(click)="setSelectedRoute('/')"
							>Home</a
						>
					</div>
					<div
						class="nav-item"
						[class.active]="selectedRoute.includes('/blog')"
					>
						<a
							routerLink="/blog"
							routerLinkActive="active"
							ariaCurrentWhenActive="page"
							(click)="setSelectedRoute('/blog')"
							>Blog</a
						>
					</div>
					<!--					<div class="nav-item">-->
					<!--						<a-->
					<!--							routerLink="/sobre"-->
					<!--							routerLinkActive="active"-->
					<!--							ariaCurrentWhenActive="page"-->
					<!--							>Sobre</a-->
					<!--						>-->
					<!--					</div>-->
				</div>
			</div>
		</div>
	`,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	styles: ``,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
	selectedRoute = ''
	private router = inject(Router)

	ngOnInit(): void {
		this.selectedRoute = this.router.routerState.snapshot.url
	}

	setSelectedRoute(selectedRoute: string) {
		this.selectedRoute = selectedRoute
	}
}
