let app = getApp()

Page({
  data: {
    currentTab: 0,
    items: [
      {
        "iconPath": "/images/icon/spiral1.png",
        "selectedIconPath": "/images/icon/spiral1-fill.png",
        "text": ""
      },
      {
        "iconPath": "/images/icon/spiral2.png",
        "selectedIconPath": "/images/icon/spiral2-fill.png",
        "text": ""
      },
      {
        "iconPath": "/images/icon/spiral3.png",
        "selectedIconPath": "/images/icon/spiral3-fill.png",
        "text": ""
      }
    ]
  },
  swichNav: function (e) {
    let that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  onLoad: function (option) {

  }
})

