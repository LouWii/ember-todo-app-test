import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var todos = this.store.findAll('todo'); // Adapter operation failed
    console.log(todos);
    // let todos = [
    //   {
    //     title: "Learn Ember",
    //     complete: false,
    //   },
    //   {
    //     title: "Solve World Hunger",
    //     complete: false,
    //   }
    // ];
    return todos;
  },
  actions: {
    createTodo(newTitle) {
      this.store.createRecord('todo', {
        title: newTitle,
        isCompleted: false,
        creationDate: new Date()
      }).save();
    },
    updateTodo(todo) {
      todo.save();
    },
    deleteTodo(todo) {
      todo.destroyRecord();
    }
  }
});
