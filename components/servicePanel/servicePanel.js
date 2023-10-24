import { MOCK_SERVICES } from "../../constant/index"

// components/servicePanel/servicePanel.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    tabIndex: 0,
    navArr: ['Cleaning', 'Repairing', 'Painting', 'Laundary', 'Appliance', 'Plumbing', 'Shifting'],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _navChange(e) {
      this.setData({
        tabIndex: e.currentTarget.dataset.index
      })
      this.triggerEvent('sync', { value: this.data.tabIndex })
    },
  },

  options: {
    addGlobalClass: true
  },
})