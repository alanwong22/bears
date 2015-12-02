define('snow-app/components/bear-list/component', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		bears: [],
		actions: {
			addBear: function addBear() {
				var bearName = this.get('bearName');
				this.get('bears').pushObject(bearName);
			}
		}
	});
});