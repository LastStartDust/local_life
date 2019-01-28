import fetch from '../../utils/fetch.js'
// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryId:-1,//分类id
    pageIndex:0,//页码
    pageSize:10, //页容量
    inputShowed: false,
    inputVal: "",//输入的关键
    hasMore:true,//是否还有更多数据
    shops:[] //店铺列表
  },

  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    }, () => {
      this.data.pageIndex = 0
      this.data.shops = []
      this.data.hasMore = true

      this.loadMoreData()
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    this.data.categoryId = options.id

    //获取第一页的数据
    this.loadMoreData()
  },

  //搜索
  search(){
    this.data.pageIndex = 0
    this.data.shops = []
    this.data.hasMore = true

    this.loadMoreData()
  },

  loadMoreData(){
    if (!this.data.hasMore){
      return
    }

    //页码要++
    this.data.pageIndex++

    const url = `categories/${this.data.categoryId}/shops?_page=${this.data.pageIndex}&_limit=${this.data.pageSize}&q=${this.data.inputVal}`

    fetch(url).then(res=>{
      wx.stopPullDownRefresh()
      const total = parseInt(res.header["X-Total-Count"])
      // console.log(this.data.shops.length, (total - this.data.pageSize))
      this.setData({
        hasMore: this.data.shops.length < (total - this.data.pageSize),
        shops: this.data.shops.concat(res.data)
      })
    })
  },

  //跳转到详情页面
  goToDetail(e){
    wx.navigateTo({
      url: `/pages/detail/detail?shopId=${e.currentTarget.dataset.id}`,
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.data.pageIndex = 0
    this.data.shops = []
    this.data.hasMore = true

    this.loadMoreData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMoreData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})