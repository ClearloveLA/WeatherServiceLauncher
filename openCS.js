// 此处存放打开exe程序的逻辑 --- 已在网页内写入 无需重复引用
  // 创建一个 Vue 实例
  new Vue({
    el: '#app',
    methods: {
      // 定义一个方法来打开应用程序
      open_miniapp() {
        console.log(navigator.userAgent)
        // 检测用户的设备是否是Windows系统
        if (/windows|win32/i.test(navigator.userAgent)){
          // 检测用户的浏览器是否能使用universalLink
          let openApp = false
          let userAgent = navigator.userAgent
          //判断是否 Firefox浏览器
          if (userAgent.indexOf("Firefox") > -1) {
            openApp = true
          }
          //判断是否 Chrome浏览器
          if (userAgent.indexOf("Chrome") > -1){
            openApp = true
          }
          //判断是否 Edge浏览器
          if (userAgent.indexOf("Edg") > -1){
            openApp = true
          }
          if (openApp){
            try {
              // 此处即为更改的用户注册表名称
              window.location.href="Webshell://"
            } catch (err) {
              console.log(err)
              alert("出错了，请手动打开应用程序！")
            }
          } else {
            alert("您的浏览器不支持自动打开exe，请手动打开程序！")
          }
        } else {
          alert("您的设备暂不支持运行小程序，请在Windows电脑上进行操作！")
        }
      }
    }
  })