import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dcorg-header',
  standalone: true,
  imports: [CommonModule],
  template: `
		<div class="header header-fixed u-unselectable header-animated header-dark bg-purple-dcorg">
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
						<a href="#">Home</a>
					</div>
					<div class="nav-item">
						<a href="#">Blog</a>
					</div>
					<div class="nav-item">
						<a href="#">Sobre</a>
					</div>
				</div>
			</div>
		</div>
	`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
