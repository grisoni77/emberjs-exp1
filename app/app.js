GRS = Ember.Application.create({
	ready: function() {
		this._super();
	}
});

GRS.store = DS.Store.create();

GRS.Photo = DS.Model.extend({
	primaryKey: 'id',
	id: DS.attr('string'),
	photoTitle: DS.attr('string'),
	photoUrl: DS.attr('string'),
	
});


