<!--
 * @Author: chaochao
 * @Date: 2021-04-15 15:19:35
 * @LastEditTime: 2021-04-15 15:19:35
-->

# React Event 系统初始

## 调用链路

### 入口
```ts
    // react-dom/src/events/DOMPluginEventSystem.js
    import * as SimpleEventPlugin from './plugins/SimpleEventPlugin';
    SimpleEventPlugin.registerEvents()
```

### 事件分类
```ts
     // react-dom/src/events/DOMEventProperties.js
    type discreteEventPairsForSimpleEventPlugin = []
    type userBlockingPairsForSimpleEventPlugin = []
    type continuousPairsForSimpleEventPlugin = []

    // 事件格式化 符合react的形式  click => OnClick
    function registerSimplePluginEventsAndSetTheirPriorities () {

    }

    export const topLevelEventsToReactNames = new Map();

    // 保存所有的Dom原生事件 => Set保证事件的唯一性
    export const allNativeEvents = new Set();

    // react 事件与dom事件的映射
    export const registrationNameDependencies = {};
```