// index.js
import { SERVICE_TYPES, MOCK_SERVICES } from "../../constant/index"
Page({
  data: {
    service_data: [],
    popular_service: []
  },
  navigateTo: function (e) {
    const page_url = e.target.dataset.link;
    wx.navigateTo({
      url: page_url,
    })
  },

  onLoad() {
    this.setData(
      { service_data: SERVICE_TYPES, popular_service: MOCK_SERVICES }
    )
  }
})
