# Darkmode Safari

在 iOS Safari 和桌面浏览器中强制开启全局深色模式的用户脚本。

无需 Mac、Xcode 或 Apple 开发者账号。

## 原理

使用 CSS `filter: invert(1) hue-rotate(180deg)` 翻转页面颜色为深色。图片、视频等媒体元素再次翻转以保持原始颜色。

## 特性

- 任意网站即时深色模式
- `document-start` 阶段注入，无白色闪屏
- 图片、视频、Canvas 保持原始颜色
- 内置排除列表（YouTube、GitHub、Discord 等已有深色模式的网站）
- 兼容 **Userscripts**（iOS Safari）和 **Tampermonkey**（Chrome/Edge/Firefox）

## iPhone 安装教程（iOS Safari）

### 第一步：安装 Userscripts App

从 App Store 下载 [Userscripts](https://apps.apple.com/app/userscripts/id1463298887)（免费）。

### 第二步：启用 Safari 扩展

1. 进入 **设置 → Safari → 扩展**
2. 点击 **Userscripts** → 开启
3. 权限设置为 **允许** → **所有网站**

### 第三步：设置脚本目录

1. 打开 **Userscripts** app
2. 点击左下角目录图标，选择脚本存储位置
3. 建议在「我的 iPhone」或「iCloud 云盘」中新建一个 `Userscripts` 文件夹

### 第四步：下载脚本到 iPhone

**方式 A — Safari 直接下载（最简单）**

1. iPhone Safari 打开：[darkmode-safari.user.js](https://raw.githubusercontent.com/jasonzhouyu/darm_mode_safari/main/darkmode-safari.user.js)
2. 页面会显示 JavaScript 源码
3. 点击 **分享按钮**（方框+箭头）→ **存储到"文件"**
4. 选择第三步设置的 Userscripts 目录 → 点击 **保存**

**方式 B — 通过文件 App**

1. 打开 iPhone **文件** app
2. 如果脚本在 NAS/网络共享上：点右上角 `...` → **连接服务器** → 输入 NAS 地址
3. 或通过 **iCloud 云盘** 从电脑同步 `.user.js` 文件到 iPhone

**方式 C — 手动复制粘贴**

1. 在任意设备上打开脚本文件，复制全部内容
2. 通过 iMessage、邮件、AirDrop、备忘录等方式发送到 iPhone
3. 在 iPhone 打开 **Userscripts** app → 点 **+** → 粘贴代码 → 保存

### 第五步：验证

1. Safari 打开任意网站（如 `baidu.com`）
2. 点击地址栏 **拼图图标** → 确认 Userscripts 已激活
3. 页面应变为深色模式

## 桌面端安装（Chrome / Edge / Firefox）

1. 安装 [Tampermonkey](https://www.tampermonkey.net/)
2. 打开 [脚本文件](https://raw.githubusercontent.com/jasonzhouyu/darm_mode_safari/main/darkmode-safari.user.js) — Tampermonkey 会弹出安装提示
3. 点击 **安装**
4. 访问任意网站验证效果

## 自定义

### 排除特定网站

在脚本头部 `@exclude` 区域添加：

```javascript
// @exclude      *://example.com/*
```

### 临时关闭

- **iOS**：地址栏点拼图图标 → 关闭 Userscripts
- **桌面**：点击 Tampermonkey 图标 → 关闭该脚本

## 许可证

MIT
