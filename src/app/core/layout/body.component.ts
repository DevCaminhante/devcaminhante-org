import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'dcorg-body',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class BodyComponent implements OnInit {
  ngOnInit(): void {
    console.log()
  }
}
