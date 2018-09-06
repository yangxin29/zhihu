const { sendError } = require('../../utils/error')
const express = require('express')
const router = express.Router()
const rq = require('request')
// const fs = require('fs')
// const iconv = require('iconv-lite')

// 定义网站主页路由
router.get('/', (req, res) => {
  try {
    const topstoryOptions = {
      url: `https://www.zhihu.com/api/v3/feed/topstory?mobile=true&action_feed=True&limit=7&session_token=a43bcf364f6ad46a3ba61736ff1d0356&action=down&after_id=${req.query.after_id}&desktop=true`,
      headers: {
        cookie: '_zap=8f49bcec-ec32-4806-8210-10192b7a22fe; _xsrf=E8xH6Q5tRRr5lhBJnwoO88JpmeuX45VK; d_c0="ACBnTHGNGQ6PTvGEpAoLpOXsPCtdVk1hCww=|1535012968"; q_c1=dcbb082da17b41ca84da4731d2f23f4c|1535012970000|1535012970000; l_cap_id="OWNkMDJiMzAxNjhkNDZmMmEwYTU2MTU0ZDA2OGRiN2Q=|1535022491|7635a1102533202e37134459e99d22c5688711c2"; r_cap_id="Y2Y3OWQ4NTE1M2ZmNDY2MGI0OTZjNWUyM2VlZGI5OTM=|1535022491|22646a0bb14dd6cafc6f2da81b254f3e5bbb1eac"; cap_id="NzUyNjMwNjhiZjgzNDc3MTkzNDljOTgwMzFjNWQ2Mzg=|1535022491|93c86438fc55b9d13f0ddf7cc392e18f0669e77d"; __utma=51854390.1250698588.1536108775.1536108775.1536108775.1; __utmz=51854390.1536108775.1.1.utmcsr=zhihu.com|utmccn=(referral)|utmcmd=referral|utmcct=/; __utmv=51854390.110--|2=registration_date=20180415=1^3=entry_date=20180415=1; capsion_ticket="2|1:0|10:1536108887|14:capsion_ticket|44:OTRhYjNjYmRmYzM4NDQxY2E3YTRiZTA3Yzc4NzUxNWQ=|c1a09937bfb294dfb1ae53b988e80d988659214b5d41618cc3b82b3cf49e1ecd"; z_c0="2|1:0|10:1536108919|4:z_c0|92:Mi4xU0FqSUNBQUFBQUFBSUdkTWNZMFpEaVlBQUFCZ0FsVk5kM2Q4WEFCWXFqY0dsb2tYdDc5a1U4em1HaU9DLXpFY3B3|0ed5cd950e4c75723d83032e1606a4ae758a8c163442715691f8aebf21e46fee"; tgw_l7_route=1c2b7f9548c57cd7d5a535ac4812e20e',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'

      }
    }

    rq(topstoryOptions, (err, res, body) => {
      if (err) {
        res.send(sendError('数据请求错误'))
      } else {
        res.send(JSON.parse(body))
      }
    })
  } catch (e) {
    res.send(sendError('数据请求错误'))
  }
})

module.exports = router
