const BASE_URL = "https://locally.uieee.com/"

export default fetch = (url,data={},method="GET") => {
  return new Promise((resolve,reject)=>{
    //做异步操作
    wx.request({
      url: `${BASE_URL}${url}`,
      data: data,
      method,
      success:res=>{
        resolve(res)
      },
      fail:err=>{
        reject(err)
      }
    })
  })
}