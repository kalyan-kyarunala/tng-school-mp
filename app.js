
App({
  globalData: {
    // Populated from TNG SSO on launch (my.getAuthCode / getOpenUserInfo).
    parentName: 'Loganathan A/L Suppiah',
    activeChildId: 'SKTD3-2026-010',
    // This mini program's registered id — the mpid every TNGD deeplink into this
    // app must carry. See "Deeplinking and Push Notification" docs, e.g.:
    // tngdwallet://client/dl/mp?mpid=2171020264972013&path=%2Fpages%2Ffee-detail%2Ffee-detail&student=Kaviya%20A%2FP%20Loganathan&amount=285.00
    mpid: '2171020264972013',
    // Populated from a TNGD deeplink (push notification / SMS / banner tap), if this
    // launch/show came from one.
    deeplinkQuery: null
  },
  onLaunch(options) {
    // In production: obtain TNG auth code -> exchange for session on backend.
    // my.getAuthCode({ scopes: 'auth_user', success: res => {...} });
    this.captureDeeplink(options);
  },
  onShow(options) {
    this.captureDeeplink(options);
  },
  captureDeeplink(options) {
    // `path` is a reserved keyword the TNGD host already routes on before the mini
    // program even loads; everything else in options.query is our own extra params.
    if (options && options.query && Object.keys(options.query).length) {
      this.globalData.deeplinkQuery = options.query;
      console.log('[deeplink] received query:', JSON.stringify(options.query));
    }
  }
});
