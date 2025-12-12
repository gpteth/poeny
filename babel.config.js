module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  // 排除 web3 相关包的转译，避免 new 关键字被错误处理
  exclude: [/node_modules\/web3/],
};
