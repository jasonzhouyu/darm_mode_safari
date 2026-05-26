# Darkmode Safari - Userscript

## 方案

使用 [Userscripts](https://apps.apple.com/app/userscripts/id1463298887)（iOS App Store 免费应用）在 Safari 中运行自定义 JS，强制网页深色模式。同时兼容 Tampermonkey（Chrome/Edge/Firefox）。

**不需要 Mac / Xcode / Apple Developer 账号。**

## 架构

```
darkmode-safari/
├── darkmode-safari.user.js   # 主脚本（Userscripts + Tampermonkey 通用）
├── manifest.json              # [归档] 原 Web Extension 配置
├── background.js              # [归档] 原 Service Worker
├── content.js                 # [归档] 原注入脚本
├── popup.html                 # [归档] 原开关 UI
├── popup.js                   # [归档] 原 popup 逻辑
└── icons/
```

## 核心逻辑

CSS filter 翻转方案：
- `html` 应用 `filter: invert(1) hue-rotate(180deg)`
- 图片/视频/canvas/iframe 再次翻转，恢复原始颜色
- `@run-at document-start` 在 DOM 解析前注入，避免白色闪屏
- 内置排除列表：YouTube、GitHub、Discord 等已有深色模式的网站

## 安装

### iOS Safari

1. App Store 下载 **Userscripts**（免费）
2. iPhone 设置 → Safari → 扩展 → 启用 Userscripts → 授权「所有网站」
3. 打开 Userscripts app → 点击左下角设置脚本存储目录（推荐 iCloud Drive）
4. 将 `darkmode-safari.user.js` 放入该目录
5. Safari 打开任意网页 → 点地址栏拼图图标 → 确认 Userscripts 已激活

### Windows / 桌面端测试

1. Edge 或 Chrome 安装 [Tampermonkey](https://www.tampermonkey.net/) 扩展
2. Tampermonkey 面板 → 新建脚本 → 粘贴 `darkmode-safari.user.js` 全文 → 保存
3. 访问任意白色背景网站验证效果

## 自定义

### 排除特定网站

在脚本头部 `@exclude` 区域添加：

```
// @exclude      *://example.com/*
```

### 临时关闭

- iOS: Safari 地址栏 → 拼图图标 → 关闭 Userscripts
- 桌面: Tampermonkey 图标 → 关闭该脚本
