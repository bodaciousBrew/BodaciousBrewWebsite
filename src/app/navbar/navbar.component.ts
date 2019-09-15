import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.scss'],
  })
  export class NavbarComponent {
    showList = ['Bodacious Brew Broadcast',
              'Robotic Radio'];

    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
      iconRegistry.addSvgIcon(
          'gameboy',
          // tslint:disable-next-line: max-line-length
          sanitizer.bypassSecurityTrustResourceUrl('assets/gameboy.svg'));
    }
  }
