// import getType from ''
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
  useAmapUI?: boolean | (() => void)
}

export default class LoadAmapApi {
  private config:Config
  private amapuiInited: boolean

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
    plugins.map((plugin:string) => {
      const prefixName = (pluginPrefix.test(plugin)) ? plugin : 'AMap.' + plugin
      return prefixName
    })
    return src + '&plugin=' + plugins.join(',')
  }

  public createScriptDom(src: string) {
    const scriptDom = document.createElement('script')
    scriptDom.type = 'text/javascript'
    scriptDom.async = true
    scriptDom.defer = true
    scriptDom.src = src
    return scriptDom
  }

  private asyncLoadMainScript() {
    if (window.AMap) {
      return Promise.resolve()
    }
    const { config } = this
    let srcStr = this.createBaseScriptSrc(config)

    if (config.plugins.length) {
      srcStr = this.addPulginScriptSrc(srcStr)
    }
    const currentScriptDom = this.createScriptDom(srcStr)
    const loadMainPromise = new Promise<void>(resolve => {
      window[config.callback] = () => {
        resolve()
        delete window[config.callback]
      }
    }).catch(error => {
      console.error(error)
    })

    document.body.appendChild(currentScriptDom)

    return loadMainPromise
  }

  private asyncLoadUIScript () {
    if (window.AMapUI) {
      return Promise.resolve()
    }
    const { config } = this
    const currentScriptDom = this.createScriptDom(`${config.protocol}//webapi.amap.com/ui/1.0/main-async.js`)
    const loadUIPromise = new Promise<void>(resolve => {
      currentScriptDom.onload = () => {
        resolve()
      }
    }).catch(error => {
      console.error(error)
    })

    document.body.appendChild(currentScriptDom)
    return loadUIPromise
  }

  private loadApi () {
    if (window) {
      return null
    }
    const { config, amapuiInited } = this
    const loadMainPromise = this.asyncLoadMainScript()
    let loadUIPromise
    if (config.useAmapUI) {
      loadUIPromise = this.asyncLoadUIScript()
    }

    return new Promise<void>(resolve => {
      loadMainPromise.then(() => {
        if (config.useAmapUI && loadUIPromise) {
          loadUIPromise.then(() => {
            if (window.initAMapUI && !amapuiInited) {
              window.initAMapUI()
              // if (getType(config.useAmapUI) === 'Function') {
              // }
              this.amapuiInited = true
            }
          })
        } else {
          resolve()
        }
      })
    })
  }
}
