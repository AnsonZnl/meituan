<!-- TOC -->

- [2.1 vue基础知识](#21-vue基础知识)
    - [环境搭建](#环境搭建)
    - [模板语法](#模板语法)
    - [计算属性](#计算属性)
    - [类与样式](#类与样式)
    - [条件&列表渲染](#条件列表渲染)
    - [事件处理](#事件处理)

<!-- /TOC -->


## 2.1 vue基础知识
参考官方文档：https://cn.vuejs.org/
### 环境搭建
> vue-cli@3 and Vue@2.5
- 安装： `npm install -g @vue/cli`
- 查看版本： `vue -V`
- 创建项目：`vue create yourProjectName`
- 安装依赖：`cd yourProjectName`
- 启动项目：`npm run serve`
### 模板语法
- `v-model=>{{ msg }}`
- `v-html`
- `v-bind => :`
- `v-if`（渲染DOM）-`v-show`(display:none;)
- `v-on => @`
- 自定义指令`Vue.directive`（当使用method处理麻烦时，就使用自定义指定）

### 计算属性

> 具有依赖关系的数据监听，使用计算属性 computed
```  
computed:{
    c:function(){
      return this.a - this.b;
    }
  }
```

### 类与样式
- class类
   - `<p :class="[a1,a2]">Hello World</p>`,在data中声明`a1: red, a2: blue`,即可给p添加`class='red blue'`类名
   - ` <p :class="{red : a1, blue: a2}">{{c}}</p>`,在data中声明`a1: true, a2: false`,这样只会添加red类名。
   - `<p :class="obj">11</p>`在data中声明`obj:{red: true ,blue: false}`,这样只会添加red类名，**比较推荐**
数组语法 适用于较少类名
对象语法 使用与较多类名
### 条件&列表渲染
- v-if
- v-show
- v-for
- 分组 
- v-if和v-show的区别
    - 相同点：v-if与v-show都可以动态控制dom元素显示隐藏
    - 不同点：v-if显示隐藏是将dom元素整个添加或删除，而v-show隐藏则是为该元素添加css--display:none，dom元素还在。
### 事件处理
```javaScript
//v-on => @
<button @click="add(2,$event)">{{count}}</button>
//参数 加 元素对象
- 事件修饰符 阻止默认事件 @click.stop='child' (stop 阻止单击事件继续传播)
- 按键修饰符 
```javaScript
// 只有在 `key` 是 `Enter` 时调用 `vm.submit()`
<input v-on:keyup.enter="log">
//摁下 enter时执行log方法
```
### 生命周期

![](https://cn.vuejs.org/images/lifecycle.png)
在 beforeCreate 钩子函数调用的时候，是获取不到 props 或者 data 中的数据的，因为这些数据的初始化都在 initState 中。

然后会执行 created 钩子函数，在这一步的时候已经可以访问到之前不能访问到的数据，但是这时候组件还没被挂载，所以是看不到的。

接下来会先执行 beforeMount 钩子函数，开始创建 VDOM，最后执行 mounted 钩子，并将 VDOM 渲染为真实 DOM 并且渲染数据。组件中如果有子组件的话，会递归挂载子组件，只有当所有子组件全部挂载完毕，才会执行根组件的挂载钩子。

接下来是数据更新时会调用的钩子函数 beforeUpdate 和 updated，这两个钩子函数没什么好说的，就是分别在数据更新前和更新后会调用。

另外还有 keep-alive 独有的生命周期，分别为 activated 和 deactivated 。用 keep-alive 包裹的组件在切换时不会进行销毁，而是缓存到内存中并执行 deactivated 钩子函数，命中缓存渲染后会执行 actived 钩子函数。

最后就是销毁组件的钩子函数 beforeDestroy 和 destroyed。前者适合移除事件、定时器等等，否则可能会引起内存泄露的问题。然后进行一系列的销毁操作，如果有子组件的话，也会递归销毁子组件，所有子组件都销毁完毕后才会执行根组件的 destroyed 钩子函数。


### 深入了解组件
- props（组件参数传递）
- slot（插槽在组件在组件抽象设计中的应用）
- 自定义事件（父子组件的通信方式）
- 组件中data必须是一个函数，函数返回的必须是一个对象。
- 组件下根目录下必须有一个根元素
**父子组件的通信方式**
- 父组件传递给子组件用props
parent.vue:
```
<template>
  <div id="app">
    <Com :age="agez"/>
  </div>
</template>

<script>
import Com from './components/com'
export default {
  name: 'app',
  components: {
    Com
  },
  data() {
    return {
      agez: 14
    }
  }
}
</script>

```
child.vue:
```
<template>
    <div class="com">
       Child Component -{{age}}
    </div>
</template>
<script>
export default {
    props: {
        age: Number
    },
    data(){
        return{
            name: 'com'
        }
    }
}
</script>
```
- 子组件给父组件传值用自定义事件绑定
child.vue:
```
// 子组件
<template>
  <header>
    <h1 @click="changeTitle">{{title}}</h1>//绑定一个点击事件
  </header>
</template>
<script>
export default {
  name: 'app-header',
  data() {
    return {
      title:"Vue.js Demo"
    }
  },
  methods:{
    changeTitle() {
      this.$emit("titleChanged","子向父组件传值");//自定义事件  传递值“子向父组件传值”
    }
  }
}
</script>

```
parent.vue:
```
// 父组件
<template>
  <div id="app">
    <app-header v-on:titleChanged="updateTitle" ></app-header>//与子组件titleChanged自定义事件保持一致
   // updateTitle($event)接受传递过来的文字
    <h2>{{title}}</h2>
  </div>
</template>
<script>
import Header from "./components/Header"
export default {
  name: 'App',
  data(){
    return{
      title:"传递的是一个值"
    }
  },
  methods:{
    updateTitle(e){   //声明这个函数
      this.title = e;
    }
  },
  components:{
   "app-header":Header,
  }
}
</script>

```
- slot 插糟 
> 在父组件中 动态的给子组件添加元素 ，使用场景：在抽象设计组件，达到动态改变组件中用途。
**在子组件中 给slot标签指定一个name值，在父组件中，给插槽的元素添加一个一样的slot值。**
child.vue:
```
<template>
  <header>
    <slot name="top"></slot>
    <h1>hello world</h1>
    <slot name='bottom'></slot>
  </header>
</template>
```
parent.vue:
```
<template>
    <div>
       <Child>
           <p slot='top'>上面</p>
           <p slot="bottom">下面</p>
       </Child> 
    </div>
</template>
<script>
import Child from './child.vue'
export default {
    components:{
        Child
    },
    data(){
        return{
            world: 'world',
        }
    }
}
</script>
```
### 路由基础
- https://router.vuejs.org/zh/
- 安装 `npm install vue-router --save`
- 配置 
- 配置实例化
- 挂载实例到Dom <router-wiew></router-view>
- 路由切换 <router-link>
### Vuex基础
官方教程：https://vuex.vuejs.org/zh/    
流程图：
![Vuex](https://vuex.vuejs.org/vuex.png)
> 多个组件 共享数据
- `mutations` (操作)定义如何去改变数据 不触发 需要去action触发
- `action` 确定什么时候去改变数据，改变时 使用 commit
- 总结：数据在state中，数据改变需要定义mutation，action是定义了何时去做改变数据的行为

Vue Components--Dispach-->Actions--Commit-->Mutations--mutate-->State--Render-->Vue Components

安装：`npm i vuex`
创建store.js ，定义state mutations actions 并导出，在mian.js中引用。
- mapActions 是一个辅助函数，把mutation映射到methods中
- 不同组件中维护不同的数据，可以新建store文件，然后新建models和index.js，来维护两个不用的数据
- vuex 传参：事件传参，事件添加参数add(2)-->actions添加参数-->mutations添加参数