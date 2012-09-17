//setTimeout(function() {
	GRS.generateImages();
	
	GRS.stateManager = Em.StateManager.create({
		rootElement: '#mainArea',
		initialState: 'showPhotoView',
		
		showPhotoView: Em.ViewState.create({
			enter: function(manager) {
				this._super(manager);
				GRS.PhotoListController.set('content', GRS.store.findAll(GRS.Photo));
			},
			
			view: Em.ContainerView.create({
				childViews: ['photoListView'],
				
				photoListView: Em.View.extend({
					templateName: 'photo-view-list',
					contentBinding: 'GRS.PhotoListController.content',
					classNames: ['thumbnailViewList']
				})
			})
		})
	});
//}, 50);