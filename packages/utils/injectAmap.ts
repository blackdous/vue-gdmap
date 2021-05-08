const DEATUL_CONFIG = {
  v: '1.4.15',
  key: '5e3fd93ad36d3bd37412aa98a0cc3aef',
  hostAndPath: 'webapi.amap.com/maps',
  plugins: [],
  callback: 'init_callback',
  useAmapUI: false,
  protocol: 'https',
}

interface Config {
  v?: string
  key?: string
}

export default class LoadAmapApi {
  private config:Config
  public constructor(options) {
    this.config = { ...options, ...DEATUL_CONFIG }
    // console.log('this.config: ', this.config)
  }
}
