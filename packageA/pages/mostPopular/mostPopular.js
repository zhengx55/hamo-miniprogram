import { MOCK_SERVICES } from "../../../constant/index";

// packageA/pages/mostPopular/mostPopular.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    popular_service: [],
    navArr: ['Cleaning', 'Repairing', 'Painting', 'Laundary', 'Appliance', 'Plumbing', 'Shifting'],
    navIndex: 0,
    loading: false,
  },

  _onClickLeft() {
    wx.navigateBack()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.showLoading({
      title: '数据加载中',
    })
    this.setData({
      popular_service: MOCK_SERVICES.filter((item) => {
        return item.type === this.data.navArr[this.data.navIndex]
      })
    }, function () {
      wx.hideLoading()
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})