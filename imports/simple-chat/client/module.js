import "angular-marked";
import { SetModule, init, options } from "angular2-now";
options({controllerAs: "vm"});
// workaround
init();
export const name = "simple-chat";
SetModule(name, [
    "angular-meteor",
    "ngAria",
    "ngAnimate",
    "ngMaterial",
    "ngMessages",
    "hc.marked"
]);
