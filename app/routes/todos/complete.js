import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.filter('todo', function(todo) {
      return todo.get('isComplete');
    });
  },
  renderTemplate(controller, model) {
    this.render('todos.index', {
      model: model
    });
  }
});
