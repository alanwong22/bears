import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
		return $.get('/temp-data/cats.json');
	}
});
