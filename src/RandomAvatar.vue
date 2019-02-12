<template>
  <svg viewBox="0 0 160 160">
    <g>
      <circle
        v-for="(circle, index) in circles"
        :key="index"
        :cx="cx"
        :cy="cy"
        :r="radius"
        fill="transparent"
        :stroke="circle.color"
        :stroke-width="strokeWidth"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="circle.strokeDashOffset"
        :transform="circle.transform"
        shape-rendering="optimizeQuality"
      />
    </g>
  </svg>
</template>

<script>
import Random from './random'

export default {
  props: {
    seed: {
      default: "",
      type: String
    },
    colors: {
      default: () => ["#1b85b8", "#5a5255", "#559e83", "#ae5a41", "#c3cb71"], //({ lightness: 40, saturation: 80 })
      type: [Array, Object]
    },
    maxDivisions: {
      default: 4,
      type: Number
    },
    epsilon: {
      default: 0.01,
      type: Number
    }
  },

  data() {
    return {
      cx: 80,
      cy: 80,
      radius: 60,
      strokeWidth: 30
    }
  },

  computed: {
    circumference() {
      return 2 * Math.PI * this.radius
    },

    circles() {
      const rng = new Random(this.seed)
      const circumference = this.circumference - 1
      let angleOffset = -90
      let getColor = () => '#fff'

      if(this.colors instanceof Array) {
        getColor = () => rng.select(this.colors)
      } else if (this.colors instanceof Object) {
        getColor = () => rng.colorHSL(this.colors.saturation || 100, this.colors.lightness || 40)
      }

      return this.calcValues(rng, [], 1.0).map(x => {
        let resOffset = angleOffset
        angleOffset = x * 360 + angleOffset
        let strokeDiff = x * circumference
        return {
          percentage: x,
          transform: `rotate(${resOffset}, ${this.cx}, ${this.cy})`,
          color: getColor(),
          strokeDashOffset: circumference - strokeDiff
        }
      })
    },
  },

  methods: {
    calcValues(rng, result, start) {
      const subs = rng.integer(1, this.maxDivisions)
      const part = start / subs
      if (subs == 1 || part <= this.epsilon) {
        result.push(start)
        return result
      }

      for(var i = 0; i < subs; i++) {
        this.calcValues(rng, result, part)
      }

      return result
    },

    calculateStrokeDashOffset(percentage, circumference) {
      const strokeDiff = percentage * circumference
      return circumference - strokeDiff
    }

  }
}
</script>
