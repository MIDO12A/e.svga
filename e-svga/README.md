#  @yy/svga 🎁 

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![npm website][npm-website-src]][npm-website-href]
[![npm github][npm-github-src]][npm-github-href]

## 支持平台 
+ pcyy 
+ web & h5 (ios & android)
+ x5

## 安装 
+ `.npmrc` 设置 `registry="https://npm-registry.yy.com"`
+ `npm add @yy/svga

## 使用 

```js
// 引用播放器
import {svgaPlayer} from '@yy/svga'
// 类型引入 
import type {SvgaPlayerType} from '@yy/svga'
// 实例化
const svga:SvgaPlayerType = await svgaPlayer({
    url:url,
    container:divElement,
    //事件监听 
    onStart:() => console.log('onStart'),
    onStop:() => console.log('onStop'),
    onResume:() => console.log('onResume'),
    onPause:() => console.log('onPause'),
    onEnd:() => console.log('onEnd'),
    onProcess: (args: any) => console.log('onProcess, args:', args),
    onLoopCount: (args: any) => console.log('onLoopCount, count:', args.count)
})
// 拓展事件
svga.addSwapImage //增加位图
svga.addSwapImageText //增加文字集合
svga.addSwapImageList // 增加图片集合
svga.addSwapSvga // 增加子SVGA
// 播放事件
svga.start()//开始
svga.destroy()//注销
svga.clear()//清除
svga.stop()//停止
svga.resume()//恢复
svga.pause()//暂停
```


[npm-version-src]: https://img.shields.io/npm/v/e-svga?style=flat&colorA=18181B&colorB=F0DB4F
[npm-version-href]: https://npmjs.com/package/e-svga
[npm-downloads-src]: https://img.shields.io/npm/dm/e-svga?style=flat&colorA=18181B&colorB=F0DB4F
[npm-downloads-href]: https://npmjs.com/package/e-svga
[npm-website-src]: https://img.shields.io/badge/website-priview-blue?style=flat&colorA=18181B&colorB=F0DB4F
[npm-website-href]: https://svga.empjs.dev/performance
[npm-github-src]: https://img.shields.io/badge/github-code-blue?style=flat&colorA=18181B&colorB=F0DB4F
[npm-github-href]: https://github.com/ckken/e-svga