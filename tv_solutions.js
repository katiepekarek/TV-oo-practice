var TV = function(screenSize, hd){
  this.screenSize = screenSize;
  this.hd = hd;
  this.favorites = [];

  var that = this;

  return {
    screenSize: that.screenSize,
    hd: that.hd,
    favorites: that.favorites,
    setChannel: function(channelNumber) {
      that.previousChannel = that.currentChannel;
      that.currentChannel = channelNumber;
    },
    currentChannel: function(){
      return that.currentChannel;
    },
    previous: function() {
      this.setChannel(that.previousChannel);
    },
    makeCurrentChannelFavorite: function() {
      that.favorites.push(that.currentChannel);
    }
  };
};

module.exports = TV;
