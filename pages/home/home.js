import fetch from '../../utils/fetch.js'

// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slides:[], //轮播图
    categories:[] //九宫格
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取轮播图数据
    this.getSlidesData()

    // 获取九宫格数据
    this.getCategoriesData()
  },

  getSlidesData(){
    /** 
    wx.request({
      url: 'https://locally.uieee.com/slides',
      success:res => {
        this.setData({
          slides:res.data
        })
      }
    })
    */
    fetch('slides').then(res=>{
      this.setData({
        slides: res.data
      })
    })
    // const res = await fetch('slides')
    // console.log(res)
  },

  getCategoriesData(){
    /**
    wx.request({
      url: 'https://locally.uieee.com/categories',
      success:res=>{
        this.setData({
          categories:res.data
        })
      }
    })
     */

    fetch('categories').then(res=>{
      this.setData({
        categories: res.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})