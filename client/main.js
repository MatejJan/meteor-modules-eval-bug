import { Template } from 'meteor/templating';

Template.body.helpers({
  eval() {
    return Test.eval();
  }
});
