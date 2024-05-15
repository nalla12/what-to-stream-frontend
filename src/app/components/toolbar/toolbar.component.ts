import {Component} from '@angular/core';
import {MatIconButton} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-toolbar',
    standalone: true,
    imports: [
        MatIconModule,
        MatIconButton,
        MatToolbar,
        RouterLink
    ],
    templateUrl: './toolbar.component.html',
    styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        // Note that we provide the icon here as a string literal here due to a limitation in
        // Stackblitz. If you want to provide the icon from a URL, you can use:
        // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
        iconRegistry.addSvgIcon('tv', sanitizer.bypassSecurityTrustResourceUrl('assets/tv.svg'));
    }
}
