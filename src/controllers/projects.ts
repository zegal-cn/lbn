
class ProjectsController {
  constructor() {
    // this.messages = new Repository('messages');
  }

  @get('/projects')
  @param.query.number('page')
  // list(limit = 10) {
  //   if (limit > 100) limit = 100; // your logic
  //   return this.messages.find({limit});
  // }
}
