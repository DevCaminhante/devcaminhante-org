import { computed, Injectable, signal } from '@angular/core'
import {
  HeaderRouteTextType,
  HeaderRouteURLType
} from '../constants/header-route.constants'

export interface HeaderRouteState {
  activeRouteURL: HeaderRouteURLType | undefined
  activeRouteText: HeaderRouteTextType | undefined
}

@Injectable({
  providedIn: 'root'
})
export class HeaderRouteService {
  state = signal<HeaderRouteState>({
    activeRouteText: undefined,
    activeRouteURL: undefined
  })

  activeRouteText = computed(() => this.state().activeRouteText)
  activeRouteURL = computed(() => this.state().activeRouteURL)

  changeActiveRouteText(activeRouteText: HeaderRouteTextType) {
    this.state.update((state) => ({
      ...state,
      activeRouteText
    }))
  }

  changeActiveRouteURL(activeRouteURL: HeaderRouteURLType) {
    this.state.update((state) => ({
      ...state,
      activeRouteURL
    }))
  }
}
