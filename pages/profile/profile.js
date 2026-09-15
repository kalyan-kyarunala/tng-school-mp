Page({
  data: {
    countdown: '5:00'
  },
  onLoad(){
    this.startCountdown();
  },
  onUnload(){
    if (this._timer) clearInterval(this._timer);
  },
  startCountdown(){
    let seconds = 300;
    this._timer = setInterval(() => {
      seconds -= 1;
      if (seconds < 0) seconds = 300; // loops, mirroring a periodically-refreshing security QR
      const m = Math.floor(seconds / 60);
      const s = seconds % 60;
      this.setData({ countdown: `${m}:${s < 10 ? '0' : ''}${s}` });
    }, 1000);
  },
  nav(e){ my.navigateTo({ url: e.currentTarget.dataset.url }); },
  navTab(e){ my.switchTab({ url: e.currentTarget.dataset.url }); },
  back(){ my.navigateBack(); },
  toast(e){ my.showToast({ content: (e.currentTarget.dataset.msg || 'Done'), type: 'success' }); }
});
