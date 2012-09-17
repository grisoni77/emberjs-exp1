GRS.PhotoListController = Em.ArrayProxy.create({
	content: [],
	selected: null
});

GRS.SelectedPhotoController = Em.Object.create({
	contentBinding: 'GRS.PhotoListController.selected' 
});

GRS.ThumbnailPhotoView = Em.View.extend({
    click: function(evt) {
		GRS.PhotoListController.set('selected', this.get('content'));
    },

    classNameBindings: "isSelected",

    isSelected: function() {
        console.log(GRS.PhotoListController.get('selected') == this.get('content'));
        return GRS.PhotoListController.get('selected') == this.get('content');
    }.property('GRS.PhotoListController.selected')
});