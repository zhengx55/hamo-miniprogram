// index.js
import { SERVICE_TYPES, MOCK_SERVICES } from "../../constant/index"
Page({
  data: {
    service_data: [],
    popular_service: [],
    navArr: ['Cleaning', 'Repairing', 'Painting', 'Laundary', 'Appliance', 'Plumbing', 'Shifting'],
  },

  navigateTo: function (e) {
    const page_url = e.target.dataset.link;
    wx.navigateTo({
      url: page_url,
    })
  },

  onNavIndexChange(e) {
    this.setData({
      popular_service: MOCK_SERVICES.filter((item) => {
        return item.type === this.data.navArr[e.detail.value]
      })
    })
  },

  onLoad() {
    wx.showLoading({
      title: '数据加载中',
    })
    this.setData(
      {
        service_data: SERVICE_TYPES, popular_service: MOCK_SERVICES.filter((item) => {
          return item.type === this.data.navArr[0]
        })
      }, function () {
        wx.hideLoading()

      }
    )
  }
})
