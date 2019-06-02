

## 2.1 vue基础知识
参考文档：https://cn.vuejs.org/
### 环境搭建
> vue-cli@3 and Vue@2.5
- 安装： `npm install -g @vue/cli`
- 查看版本： `vue -V`
- 创建项目：`vue create yourProjectName`
- 安装依赖：`cd yourProjectName`
- 启动项目：`npm run serve`
### 模板语法
简单的说了一下
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
- 类
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
### 事件处理
### 深入了解组件
### 路由基础
### Vuex基础