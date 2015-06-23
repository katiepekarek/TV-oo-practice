var TV = require('../tv');

describe('TV', function() {

  it('gets initialized with a screenSize and if it is HD', function() {
    var tv = new TV(70, true);
    expect(tv.screenSize).toEqual(70);
    expect(tv.hd).toBe(true);
  });

  it('allows for the current channel to be set', function() {
    var tv = new TV(70, true);
    tv.setChannel(200);

    expect(tv.currentChannel()).toEqual(200);
  });

  it('remembers the last channel it was set to', function() {
    var tv = new TV(70, true);
    tv.setChannel(301);
    tv.setChannel(400);

    tv.previous();
    expect(tv.currentChannel()).toEqual(301);
  });

  it('swaps the last channel when you toggle between two channels', function() {
    var tv = new TV(70, true);
    tv.setChannel(301);
    tv.setChannel(400);

    tv.previous();
    tv.previous()
    expect(tv.currentChannel()).toEqual(400);
  });

  it('allows you to set the current channel as a favorite', function() {
    var tv = new TV(60, false);
    tv.setChannel(301);
    tv.makeCurrentChannelFavorite();

    expect(tv.favorites).toEqual([301]);
  });
});
