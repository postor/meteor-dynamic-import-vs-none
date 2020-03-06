import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

const Links = new Mongo.Collection('links');
export default Links

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('links', function tasksPublication() {
    return Links.find();
  });
}