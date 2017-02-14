Package.describe({
  name: 'test',
  version: '0.1.0'
});

Package.onUse(function(api) {
  api.use('coffeescript');

  // Uncomment this to make the project work.
  // api.use('modules');

  api.export('Test');
  api.addFiles('test.coffee');
});
