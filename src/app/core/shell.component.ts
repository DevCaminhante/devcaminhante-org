import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header.component";

@Component({
    selector: 'dcorg-shell',
    standalone: true,
    template: `<dcorg-header></dcorg-header>`,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, HeaderComponent]
})
export class ShellComponent {}
