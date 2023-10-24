Page({
  data: {
    activeTab: 2,
  },
  onTabChange(e) {
    const currentPanel = e.detail.index;
    this.setData({
      activeTab: currentPanel,
    });
  },
  onPanelhange(e) {
    const currentPanel = e.detail.current;
    this.setData({
      activeTab: currentPanel,
    });
  },
});
