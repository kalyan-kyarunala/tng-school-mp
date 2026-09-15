Page({
  data: {"showPay": false},
  nav(e){ my.navigateTo({ url: e.currentTarget.dataset.url }); },
  navTab(e){ my.switchTab({ url: e.currentTarget.dataset.url }); },
  back(){ my.navigateBack(); },
  toast(e){ my.showToast({ content: (e.currentTarget.dataset.msg || 'Done'), type: 'success' }); },
  openPay(){ this.setData({ showPay:true }); },
  closePay(){ this.setData({ showPay:false }); },
  payNow(){
    var self = this;
    self.setData({ showPay:false });
    my.showLoading({ content:'Processing…' });
    // PRODUCTION: backend creates an order and returns a tradeNO / paymentUrl,
    // then invoke the TNG wallet cashier:
    // my.tradePay({ tradeNO: order.tradeNO }, function(res){
    //   if (res.resultCode === '9000') my.redirectTo({ url:'/pages/pay-success/pay-success' });
    // });
    setTimeout(function(){
      my.hideLoading();
      my.redirectTo({ url:'/pages/pay-success/pay-success' });
    }, 900);
  }
});
