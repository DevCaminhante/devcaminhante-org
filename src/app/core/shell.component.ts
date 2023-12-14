import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dc-org-shell',
  standalone: true,
  imports: [CommonModule],
  template: `<p>shell works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {}
