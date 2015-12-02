define('snow-app/routes/application', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return $.get('/temp-data/cats.json');
		}
	});
});