import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('resources');
  this.route('docs', function() {
    this.route('html');
    this.route('css');
    this.route('js');
  });
  this.route('syllabus', function() {
    this.route('over-all', {path: '/'});
    this.route('units');
    this.route('sprint', function() {
      this.route('sprint-one');
    });
  });
});

export default Router;
