const genQR = require('../../utils/qr.js');
Page({
  data: {},
  onLoad(){ this.setData({ qr: genQR(58) }); },
  nav(e){ my.navigateTo({ url: e.currentTarget.dataset.url }); },
  navTab(e){ my.switchTab({ url: e.currentTarget.dataset.url }); },
  back(){ my.navigateBack(); },
  toast(e){ my.showToast({ content: (e.currentTarget.dataset.msg || 'Done'), type: 'success' }); }
});
