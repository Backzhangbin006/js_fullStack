// 云函数入口文件
const cloud = require('wx-server-sdk')
const request = require('request');

cloud.init()
const getSessionKey = (code) => {
  // https://api.weixin.qq.com/sns/jscode2session?
  // appid=APPID&secret=SECRET
  // &js_code=JSCODE
  // &grant_type=authorization_code
  const opts = {
    appid: "wx1a8aac4e9ac1f192",
    secret: 'a80c4c049feb2fa72b6c347206e208b5',
    js_code: code,
    grant_type: "authorization_code"
  }
  return new Promise((resolve, reject) => {
    request({
      method: "GET",
      url: "https://api.weixin.qq.com/sns/jscode2session",
      qs: opts,
      json: true
    }, (err, res, body) => {
      if (err) {
        reject(err)
      }
      resolve(body);
    })
  })
}
// 云函数入口函数
exports.main = async (event, context) => {
  // eslint 
  try {
    const { code } = event;
    const weixinRes = await getSessionKey(code);
    return {
      weixinRes
    }
  } catch (error) {
    return {
      error
    }
  }
}
