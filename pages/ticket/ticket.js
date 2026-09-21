const genQR = require('../../utils/qr.js');
const events = require('../../utils/events.js');
Page({
  data: { ev: events.get('ev1') },
  onLoad(query){
    // `id` is carried over from the event the parent just paid for.
    var ev = events.get(query && query.id);
    this.setData({ ev: ev, qr: genQR(58) });
  },
  nav(e){ my.navigateTo({ url: e.currentTarget.dataset.url }); },
  navTab(e){ my.switchTab({ url: e.currentTarget.dataset.url }); },
  back(){ my.navigateBack(); },
  toast(e){ my.showToast({ content: (e.currentTarget.dataset.msg || 'Done'), type: 'success' }); }
});
