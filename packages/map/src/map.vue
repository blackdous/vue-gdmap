<template>
  <div class="bd-amap-container" :style="{...WHstyleProps}">
    <div class="bd-amap" :style="{...contentStyle}">
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { WHstyleProps } from './types'

/**
 * container style
 */
const containerStyle:WHstyleProps = {
  width: '100%',
  height: '100%',
}

/**
 * content style
 */
const contentStyle:WHstyleProps = {
  width: '100%',
  height: '100%',
  position: 'relative',
}

// 默认要加载的插件 配置
const defaultPluginOptions = {
  MapType: {
    showRoad: false,
    showTraffic: false,
    defaultType: 0,
  },
  ToolBar: {
    position: 'RB',
    noIpLocate: true,
    locate: true,
    liteStyle: true,
    autoPosition: false,
  },
  OverView: {},
  ControlBar: {},
}

export default defineComponent({
  name: 'BDMap',
  props: {
    key: {
      type: String,
      default: '5e3fd93ad36d3bd37412aa98a0cc3aef',
    },
    v: {
      type: String,
      default: '1.4.15',
    },
    protocol: {
      type: String,
      default: 'protocol',
    },
    useAmapUI: {
      type: Boolean,
      default: false,
    },
  },
  setup (props) {
    const initMap = () => {

    }
  },
})
</script>
