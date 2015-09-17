import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

// Define URL mappings
// http://guides.emberjs.com/v2.0.0/routing/defining-your-routes/
Router.map(function() {
  this.route('todos', { path: '/' }, function() {
    this.route('complete');
    this.route('incomplete');
  });
});

export default Router;
