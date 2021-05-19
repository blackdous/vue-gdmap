interface WHstyleProps {
  width: string
  height: string
  position?: string
  [propName: string]: string
}

interface NativeDynamicProps {
  view: string
  viewMode: string

}

interface NativeStaticProps {
  protocol: string
  version: string
  useAMapUI: boolean
  amapkey: string
}

/**
 * use Amap.setStatus Dynamic setting
 */
interface StatusDynamicProps {
  animateEnable: boolean
  doubleClickZoom: boolean
  dragEnable: boolean
  isHotspot: boolean
  jogEnable: boolean
  keyboardEnable: boolean
  resizeEnable: boolean
  rotateEnable: boolean
  scrollWheel: boolean
  touchZoom: boolean
  zoomEnable: boolean
  touchZoomCenter: boolean
}

