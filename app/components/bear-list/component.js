import Ember from 'ember';

export default Ember.Component.extend({
	bears: [],
	actions: {
		addBear: function () {
			let bearName = this.get('bearName');
			this.get('bears').pushObject(bearName);
		}
	}
});
