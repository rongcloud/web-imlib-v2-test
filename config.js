(function (win) {

  var isDebug = false;

  var im = {
    appkey: '',
    token: '',
    navi: '',
    cmpUrl: '',
    targetId: '',
    isPolling: false
  };

  if (!isDebug) {
    delete im.cmpUrl;
  }

  var config = {
    im: im,
    isDebug: isDebug,
    debugConf: {
      autoRun: false,
      isShowMsg: false
    }
  };

  win.RongIM = win.RongIM || {};
  win.RongIM = {
    config: config,
    components: {}
  };

})(window);