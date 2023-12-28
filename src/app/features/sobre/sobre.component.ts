import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dcorg-sobre',
  standalone: true,
  imports: [CommonModule],
  template: `<p>sobre works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SobreComponent {}
