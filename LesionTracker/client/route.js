Router.configure({
  layoutTemplate: 'lesionTrackerLayout',
  //loadingTemplate: '',
  notFoundTemplate: 'notFound'
});



Router.route('/', function () {
  this.render('worklist', {
  });
});

Router.route('/viewer/:_id', {
  layoutTemplate: 'lesionTrackerLayout',
  name: 'viewer',
  onBeforeAction: function() {
    var self = this;
    //Session.set('openNewTabEvent', self);
    
    Meteor.call('GetStudyMetadata', this.params._id, function(error, study) {
      //console.log(study);
      sortStudy(study);

      var studies = [study];
      Session.set('studies', studies);
      //Session.set(activeTabId, studies);
      //Session.set('showContentInTab', true);
      //self.render('viewer');
      openNewTab(studies);
    });
  }
});