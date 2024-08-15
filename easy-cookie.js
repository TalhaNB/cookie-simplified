let Cookie = {
  set: function(name, value, minutes, path) {
    const finalPath = path ? path : "/";

    var expires = "";
    if (minutes) {
      var date = new Date();
      date.setTime(date.getTime() + minutes * 60 * 1000);
      expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + value + expires + "; path=" + finalPath;
  },

  get: function(name) {
    const name = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return;
  },

  remove: function(name) {
    this.set(name, "", -100);
  },

  exists: function(name) {
    return typeof this.get(name) !== "undefined";
  }
}
