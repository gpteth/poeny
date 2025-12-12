const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  lintOnSave: false,
  devServer: {
    client: {
      overlay: false // 关闭错误弹窗
    }
  },
});
