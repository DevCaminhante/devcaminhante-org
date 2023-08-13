import { Component, inject, OnInit } from '@angular/core'
import { Constant } from '../core/constants/constants'
import { HeaderRouteService } from '../core/services/header-route.service'
import { RouteMeta } from '@analogjs/router'
import { RouterOutlet } from '@angular/router'
import {
  HeaderRouteText,
  HeaderRouteURL
} from '../core/constants/header-route.constants'

export const routeMeta: RouteMeta = {
  title: `${HeaderRouteText.CAMINHADA_DEV} - ${Constant.APPLICATION_NAME}`
}

@Component({
  standalone: true,
  template: `<router-outlet></router-outlet>`,
  imports: [RouterOutlet]
})
export default class CaminhadaDevPage implements OnInit {
  private readonly route = HeaderRouteURL.CAMINHADA_DEV
  private headerRouteService = inject(HeaderRouteService)

  ngOnInit(): void {
    setTimeout(() => {
      this.headerRouteService.changeActiveRouteURL(this.route)
    })
  }
}
