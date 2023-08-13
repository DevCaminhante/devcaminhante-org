import { Component, inject, OnInit } from '@angular/core'
import { Constant } from '../core/constants/constants'
import { HeaderRouteService } from '../core/services/header-route.service'
import { NgClass } from '@angular/common'
import { RouteMeta } from '@analogjs/router'
import {
  HeaderRouteText,
  HeaderRouteURL
} from '../core/constants/header-route.constants'

export const routeMeta: RouteMeta = {
  title: `${HeaderRouteText.HOME} - ${Constant.APPLICATION_NAME}`
}

@Component({
  standalone: true,
  template: `<p [ngClass]="{ '': true }">dcorg-index-page</p>`,
  imports: [NgClass]
})
export default class HomePage implements OnInit {
  private readonly route = HeaderRouteURL.HOME
  private headerRouteService = inject(HeaderRouteService)

  ngOnInit(): void {
    setTimeout(() => {
      this.headerRouteService.changeActiveRouteURL(this.route)
    })
  }
}
