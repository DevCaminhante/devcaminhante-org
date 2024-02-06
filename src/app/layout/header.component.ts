import {CommonModule, NgOptimizedImage} from '@angular/common'
import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core'
import {Router, RouterLink, RouterLinkActive} from '@angular/router'

import {Constant} from '@app/constants'

@Component({
	selector: 'dcorg-header',
	standalone: true,
	// eslint-disable-next-line sort-keys-fix/sort-keys-fix
	imports: [CommonModule, NgOptimizedImage, RouterLink, RouterLinkActive],
	template: `
		<div
			class="header header-fixed u-unselectable header-animated header-dark bg-purple-dcorg"
		>
			<div class="header-brand">
				<div class="nav-item no-hover pr-3">
					<img
						ngSrc="../../assets/DevCaminhante_dark.png"
						height="54"
						width="229"
						alt="DevCaminhante Logo"
					/>
				</div>
				<div class="nav-item nav-btn" id="header-btn">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<div class="header-nav" id="header-menu">
				<div class="nav-left">
					<div
						class="nav-item"
						[class.active]="selectedRoute === '/'"
						id="home"
					>
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
						id="blog"
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
	selectedRoute: string = Constant.EMPTY_STRING
	private router = inject(Router)

	ngOnInit(): void {
		this.selectedRoute = this.router.routerState.snapshot.url

		if (typeof window !== 'undefined') {
			const navigationButtons = document.querySelectorAll('.nav-btn')

			navigationButtons.forEach((element) => {
				element.addEventListener('click', () => {
					const headerMenu = document.getElementById('header-menu')
					const aElementHTMLCollection = document.getElementsByTagName('a')
					const aElementArray = Array.from(aElementHTMLCollection)

					aElementArray.forEach((aElement) => {
						aElement.addEventListener('click', () => {
							headerMenu?.classList.remove('active')
						})
					})

					headerMenu?.classList.toggle('active')
				})
			})
		}
	}

	setSelectedRoute(selectedRoute: string) {
		this.selectedRoute = selectedRoute
	}
}
