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

<script>
import avatar from 'vue-random-avatar'

export default {
  components: { avatar },
  data() {
    return {
      username: "Byteslicer"
    }
  }
}
</script>
```

## Props

Play around with `epsilon` and `max-mivisions` props to find something that you like

| Name            | Description                                                                                               | Type            |
| --------------- | --------------------------------------------------------------------------------------------------------- | --------------- |
| `seed`          | String used for seeding the random generator                                                              | `String`        |
| `colors`        | `Array` of valid CSS colors or `Object` with `{ saturation: 100, lightness: 40 }` for hsl random color    | `Array|Object`  |
| `epsilon`       | Recursion stops if the subdivision is getting smaller then epsilon. Default: `0.01`                       | `Number`        |
| `max-divisions` | Maximum random number of cell splitting that could be generated. Default: `4`                             | `Number`        |

## License

[MIT](http://opensource.org/licenses/MIT)
