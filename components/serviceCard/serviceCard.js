// components/serviceCard.js
Component({
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    price: String,
    name: {
      type: String,
      value: ""
    },
    serviceType: {
      type: String,
      value: ""
    },
    serviceName: {
      type: String,
      value: ""
    },
    rate: {
      type: Number,
      value: 0
    },
    reviews: {
      type: Number,
      value: 0
    },
    image: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _onCardTap: function () {
      console.log('tap')
    }
  }
})