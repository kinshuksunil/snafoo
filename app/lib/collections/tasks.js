Tasks = new Mongo.Collection('tasks');

Tasks.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  description: {
    type: String,
    label: "Description",
    max: 1024
  },
  dueDate: {
    type: Date,
    label: "Due Date",
    optional: true
    // TODO: as part of system config, user can have the option of enforcing due dates on tasks
  },
  priority: {
    type: String,
    label: "Priority",
    allowedValues: ['High', 'Medium', 'Low'],
    // TODO: as part of system config, user should be able to define their own custom priorities
    defaultValue: "Medium"
  },
  status: {
    type: String,
    label: "Status",
    allowedValues: ['Open', 'In Progress', 'Closed'],
    // TODO: as part of system config, user should be able to define their own custom task statuses
    defaultValue: "Open"
  },
  assignedTo: {
    type: Number,
    // TODO: should be a foreign key reference to the user table
    label: "Assigned To"
  },
  createdBy: {
    type: String,
    // TODO: should be a foreign key reference to the user table
    autoValue: function() {
      return this.userId
    }
  },
  createdAt: {
    type: Date,
    autoValue: Date()
  }
}));


if (Meteor.isServer) {
  Tasks.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });

/*
  Probably this piece of default code is not needed.
  TODO: understand what this does and decide if it needs to be removed or maintained.

  Tasks.deny({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
*/
}
