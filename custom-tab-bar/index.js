Component({
  props: {
    selected: 0
  },
  data: {
    tabs: [
      { path: '/pages/home/home', text: 'Home', icon: '/assets/tabbar/home.png', iconActive: '/assets/tabbar/home-active.png' },
      { path: '/pages/fees/fees', text: 'Fees', icon: '/assets/tabbar/fees.png', iconActive: '/assets/tabbar/fees-active.png' },
      { path: '/pages/events/events', text: 'Events', icon: '/assets/tabbar/events.png', iconActive: '/assets/tabbar/events-active.png' },
      { path: '/pages/card/card', text: 'Card', icon: '/assets/tabbar/card.png', iconActive: '/assets/tabbar/card-active.png' },
      { path: '/pages/inbox/inbox', text: 'Inbox', icon: '/assets/tabbar/inbox.png', iconActive: '/assets/tabbar/inbox-active.png' }
    ]
  },
  methods: {
    switchTab(e) {
      // No optimistic local state here on purpose: `selected` is driven entirely by
      // the `selected` prop each page passes in from its own data (see pages/*/*.js),
      // which is a plain, guaranteed-supported component feature — unlike getTabBar(),
      // which this platform may or may not implement.
      const url = e.currentTarget.dataset.path;
      my.switchTab({ url });
    }
  }
});
