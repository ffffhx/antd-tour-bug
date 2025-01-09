## 所有代码在App.js文件中，在152行会出现bug，如果改成151行，不会。个人推测可能是因为Tour组件的steps属性对传入的参数做了某些优化，导致传入过多的时候会失效

### 问题描述

当 `Tour` 组件的 `steps` 属性传入变量较多时(App.js组件的152行)，出现以下问题：

1. 首先点击屏幕中间上方的蓝色按钮，然后会出现三个小按钮。
2. 点击 **策略研究**（或者 **数据资源**）按钮，然后走完这7步引导。
3. 然后点击 **用户管理** 的按钮，**此时不会出现引导**，即用户管理的引导失效。

代码如下：
<Tour steps={ !ifGuideDataSources ? dataSourcesSteps : !ifGuideUserManage ? userManageSteps : strategySteps } />


### 解决方案

// 在 Tour 组件中传入统一的 step
  <Tour steps={step} />