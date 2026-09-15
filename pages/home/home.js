Page({
  data: {
    tabIndex: 0,
    // Sample push notification preview — shows what a real TNGD notification looks
    // like once it deep-links a parent into this mini program. Real deeplink:
    // tngdwallet://client/dl/mp?mpid=2171020264972013&path=%2Fpages%2Ffee-detail%2Ffee-detail&student=Chong%20Wei%20Xuan&amount=285.00
    showPushNotif: true,
    notif: {
      icon: '/assets/icons/wallet-coral.png',
      title: 'Fee reminder',
      body: 'RM 285.00 is due for Chong Wei Xuan on 19 Aug. Tap to pay now.',
      url: '/pages/fee-detail/fee-detail'
    }
  },
  onLoad(){
    // If this launch actually came from a TNGD deeplink, its query overrides the sample.
    const app = getApp();
    const q = app.globalData && app.globalData.deeplinkQuery;
    if (q && (q.title || q.body || q.path)) {
      this.setData({
        showPushNotif: true,
        notif: {
          icon: '/assets/icons/bell-blue.png',
          title: q.title || 'Notification',
          body: q.body || '',
          url: q.path || '/pages/home/home'
        }
      });
    }
  },
  onShow(){
    // Defensive: some Alipay/TNGD builds don't reliably suppress the native tab bar
    // just from tabBar.custom:true, so hide it explicitly. Active-tab highlighting
    // itself is handled by the `selected="{{tabIndex}}"` prop in home.axml, not here.
    if (typeof my.hideTabBar === 'function') { my.hideTabBar({ fail(){} }); }
  },
  openPushNotif(){
    const url = this.data.notif.url;
    this.setData({ showPushNotif: false });
    my.navigateTo({ url });
  },
  dismissPushNotif(){
    this.setData({ showPushNotif: false });
  },
  nav(e){ my.navigateTo({ url: e.currentTarget.dataset.url }); },
  navTab(e){ my.switchTab({ url: e.currentTarget.dataset.url }); },
  back(){ my.navigateBack(); },
  toast(e){ my.showToast({ content: (e.currentTarget.dataset.msg || 'Done'), type: 'success' }); }
});
