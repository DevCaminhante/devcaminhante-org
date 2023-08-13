import { Component, inject, OnInit } from '@angular/core'
import { Constant } from '../constants/constants'
import { HeaderRouteService } from '../services/header-route.service'
import { MenubarModule } from 'primeng/menubar'
import { NgClass } from '@angular/common'
import { RouterLink } from '@angular/router'
import {
  HeaderRouteText,
  HeaderRouteURL,
  HeaderRouteURLType
} from '../constants/header-route.constants'

@Component({
  selector: 'dcorg-header',
  standalone: true,
  imports: [MenubarModule, NgClass, RouterLink],
  template: `
    <p-menubar>
      <ng-template pTemplate="start">
        <div [ngClass]="{ 'flex align-items-center': true }">
          <i [ngClass]="{ 'pi pi-hourglass m-2 mr-3 text-3xl': true }"></i>
          <span [ngClass]="{ 'text-3xl': true }">{{
            Constant.APPLICATION_NAME
          }}</span>
        </div>
      </ng-template>
      <ng-template pTemplate="end">
        <div [ngClass]="{ '': true }">
          <a
            id="home-headerRouteURL"
            class="mx-2 text-lg no-underline {{
              this.headerRouteService.activeRouteURL() === HeaderRouteURL.HOME
                ? 'font-bold'
                : Constant.UNDEFINED_TEXT
            }}"
            [routerLink]="HeaderRouteURL.HOME">
            {{ HeaderRouteText.HOME }}
          </a>
          <a
            id="blog-headerRouteURL"
            class="mx-2 text-lg no-underline {{
              this.headerRouteService.activeRouteURL() ===
              HeaderRouteURL.CAMINHADA_DEV
                ? 'font-bold'
                : Constant.UNDEFINED_TEXT
            }}"
            [routerLink]="HeaderRouteURL.CAMINHADA_DEV">
            {{ HeaderRouteText.CAMINHADA_DEV }}
          </a>
          <a
            id="blog-headerRouteURL"
            class="mx-2 text-lg no-underline {{
              this.headerRouteService.activeRouteURL() === HeaderRouteURL.BLOG
                ? 'font-bold'
                : Constant.UNDEFINED_TEXT
            }}"
            [routerLink]="HeaderRouteURL.BLOG">
            {{ HeaderRouteText.BLOG }}
          </a>
          <a
            id="sobre-headerRouteURL"
            class="mx-2 text-lg no-underline {{
              this.headerRouteService.activeRouteURL() === HeaderRouteURL.SOBRE
                ? 'font-bold'
                : Constant.UNDEFINED_TEXT
            }}"
            [routerLink]="HeaderRouteURL.SOBRE">
            {{ HeaderRouteText.SOBRE }}
          </a>
        </div>
      </ng-template>
    </p-menubar>
  `
})
export class HeaderComponent implements OnInit {
  protected readonly Constant = Constant
  protected readonly HeaderRouteURL = HeaderRouteURL
  protected readonly HeaderRouteText = HeaderRouteText

  protected activeRoute: HeaderRouteURLType | undefined
  protected headerRouteService = inject(HeaderRouteService)

  ngOnInit(): void {
    this.activeRoute = this.headerRouteService.activeRouteURL()
  }
}
