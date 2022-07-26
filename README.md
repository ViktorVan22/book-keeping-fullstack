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

（因为忘了即使提交，所以补充个信息）
账单列表页完成，涉及到的内容：

- 无限加载、下拉刷新
- 公用组件提取，如弹窗组件、账单组件
- react 降级到 17 版本，因为`zarm`不能很好适配 18
- `dayjs`库相比`moment`库更适合移动端轻量化的要求
- `forwardRef`搭配`useRef`使用
