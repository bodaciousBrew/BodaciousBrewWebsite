import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bobrew';
  bobrewBroadcastEpisodes = ['1', '2', '3', '4'];
  chaseAndLaceyEpisodes: any[];
  roboticRadioEpisodes: any[];

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.

  }

}
