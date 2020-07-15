# lecture-vuerello

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 라우팅

어플리케이션의 라우팅은 사용자의 요청 URL을 해석하여, 그에 맞는 콘텐츠를 보여주는등의 일련의 행위를 수행하기위한 기능을 의미한다.

vue 개발환경에서는 서버에서 이를 수행하지않고, 클라이언트에서 `window.location.pathname` 등을 해석하여 그에 맞는 컴포넌트를 렌더링 하도록 하는데 이것을 **클라이언트 라우팅**이라고 부른다.

### 간단한 라우팅 코드 작성하기

우선 다음과 같은 코드로 pathname을 통한 간단한 라우팅 기능을 구현하여보겠다.

``` javascript
// main.js

import Vue from 'vue'
import App from './App.vue'

const Login = { template: '<div>Login Page</div>' }

const routes = {
  '/': App,
  '/login': Login
}

new Vue({
  el: '#app',
  computed: {
    VueComponent() {
      return routes[window.location.pathname] || { template: '<div>Page not found</div>'}
    }
  },
  render(h) {
    return h(this.VueComponent)
  }
})

```

routes란 객체 모델을 통해 window.location.pathname을 분석하여 미리 정의된 App, Login 컴포넌트에 라우팅 될 경우 그에 해당하는 컴포넌트를 보여준다.

루트 페이지로 접속할 경우 App을 렌더하고, /login으로 접속할 경우 Login을 렌더한다. 아무것도 해당하지 않을 경우 Page not found를 보여준다.

이처럼 간단하게 라우팅 기능을 구현할 수 있지만 querystring을 분석해야한다거나, 동적 라우팅을 구현하기 위해서는 `vue-router` 란 플러그인을 사용하는것이 간편하다.

### vue-router




