import {Component, Inject} from "@angular/core";
import {NgFor} from "@angular/common";
import {RouteConfig, ROUTER_DIRECTIVES, Router, RouterLink, RouterOutlet} from "@angular/router-deprecated";
import {HomePageComponent} from "../home/home-page-component";

declare type Routes = Array<{
    path:string;
    component:any,
    as:string;
}>;

const routes:Routes = [
    {path: "/", component: HomePageComponent, as: "Home"}
];

@Component({
    selector: "mainroot",
    templateUrl: "./src/router/navigation.html",
    directives: <any>[ROUTER_DIRECTIVES, NgFor, RouterLink, RouterOutlet]
})
@RouteConfig(<any>routes)
export class RouterComponent {
    header:string = "Home";

    constructor(@Inject(Router)router:Router) {
        router.subscribe(href => {
            let route = (<any>routes).find(r => r.path === "/" + href);

            this.header = !!route ? route.as : "Home";
        });
    }
}
