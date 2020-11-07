import { PLATFORM } from "aurelia-pal";
import { Router, RouterConfiguration } from "aurelia-router";

export class App {
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = "Tutors";
    config.options.pushState = true;
    config.options.root = "/";
    config.map([
      {
        route: "course/*courseurl",
        moduleId: PLATFORM.moduleName("./course-view"),
        name: "course",
        title: "Module",
      },
    ]);
  }
}
