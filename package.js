Package.describe({
  name: 'ffxsam:case-converter',
  version: '0.7.0',
  summary: 'Converts names of things to/from various case formats',
  git: 'https://github.com/ffxsam/meteor-case-converter',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use('ecmascript');
  api.addFiles('case-converter.js');
  api.export('CaseConv');
});
