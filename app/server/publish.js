Meteor.publish('tasks', function (userId) {
  // This currently only returns tasks created by the current user
  // TODO: add a filter mechanic to run custom searches wherever needed
  return Tasks.find({createdBy: userId});
});
