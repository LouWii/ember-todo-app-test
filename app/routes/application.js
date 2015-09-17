import Ember from 'ember';

//For example, imagine we want to preload some data into the store when the application boots for the first time.
// We can use the route:application to do so. The route:application is the top-most route in the route hierarchy, and its model hook gets called once when the app starts up.

export default Ember.Route.extend({
  model() {
    this.store.push('todo', {
      id: 1,
      title: "First to-do",
      description: "Make this app working !",
      creationDate: new Date()
    });

    this.store.push('todo', {
      id: 2,
      title: "Second to-do",
      description: "Make this working in Electron",
      creationDate: new Date()
    });
  }
});
