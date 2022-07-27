# book-keeping-fullstack

前后端分离的记账项目，项目可在移动端供个人使用。  
该项目旨在学习掌握前后端分离开发技能，体验从 0 到 1 的开发流程，所以项目目标是快速落地，实现个人基本日常使用即可。  
后续有余力的话会使用`TypeScript`重写。

组件库：`zarm`

前端：`React` + `JSX`

后端：`egg`

前后端交互：`axios`

数据库：`mysql`

## Installation

`yarn install`

## Development

`yarn dev`

## Build

`yarn build`

## Notes

（因为忘了及时提交，所以补充个信息）
账单列表页完成，涉及到的内容：

- 无限加载、下拉刷新
- 公用组件提取，如弹窗组件、账单组件
- react 降级到 17 版本，因为`zarm`不能很好适配 18
- `dayjs`库相比`moment`库更适合移动端轻量化的要求
- `forwardRef`搭配`useRef`使用

（同样忘了及时提交）
个人中心页面完成，涉及到的内容：

- 从后端获取用户信息，提供用户信息 CRUD 功能
- 提供 logout 功能
- 能够上传不超过 200KB 的图片文件作为头像

## 后续更新计划：

- 使用 TypeScript 重构
- 使用状态管理钩子优化前端代码：先 React Hook，再 Redux
- 优化后端代码
- 优化前端设计
- 补充新功能
