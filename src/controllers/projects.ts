import { get, param, getControllerSpec } from "@loopback/core";
// import { Repository } from "@loopback/core";

class ProjectsController {
  constructor() {
    // this.projects = new Repository('projects');
  }

  @get('/projects')
  @param.query.number('page')
  list(page = 0, pageSize = 30) {

  }

  @get('/projects/{id}')
  @param.query.number('page')
  @param.query.number('pageSize')
  get(id: number) {

  }

}
