function Castle(a,b,c) {
  this.a = a;
  this.b = b;
  this.c = c;

  var that = this;

  return {
    sum: function() {
      return that.a + that.b + that.c;
    }
  }
}

module.exports = Castle;