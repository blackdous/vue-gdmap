declare module '*.vue' {
  import { App, defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent> & {
    // eslint-disable-next-line @typescript-eslint/method-signature-style
    install(app: App): void
  }
  export default component
}

declare type Nullable<T> = T | null;

declare type CustomizedHTMLElement<T> = HTMLElement & T

declare interface Indexable<T> {
  [key: string]: T
}

declare type Hash<T> = Indexable<T>

declare type TimeoutHandle = ReturnType<typeof global.setTimeout>

declare type ComponentSize = 'large' | 'medium' | 'small' | 'mini'
