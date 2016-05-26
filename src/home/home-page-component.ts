import {Component} from "@angular/core";
import {NgFor, NgStyle} from "@angular/common";
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';

@Component({
    selector: "home",
    providers: [],
    directives: [NgFor, NgStyle, MD_SIDENAV_DIRECTIVES],
    pipes: [],
    templateUrl: "./src/home/home-page.html",
    styles: [],
})

export class HomePageComponent {
}
