Package.describe({
  name: 'spacetalk:channels',
  version: '0.1.0',
  summary: 'SpaceTalk channels package',
  git: 'https://github.com/SpaceTalk/SpaceTalk.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'spacetalk:lib@0.2.0',
    // XXX Remove dependency from this. We want to separate this.
    'spacetalk:direct-messages@0.1.0'
  ]);

  api.addFiles([
    'lib/channels.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/server/methods/channels/add.js',
    'lib/server/methods/channels/remove.js',
    'lib/server/methods/channels/update.js',
    'lib/server/publications/teamChannels.js'
  ], 'server');

  api.addFiles([
    'lib/client/utilities/currentChannel.js',
    'lib/client/utilities/currentChannelId.js',
    'lib/client/helpers/currentChannel.js',

    // Channel
    'lib/client/views/channel/channel.html',
    'lib/client/views/channel/channel.js'
  ], 'client');

  api.export([
    'Channels',

    // XXX These should be exported. Separate logic!
    'currentChannel',
    'currentChannelSlug',
    'currentChannelId'
  ]);
});