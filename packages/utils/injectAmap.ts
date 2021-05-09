const DEATUL_CONFIG = {
  v: '1.4.15',
  key: '5e3fd93ad36d3bd37412aa98a0cc3aef',
  hostAndPath: 'webapi.amap.com/maps',
  plugins: [],
  callback: 'init_callback',
  useAmapUI: false,
  protocol: 'https:',
}

interface Config {
  v?: string
  key?: string
  protocol?: string
  hostAndPath?: string
  callback?: string
  plugins?: []
}

export default class LoadAmapApi {
  private config:Config
  public constructor(options) {
    this.config = { ...options, ...DEATUL_CONFIG }
    if (window['amapkey'] && !this.config.key) {
      this.config.key = window['amapkey']
    }
    if (!this.config.protocol.includes(':')) {
      this.config.protocol += ':'
    }
  }

  public createBaseScriptSrc(config: Config):string {
    return `${config.protocol}//${config.hostAndPath}?v=${config.v}&key=${config.key}&callback=${config.callback}`
  }
  public addPulginScriptSrc (src: string) {
    const { plugins } = this.config
    const pluginPrefix = /^AMap./
    const syncPluginsSrc = ''
    // plugins.forEach((plugin:string) => {
    //   const prefixName =
    // })
    return src
  }
  public createScriptDom(src: string) {

  }
}
