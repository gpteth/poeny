module.exports = {
    plugins: {
      'postcss-px-to-viewport': {
        // 设计稿的宽度
        viewportWidth: 375, 
        // 单位精度，即保留的小数位数
        unitPrecision: 5, 
        // 要转换的单位
        viewportUnit: 'vw', 
        // 不需要转换的类名
        selectorBlackList: [], 
        // 小于该数值的px不转换
        minPixelValue: 1, 
        // 是否允许在媒体查询中转换px
        mediaQuery: false 
      }
    }
  };