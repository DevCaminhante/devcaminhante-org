/* eslint-disable @angular-eslint/component-selector*/
import { BodyComponent } from './core/layout/body.component'
import { Component, inject, OnInit } from '@angular/core'
import { FooterComponent } from './core/layout/footer.component'
import { HeaderComponent } from './core/layout/header.component'
import { NgClass } from '@angular/common'
import { PrimeNGConfig } from 'primeng/api'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BodyComponent, FooterComponent, HeaderComponent, NgClass],
  template: `
    <dcorg-header></dcorg-header>

    <dcorg-body></dcorg-body>

    <dcorg-footer></dcorg-footer>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  private readonly primengConfig = inject(PrimeNGConfig)

  ngOnInit() {
    this.primengConfig.ripple = true
  }
}
