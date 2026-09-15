Page({
  data: {},
  nav(e){ my.navigateTo({ url: e.currentTarget.dataset.url }); },
  navTab(e){ my.switchTab({ url: e.currentTarget.dataset.url }); },
  back(){ my.navigateBack(); },
  toast(e){ my.showToast({ content: (e.currentTarget.dataset.msg || 'Done'), type: 'success' }); },
  register(){
    var self = this;
    my.showLoading({ content:'Processing…' });
    // PRODUCTION: create event order -> my.tradePay -> on success issue ticket.
    setTimeout(function(){ my.hideLoading(); my.navigateTo({ url:'/pages/ticket/ticket' }); }, 800);
  }
});
