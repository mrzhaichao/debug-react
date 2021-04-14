<!--
 * @Author: chaochao
 * @Date: 2021-04-14 17:03:31
 * @LastEditTime: 2021-04-14 17:03:31
-->

```ts
// react 组件类型
export const FunctionComponent = 0;
export const ClassComponent = 1;
export const IndeterminateComponent = 2; // Before we know whether it is function or class
export const HostRoot = 3; // Root of a host tree. Could be nested inside another node.
export const HostPortal = 4; // A subtree. Could be an entry point to a different renderer.
export const HostComponent = 5;
export const HostText = 6;
export const Fragment = 7;
export const Mode = 8;
export const ContextConsumer = 9;
export const ContextProvider = 10;
export const ForwardRef = 11;
export const Profiler = 12;
export const SuspenseComponent = 13;
export const MemoComponent = 14;
export const SimpleMemoComponent = 15;
export const LazyComponent = 16;
export const IncompleteClassComponent = 17;
export const DehydratedFragment = 18;
export const SuspenseListComponent = 19;
export const FundamentalComponent = 20;
export const ScopeComponent = 21;
export const Block = 22;
export const OffscreenComponent = 23;
export const LegacyHiddenComponent = 24;
```

```ts

    export const NoMode = 0b00000;
    export const StrictMode = 0b00001;
    // TODO: Remove BlockingMode and ConcurrentMode by reading from the root
    // tag instead
    export const BlockingMode = 0b00010;
    export const ConcurrentMode = 0b00100;
    export const ProfileMode = 0b01000;
    export const DebugTracingMode = 0b10000;

    // react 启动的三种模式
    //
    type RootTag = 0 | 1 | 2;
    enum Mode {
        LegacyRoot = 0;    // ReactDOM.render
        BlockingRoot = 1;  // ReactDOM.createBlockingRoot
        ConcurrentRoot = 2;// ReactDom.createRoot
    }

    //基础类 FiberRootNode
    class FiberRootNode {
        constructor (containerInfo, tag, hydrate) {
            // RootTag
            this.tag = tag;
            // dom
            this.containerInfo = containerInfo;
            this.pendingChildren = null;
            this.current = null;
            this.pingCache = null;
            this.finishedWork = null;
            this.timeoutHandle = noTimeout;
            this.context = null;
            this.pendingContext = null;
            // 服务端渲染相关
            this.hydrate = hydrate;
            this.callbackNode = null;
            this.callbackPriority = NoLanePriority;

            // 优先级相关
            this.eventTimes = createLaneMap(NoLanes);
            this.expirationTimes = createLaneMap(NoTimestamp);

            // 更新相关
            this.pendingLanes = NoLanes;
            this.suspendedLanes = NoLanes;
            this.pingedLanes = NoLanes;
            this.expiredLanes = NoLanes;
            this.mutableReadLanes = NoLanes;
            this.finishedLanes = NoLanes;

            this.entangledLanes = NoLanes;
            this.entanglements = createLaneMap(NoLanes);

            if (supportsHydration) {
                this.mutableSourceEagerHydrationData = null;
            }

            if (enableSchedulerTracing) {
                this.interactionThreadID = unstable_getThreadID();
                this.memoizedInteractions = new Set();
                this.pendingInteractionMap = new Map();
            }
            if (enableSuspenseCallback) {
                this.hydrationCallbacks = null;
            }
        }
    }

    class FiberNode {
        constructor (
            tag: WorkTag,
            pendingProps: mixed,
            key: null | string,
            mode: TypeOfMode,
        ) {
            // Instance
            this.tag = tag;
            this.key = key;
            this.elementType = null;
            this.type = null;
            this.stateNode = null;

            // Fiber
            this.return = null;
            this.child = null;
            this.sibling = null;
            this.index = 0;

            this.ref = null;

            this.pendingProps = pendingProps;
            this.memoizedProps = null;
            this.updateQueue = null;
            this.memoizedState = null;
            this.dependencies = null;

            this.mode = mode;

            // Effects
            this.flags = NoFlags;
            this.nextEffect = null;

            this.firstEffect = null;
            this.lastEffect = null;

            this.lanes = NoLanes;
            this.childLanes = NoLanes;

            this.alternate = null;
        }
    }
```

# react 中的数据结构
```ts

    type Update<State> = {|
        // TODO: Temporary field. Will remove this by storing a map of
        // transition -> event time on the root.
        eventTime: number,
        lane: Lane,

        tag: 0 | 1 | 2 | 3,
        payload: any,
        callback: (() => mixed) | null,

        next: Update<State> | null,
    |};

    // 更新队列 
    interface UpdateQueue {
        baseState: State,
        firstBaseUpdate: Update<State> | null,
        lastBaseUpdate: Update<State> | null,
        shared: SharedQueue<State>,
        effects: Array<Update<State>>
    }

```

# api 说明

1. ReactDOM.render 渲染流程

```ts

    // 未知数据
    RootTag

    // root._reactRootContainer = new ReactDOMBlockingRoot()
    // ReactDOMRoot.js
    interface ReactDOMBlockingRoot {
        _internalRoot: createRootImpl()
    }

    // 函数createRootImpl返回一个root
    type createRootImpl = Function:root

    function createRootImpl () {

        // 生成fiberRoot
        const root = createContainer();

        //

        return root;
    }

    // 返回 createFiberRoot 的调用
    function createContainer () {
        return createFiberRoot()
    }

    // 初始化 FiberRootNode 实例
    function createFiberRoot () {

        // 生成 FiberRootNode 实例
        const root = new FiberRootNode();

        // 初始化 current 树
        const uninitializedFiber = createHostRootFiber(tag);
        root.current = uninitializedFiber;
        uninitializedFiber.stateNode = root;

        initializeUpdateQueue(uninitializedFiber);

        return root;
    }


    // 初始化mode 并返回 FiberNode 实例
    function createHostRootFiber () {

        return createFiber()
    }

    // 生成 Fiber实例
    function createFiber () {
        return new FiberNode()
    }


    // 初始化 update queue
    function initializeUpdateQueue () {

    }
```
