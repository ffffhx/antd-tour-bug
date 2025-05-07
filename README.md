### 问题描述

当 `Tour` 组件的 `steps` 属性传入变量较多时(App.js组件的139行)，出现以下问题：

1. 首先点击屏幕中间上方的蓝色按钮，然后会出现三个小按钮。
2. 点击 **stepGroup1**（或者 **stepGroup2**）按钮，然后走完这7步引导。
3. 然后点击 **stepGroup3** 的按钮，**此时不会出现引导**，即用户管理的引导失效。
4. 如果第一次点击的 **stepGroup1** 或者 **stepGroup2** 小于等于3步就不会有这个问题
代码如下：
<Tour steps={ !ifDoneStepGroup1 ? stepGroup1 : !ifDoneStepGroup2 ? stepGroup2 : stepGroup3 } />


