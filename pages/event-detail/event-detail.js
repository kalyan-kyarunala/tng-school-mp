const events = require('../../utils/events.js');
Page({
  data: { ev: events.get('ev1') },
  onLoad(query){
    // `id` comes from the events list card that was tapped; falls back to the first event.
    this.setData({ ev: events.get(query && query.id) });
  },
  nav(e){ my.navigateTo({ url: e.currentTarget.dataset.url }); },
  navTab(e){ my.switchTab({ url: e.currentTarget.dataset.url }); },
  back(){ my.navigateBack(); },
  toast(e){ my.showToast({ content: (e.currentTarget.dataset.msg || 'Done'), type: 'success' }); },
  register(){
    var id = this.data.ev.id;
    my.showLoading({ content:'Processing…' });
    // PRODUCTION: create event order -> my.tradePay -> on success issue ticket.
    setTimeout(function(){ my.hideLoading(); my.navigateTo({ url:'/pages/ticket/ticket?id=' + id }); }, 800);
  }
});
