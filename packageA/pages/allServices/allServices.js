import { SERVICE_TYPES_2 } from "../../../constant/index"

// packageA/pages/allServices/allServices.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    service_data: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(_options) {
    this.setData(
      { service_data: SERVICE_TYPES_2 }
    )
  },

  _onClickLeft() {
    wx.navigateBack()
  },
})