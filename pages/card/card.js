Page({
  data: { tabIndex: 3 },
  onShow(){
    if (typeof my.hideTabBar === 'function') { my.hideTabBar({ fail(){} }); }
  },
  nav(e){ my.navigateTo({ url: e.currentTarget.dataset.url }); },
  navTab(e){ my.switchTab({ url: e.currentTarget.dataset.url }); },
  back(){ my.navigateBack(); },
  toast(e){ my.showToast({ content: (e.currentTarget.dataset.msg || 'Done'), type: 'success' }); }
});
