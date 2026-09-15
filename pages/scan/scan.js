Page({
  data: {},
  nav(e){ my.navigateTo({ url: e.currentTarget.dataset.url }); },
  navTab(e){ my.switchTab({ url: e.currentTarget.dataset.url }); },
  back(){ my.navigateBack(); },
  toast(e){ my.showToast({ content: (e.currentTarget.dataset.msg || 'Done'), type: 'success' }); },
  toggleTorch(){
    // The real device flash is a property of the native scanner UI itself (opened via
    // my.scan below) — there's no standalone flash API before that scanner is open.
    my.showToast({ content: 'Tap the frame to start scanning — torch is available there', type: 'none' });
  },
  startScan(){
    my.scan({
      scanType: ['qrCode'],
      success: () => {
        my.navigateTo({ url: '/pages/link-pending/link-pending' });
      },
      fail: () => {
        my.showToast({ content: 'Could not open the scanner', type: 'fail' });
      }
    });
  },
  chooseImage(){
    my.chooseImage({
      count: 1,
      sourceType: ['album'],
      success: () => {
        my.navigateTo({ url: '/pages/link-pending/link-pending' });
      }
    });
  }
});
