<template>
  <svg
    class="icon"
    xmlns="http://www.w3.org/2000/svg"
    :width="sizes[size]"
    :height="sizes[size]"
    viewBox="0 0 54 54"
    fill="none"
  >
    <rect y="6" width="48" height="48" :fill="colors[color]" />
    <g filter="url(#filter0_b_0_17)">
      <rect x="6" width="48" height="48" :fill="colors[color]" fill-opacity="0.35" />
    </g>
    <defs>
      <filter
        id="filter0_b_0_17"
        x="-6"
        y="-12"
        width="72"
        height="72"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="6" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_17" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_0_17"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</template>

<script lang="ts" setup>
interface Colors {
  [key: string]: string
}

interface Sizes {
  [key: string]: number
}

defineProps({
  color: {
    default: 'green'
  },
  size: {
    default: 'small'
  }
})

const colors: Colors = {
  green: '#7FAA65',
  brown: '#D9BB98',
  purple: '#656CAA'
}

const sizes: Sizes = {
  small: 54,
  medium: 89,
  large: 130
}
</script>

<style scoped>
.icon {
  display: inline-block;
}
</style>
