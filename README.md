<img height="200px" width="100%" align="center" src="https://raw.githubusercontent.com/byteslicer/vue-random-avatar/master/example.svg?sanitize=true">

# vue-random-avatar

Generate random avatars based on username

## Install

- **yarn** install: `yarn add vue-random-avatar`
- **npm** install: `npm install vue-random-avatar --save`

## How to use

Import and register it in your component

```vue
<template>
  <div>
    <avatar
      :seed="this.username"
      :colors="['#e9d758', '#297373', '#ff8552', '#e6e6e6', '#39393a']"
      :epsilon="0.1"
      :max-divisions="3"
    />
  </div>
</template>

import avatar from 'vue-random-avatar'

export default {
  components: { avatar }
  data() {
    return {
      username: "Byteslicer"
    }
  }
}
```
