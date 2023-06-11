---
layout: cover
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
growSize: 1.5
---

<div mt--2>
<div flex justify-between items-center pr-20>

<h1 flex="~ col">
<div flex gap-3 font-mono>UnoCSS </div>
<div flex="~ gap3" items-center>快速构建页面</div>
<div flex="~ gap3" items-center c="$vp-c-brand">最佳实践</div>
</h1>
<div flex justify-center items-center relative>
  <div id="logo" absolute top='1/2' left='1/2' translate='-1/2'  w-60 h-60  hover-op-0 transition duration-1000
bg-gradient-to-r shape="[-45deg]" from="$vp-c-brand" to="#009ff7" blur-120px rd-full> 
  </div>
  <div text-40 i-logos-unocss />
</div>

</div>
<div uppercase tracking-widest op50>
Chris
</div>
</div>

<div abs-bl mx-13 my-12 flex="~ col" text-sm text-left>
  <div>Pursche Share Meeting</div>
  <div text-sm opacity-50>June 14th, 2023</div>
</div>

---
layout: intro
growX: 10
growY: 90
style: 'padding-left: 8rem;'
---

# Chris

<div class="leading-10 opacity-80">
Team member of UnoCSS, Elk<sub bottom-0 ml-1>farm</sub>.<br>
Creator of Onu UI.<br>
Vite、Vue、Nuxt etc. ecological contributors.<br>
</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center>
  <div i-ri-user-3-line op50 ma text-xl/>
  <div><a href="https://zyob.top" target="_blank" class="border-none! font-300">zyob.top</a></div>
  <div i-ri-github-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/antfu" target="_blank" class="border-none! font-300">zyyv</a></div>
  <div i-ri-twitter-line op50 ma text-xl ml4/>
  <div><a href="https://twitter.com/chris_zyyv" target="_blank" class="border-none! font-300">chris_zyyv</a></div>
</div>

<img src="https://avatars.githubusercontent.com/u/42139754?v=4" rounded-full w-35 abs-tr mt-32 mr-40/>

<div flex="~ gap2">

</div>

---
layout: quote
---

# What is UnoCSS ?

<!-- <v-clicks> -->

- [Reimagine Atomic CSS](https://antfu.me/posts/reimagine-atomic-css-zh)
- [Why UnoCSS](https://unocss.dev/guide/why)

<!-- </v-clicks> -->

---
layout: center
growX: 50
growY: 120
growSize: 1.5
---

# Features

<v-clicks>

- 完全可定制 - 没有核心实用程序，所有功能都是通过预设提供的
- 没有解析，没有 AST，没有扫描，它是即时的（比 Windi CSS 或 Tailwind JIT 快 5 倍）
- ~6kb min+brotli - 零依赖和浏览器友好
- Cli、快捷方式、变体组、基于打包工具的转换器
- 属性模式 - 在属性中对实用程序进行分组
- 纯 CSS 图标- 将任何图标用作单个类
- CSS 指令 - 在 CSS 中使用 @apply、@screen、theme() 指令重用 utils
- 编译模式 — 在构建时将多个类合成一个
- Inspector - 以交互方式检查和调试
- CSS-in-JS Runtime - 使用 UnoCSS 和一行 CDN 导入
- VS Code 扩展

</v-clicks>

---
layout: default
growX: -10
growY: 50
growSize: 0.75
---
# 社区集成

UnoCSS 集成了各种框架/工具：

<Integrations />

<p v-click='2'>

你可以在 [https://unocss.dev/guide/#examples](https://unocss.dev/guide/#examples) 上在线试玩

</p>

---
layout: default
growX: 50
growY: 100
growSize: 1.5
clicks: 5
---

# 如何使用

<div v-show="$slidev.nav.clicks < 1" bg="[url(/howToUse.png)]" w-50 h-50 bg-cover absolute right-10 top-10 animate-pulse /> 

<div flex children-flex-1 gap-10 v-click='1' v-show="$slidev.nav.clicks === 1" >

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
  ]
})
```


```ts
// uno.config.ts
import { 
  defineConfig,
  presetUno,
  presetAttributify,
  PresetIcons,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    PresetIcons(),
  ]
})
```

```ts
// main.ts
import "uno.css"

// 样式重置（可选）
import "@unocss/reset/tailwind.css" 
```

</div>

<div v-click='2'>
Demo 展示
</div>

<div flex children-flex-1 gap-10>


<div v-click='3'>

```html
<!-- Button Componetent -->
<template>
  <button 
    w-full h-12 rounded transition duration-350
    hover-bg-op-90
    active="op-80 scale-105"
  >
    <slot />
  </button>
</template>
```

</div>

<div v-click='4'>

```html
<template>
  <div flex="~ items-center" children-flex-1>
    <Button bg="#d5001c" text-white>Pursche</Button>
    <Button 
      b="~ #d5001c" text="#d5001c" bg-white
      hover="bg-#d5001c text-white"
    >
      Pursche
    </Button>
  </div>
</template>
```

</div>

</div>

<div v-click='5' mt-10 px-6 py-4 b="~ $vp-c-brand" rd-xl h-fit bg-white bg-op-400>
  
  <BaseUseDemo /> 

</div>


---
layout: fact
growX: 0
growY: 50
---

<h1 class="text-4xl!">～ 纵享丝滑 ～ ？</h1>

<div bg="[url(/smooth.png)] cover" w-40 h-40 absolute left='1/2' translate="x--1/2" mt-4></div>

---
layout: two-cols
growX: -10
growY: -10
clicks: 4
---

# Rules
Uno 大多数的工作能力取决于你的规则

<div class="number-bg">R</div>

<v-clicks>

- Static Rules 静态规则
- Dynamic Rules 动态规则
- 规则优先级
- 高级用法

</v-clicks>

::right::

<div v-show="$slidev.nav.clicks === 1">

```ts
{
  rules: [
    ['flex', { display: 'flex' }],
    ['inline-flex', { display: 'inline-flex' }],
    ['flex-inline', { display: 'inline-flex' }],
    // ...
  ]
}
```

</div>

<div v-show="$slidev.nav.clicks === 2">

```ts
{
  rules: [
    [/^m-(\d+)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
    [/^p-(\d+)$/, match => ({ padding: `${match[1] / 4}rem` })],
  ]
}
```

</div>

<div v-show="$slidev.nav.clicks === 3">
<p mb-4>解析规则时，规则顺序排名靠后的优先级越高！</p>

```ts
{
  rules: [
    [/^m-(.*)$/, ([, d]) => ({ margin: d })],
    [/^m-(\d+)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
    // ...
  ]
}
```

<p font-mono>

-> [Playground](https://unocss.dev/play/?html=DwEwlgbgBAxgNgQwM5ILwCIC2BaAjABnQD4AoE4AenAlKA&config=JYWwDg9gTgLgBAbzgEwKYDNgDtUGEJaYDmcAvnOlBCHAOQCuWEAxgM6u0BQnqAHpLBQYAhvQA28NJhz5CwIgAoEnOHCjjUrAFxwA2itV6A9AD0QAWgUA6AFQBKACRGANHAW7XyALp24AXgA%2BNyQQYSgibB1kMjsvZwNVXVMLBQAdZABqRxc3DxQffyClOFDwyLgAAwcEaKM4ABZSKFQQCpi4gw7SO04gA&css=Q&options=N4XyA)

</p>

</div>

<div v-show="$slidev.nav.clicks === 4" font-mono>

大多时候你不会用到，除非真的有除非🤣。仅做了解

-> [Playground](https://unocss.dev/play/?html=DwEwlgbgBAxgNgQwM5ILwCIBmB7b6B8AUFFKJLIihjAK5IAu2AtgLT0CmDBAwnY01ABKNOJ2AB6cBCIky0eMjToAhLQbM2negQCSAOwgI4YEFF7qBw0UglSityESA&config=JYWwDg9gTgLgBAbzgEwKYDNgDtUGEJaYDmANHDBAKIDOAxgIZirIDKqANqrRVHAL5x0UCCDgByAK5YItatTEAoBagAekWCgz0J7eGkw58hYEQAUCBXDhQdqagC44AbUtXnrt3AD0APVoTqChAAWlMAOgBqAEoAEi8SDzdTJzIsehBUAF0yJCh6AHc2Tm5oMn8oKFQsGCKuHjIAN3ooYHpqgAk25E4oajIYAAtUDP4ouABeAD5ERM8vLxRgOmbkOBAlkHoYWiHVm05qWbdgdDhTNIyw7Fp2CTRqUzFqEVRB7CIxKLHKmAkoLCUnjmCxOcAAnhAJHB8m0YGQIVCGFhFtR6AAjTjkIZwJotWHUQTQLFLay2I5WUGmXGtDpdHrUMKcLBEQbfV5-AFAty0AiBODUDh1InjchUZZMViCkpQUx5QpSnhRcneBY-Dlwej8mAtZlwbCBVD0VYQU5tOAQNEAKzqyrV-zgAAMFDEEALijwBBYrOgCDBgtRgAAvVCOF2DYaoMI%2B6osIOR6ggPgAbgUfAUXgAVODIXAkXABvQGqg1joYMAwJj9nY4BmvM7XQroHx7PZ6OgYKheF7c76qjBHGI2x2oGIU2moxAIHBpi63UKoJ7XDz2NBHJVkGP01miRlkK04ABHCSd4DV2sKAACu-3pnWWGC%2BWAyEGoYQ4cuaMq9AA1pBsDAGQTPgxm7WdGwXGZPGjP0A2DV930jaDY2DMIgJTKw0zTJ0uT4BJPGyVwCOAhQgA&css=Q&options=N4XyA)

</div>

---
layout: two-cols
growX: 50
growY: 0
---

# Shortcuts
你可以包装使用 Shortcut 来简化你的原子化 CSS<br/>
就像书写 class='xxx' 那么简单

<div class="number-bg">S</div>

<v-clicks>

- Static Shortcuts 静态快捷方式
- Dynamic Shortcuts 动态态快捷方式
- Nested Shortcuts 嵌套快捷方式
- ExpandGroup
- Tips

</v-clicks>

::right::

<div v-show="$slidev.nav.clicks === 1">

```ts
{
  shortcuts: {
    'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  }
}
```
<br/>
```html
<button btn btn-green w-fit>Button</button>
```
<br/>
<button btn btn-green w-fit>Button</button>

</div>

<div v-show="$slidev.nav.clicks === 2">

```ts
{
  shortcuts: [
    [/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`],
  ]
}
```

<br/>

```html
<button btn-red w-fit>Button</button>
<button btn-teal w-fit>Button</button>
<button btn-blue w-fit>Button</button>
```

<br/>

<div space-x-2>
<button btn-red w-fit>Button</button>
<button btn-teal w-fit>Button</button>
<button btn-blue w-fit>Button</button>
</div>

</div>


<div v-show="$slidev.nav.clicks === 3">

```ts
{
  shortcuts: [
    ['btn', 'py-2 px-4 font-semibold rounded-lg shadow-md',]
    [/^btn-(.*)$/, ([, c]) => `btn bg-${c}-400 text-${c}-100`],
  ]
}
```

<br/>

```html
<button btn-red w-fit>Button</button>
<button btn-teal w-fit>Button</button>
<button btn-blue w-fit>Button</button>
```

<br/>

<div space-x-2>
<button btn-red w-fit>Button</button>
<button btn-teal w-fit>Button</button>
<button btn-blue w-fit>Button</button>
</div>

</div>

<div v-show="$slidev.nav.clicks === 4">

```ts
{
  shortcuts: [
    ['btn', 'py-2 px-4 font-semibold rounded-lg shadow-md',]
    [/^btn-(.*)$/, ([, c]) => `hover-(bg-black b-(~ ${c}) text-(${c} xl))  btn bg-${c}-400 text-${c}-100`],
  ]
}
```

<br/>

```html
<button btn-red w-fit>Button</button>
<button btn-teal w-fit>Button</button>
<button btn-blue w-fit>Button</button>
```

<br/>

<div space-x-2>
<button btn-expand-red w-fit>Button</button>
<button btn-expand-teal w-fit>Button</button>
<button btn-expand-blue w-fit>Button</button>
</div>

</div>

<div v-show="$slidev.nav.clicks >=  5">

```ts {all|2-3|5-20|6-11|13-18|23-24|33} {maxHeight:'400px'}
async expandShortcut(input: string, context: RuleContext<Theme>, depth = 5): Promise<[ShortcutValue[], RuleMeta | undefined] | undefined> {
    if (depth === 0)
      return

    for (const s of config.shortcuts) {
      if (isStaticShortcut(s)) {
        if (s[0] === input) {
          result = s[1]
          break
        }
      }
      else {
        const match = input.match(s[0])
        if (match)
          result = s[1](match, context)
        if (result) {
          break
        }
      }
    }

    // expand nested shortcuts
    if (isString(result))
      result = expandVariantGroup(result.trim()).split(/\s+/g)

    if (!result)
      return

    return [
      (await Promise.all(result.map(async r =>
        (
          isString(r)
            ? (await this.expandShortcut(r, context, depth - 1))?.[0]
            : undefined
        ) || [r],
      )))
        .flat(1)
        .filter(Boolean),
    ]
  }
```

</div>

---
layout: two-cols
growX: 50
growY: 0
growSize: 1.5
---

# Variant
你可以使用 Variant 来增强你的规则<br/>
输出你想要的 CSS<br/>
例如：`hover:` `dark:` etc.

<div class="number-bg">V</div>

<v-clicks>

- Normal variant 普通变体
- Nested variant 嵌套变体
- Separator 分割符
- Custom

</v-clicks>

::right::

<div v-show="$slidev.nav.clicks === 1">

在 Uno 预设中，它内置了多个变体，兼容&对齐 `tailwind` `windi`<br/>
基于其灵活提取能力，它更像是一个 `超集`

##### Usage

```html
<div class="text-red hover-text-blue">Hover Me!</div>
```
```css
/* Output */
.text-red{--un-text-opacity:1;color:rgba(248,113,113,var(--un-text-opacity));}
.hover-text-blue:hover{--un-text-opacity:1;color:rgba(96,165,250,var(--un-text-opacity));}
```

<div class="text-red hover-text-blue">Hover Me!</div>

<br/>

```html
<div class="text-red dark:text-teal">Dark Mode</div>
```

```css
/* Output */
.dark .dark\:text-teal{--un-text-opacity:1;color:rgba(45,212,191,var(--un-text-opacity));}
.text-red{--un-text-opacity:1;color:rgba(248,113,113,var(--un-text-opacity));}
```

<div class="text-red dark:text-teal">Dark Mode</div>

</div>


<div v-show="$slidev.nav.clicks === 2">

Uno 允许你在书写规则是，嵌套变体使用<br/>
`variantA:variantB:···:rules`<br/>

##### Usage

```html
<div class="hover:dark:important:text-teal">Hover Me!</div>
```

```css
/* Output */
.hover\:dark\:text-teal:hover{--un-text-opacity:1 !important;color:rgba(45,212,191,var(--un-text-opacity)) !important;}
```

<div class="hover:dark:important-text-teal">Hover Me!</div>

<div>

<div px-4 py-2 rd b='~ #d97706' mt-6 text-14px c="#d97706">

  <h5 font-bold>Warning</h5>

  <p important-m1>过多 Variant 嵌套的使用，会导致规则的复杂度增加，难以阅读<br/>
  也会增加解析成本，所以不建议使用过多的嵌套<br/></p>
</div>

当你 Variants 超过500个时，便会得到以下警告

<p text-10px>哈哈，应该没有人会这么写吧😅</p>

```ts
if (handlers.length > 500)
        throw new Error(`Too many variants applied to "${raw}"`)
```

</div>

</div>

<div v-show="$slidev.nav.clicks === 3">

Uno 现在对分隔符对方开放，可以自定义<br/>
```ts
/**
   * Variant separator
   *
   * @default [':', '-']
   */
  separators?: Arrayable<string>
```

##### Usage

```html
<input class="hover-text-red focus:text-teal" />
```

##### 自定义分隔符

```ts
// uno.config.ts
import { defineConfig } from 'uno'

export default defineConfig({
  separators: ['_'],
})
```

```html
<input class="hover_text-red focus_text-teal" />
```

<input b b-gray class="hover_text-red focus_text-teal" />

</div>

<div v-show="$slidev.nav.clicks === 4">

简单尝试一下吧～～

- [Variant Docs](https://unocss.dev/config/variants)
- [Playground](https://unocss.dev/play/?html=DwEwlgbgBAxgNgQwM5ILwCIBmB7b6B8AUFFKJLIihjAK5IAu2AtgFz0CmAHvQLQBO7EAQDCdRkygA1BHzAIAdvWAB6cBCIq1RIA&config=JYWwDg9gTgLgBAbzgEwKYDNgDtUGEJaYDmANHGFKgM6owCqWEcAvnOlBCHAOQCujAYypVuAKFGoAHpFgoMAQ14AbeGkw58hYEQAUCUXDgA3eVGDysMKgC44AbQOHEjp3CzyQqW91AyYFmG4SFycQeRgBAAsdMIjI1CgASmdXVwECKgglVAA6JQhdWKiExJDXYHQ4HQBCIvioHKp-WCoAdWAYaO4BXibOa25E5MoYXigsODqEsqcRsYn9VNSpqFsVxqVgAVQdAHZE4KXXGmyBGGhbHSpkgF4APjgAAwASBCpma0iIIwTHw6PDAAjCDIACel2BYNuD0WAKc6SwmWyeQKOkhoNKcKc6Jy6GgAFF5FEdDojNCUlinBUqkY7ABGAC6yVpjLgAGobjw4NVfNB-JYxJSWJjKXNxnB0TNXMx-gCwKZUJZvAABTzIcxVL4-VZwLUlOAWZBVSDYGAJWzqVCJIJSlgzGUhB2GBn-CjUWg2exumj0Rg6RIu0TMUpAA&css=Q&options=N4IgLgTghgdgzgMwPYQLYgFwKgGzgUwF8g)
- [Variant Types](https://github.com/unocss/unocss/blob/1cb4ce12493bd24c63ed0206ae746deae5ba521d/packages/core/src/types.ts#L253-L317)

</div>


---
layout: two-cols
growX: 90
growY: 20
growSize: 1.2
---

# Themes
Uno 对齐 `Tailwind` 的主题支持，但是更加强大

<div class="number-bg">T</div>

<v-clicks>

- 内置主题
- mergeThemes & extendThemes
- 自定义主题

</v-clicks>

::right::

<div v-show="$slidev.nav.clicks === 1">

##### 内置主题
Uno 在 `presetMini` 包中内置基本主题<br/>
包括`colors` `font` `breakpoint` ···<br/>

[Link](https://github.com/unocss/unocss/tree/main/packages/preset-mini/src/_theme)


Uno 在 `presetWind` 增加主题系统<br/>
包括`animate` `media` ···

[Link](https://github.com/unocss/unocss/blob/main/packages/preset-wind/src/theme.ts)

##### Export/Import

Uno 将主题系统对外开放，你可以轻松获取主题实例

```bash
pnpm add @unocss/preset-mini
```

```ts
import { theme } from '@unocss/preset-mini'
// OR
import { theme } from '@unocss/preset-wind'
```
</div>

<div v-show="$slidev.nav.clicks === 2">

##### mergeTheme & [Playground](https://unocss.dev/play/?html=DwEwlgbgBAxgNgQwM5ILwCIAuBTAHpgWiQFt0A%2BAKCh3wuAHpwJK6nZEUMbC4BzcqtzqNIZIA&config=JYWwDg9gTgLgBAbzgEwKYDNgDtUGEJaYDmANHGFKgM6owCqWEcAvnOlBCHAOQCujAYypVuAKFGoAHpFgoMAQ14AbeGkw58hYEQAUCUXHKUaMKgC44AbQOGj1Wgwg6AlCRuH9t21nkhUF7gp7GABadAgIbjcvQxgAC1Q-C08Yw3CsGABlYAAvf0R3VLgQZAtLbgBGADoKgCYAVkoQKJ5qxsTuAF1oosMlIjLKqoamlqH25u7Cr2YembmWBZSvHySeIJMwiKjpuHjE-OWY9Kzcw92vKhBBgAYqgA4Adgmx6rqXqd7Z3e-5mynmM5REA&css=Q&options=N4IgLgTghgdgzgMwPYQLYgFwKgGzgUwF8g)
当多个预设中，存在主题时。Uno 会自动 **深度合并** 主题

<div fsc gap-3 un-children="flex-1">
<div>

```ts
// preset-foo
{
  theme: {
    colors: {
      red: 'red',
      blue: 'blue',
    }
  }
}
```

</div>

<div>

```ts
// preset-bar
{
  theme: {
    colors: {
      red: 'pink',
      green: 'green',
    }
  }
}
```

</div>
</div>

<br />

##### extendThemes & [Playground](https://unocss.dev/play/?html=DwEwlgbgBAxgNgQwM5ILwCIAuBTAHpgWgCdsQCBWABkvQD4d9gB6cCWgKHdElkRQwaEARnACu2OoOasOQA&config=JYWwDg9gTgLgBAbzgEwKYDNgDtUGEJaYDmANHGFKgM6owCqWEcAvnOlBCHAOQCujAYypVuAKFGoAHpFgoMAQ14AbeGkw58hYEQAUCUXHKUaMKgC44AbQOGj1Wgwg6AlCRuH9t21nkhUF7gp7GABadAgIbjcvQykYVCxkABUAC1Q-HRg0v2dEdxjKGF4oLDyYmIA6Kqz01Gjy2wEIJWhzMoavSmQLTw6YgFYABkGArqj8juZ6yemY5gmWWambAF16uITk7NRM7dzew0Li0oPbKoqav1nDJpaoNtOvc8vUCtvW69sAIyVef3aOgARACiADEAIJ0AAySQCPz%2B4xmC2WXnmhmWzGcoiAA&css=Q&options=N4IgLgTghgdgzgMwPYQLYgFwKgGzgUwF8g)

在主题深度合并之后，继承主题系统以扩展其能力

```ts
{
  extendTheme(mergedTheme) {
    return {
      ...mergedTheme,
      colors: {
        red: {
          500: 'red',
        },
      },
    }
  },
}
```


</div>

<div v-show="$slidev.nav.clicks === 3" fccc gap-4 h-full>


### 如何丝滑且优雅的自定义主题呢？

<div w-40 h-40 bg="[url(/customTheme.png)]" bg-cover></div>

[Playground](TODO)

</div>

---
layout: fact
growX: 50
growY: 120
growSize: 1.5
clicks: 1
---

<h1 transition duration-500 :class="$slidev.nav.clicks === 1 ? 'pa top-0 left-1/2 translate-x--1/2 scale-40 w-100vw op50!' : ''">
<span text-transparent text-8xl bg-clip-text bg-gradient-to-r from-rose-400 to-pink-600>Good Work~!</span>
<br/>
<span text-7xl>UnoCSS so Friendly</span>
</h1>

<p v-click="1">
接下来，让我为你介绍核心功能<br/>
<span text-6xl animate-pulse text='$vp-c-brand'>Presets</span>
</p>

---
layout: cover
growX: 50
growY: 0
growSize: 1.5
---

# Presets

Uno 的灵活强大的工作能力来源于 `Presets`

<div class="number-bg">P</div>

<v-clicks>

- Uno preset - UnoCSS 的默认预设 (集成 Mini * Wind)
- Attributify preset - Enable Attributify mode
- Icon preset - Use any icon with Pure CSS.
- Typography preset - 排版预设
- Web Fonts preset - 使用 Web 字体预设
- etc. 更多预设见 [Official Presets](https://unocss.dev/presets) & [Community Presets](https://unocss.dev/presets/community)
  
</v-clicks>


---
layout: cover
growSize: 0.5
---

# PresetUno

<div v-click-hide >
PresetUno 是 UnoCSS 的默认预设

它集成 PresetMini & PresetWind 的**所有功能**
</div>
<div v-after>

[Playground](https://unocss.dev/play/?html=DwEwlgbgBAxgNgQwM5ILwCIDuAnBAHPAU23QD4AoKKUSWRFDAF0IA9GBabQkdgVgAZ%2BZAApckhRlACqAOwD2UACqEkjYAHpwEChq0Vy5IA&config=JYWwDg9gTgLgBAbzgEwKYDNgDtUGEJaYDmANHGFKgM6owCqWEcAvnOlBCHAOQCujAYypVuAKFGoAHpFgoMAQ14AbeGkw58hYEQAUCUXHKUaMKgC44AbQOGj1Wgwh6btuAHo3KeVADWAfgtuASV5YW44AB8eEFRkYHlwqIARbx8AWQg0AGVUJVQBGGgqF1tkVMDg0JESEsNa9095GBgoYAAjXhhgdABPAAUaXmQIALgAIQgIPPkseqaW9s7u-sHhi3R5JRoa1zrdhrgAN294try%2BykxJUaoFrCJ649b5M9QLjGBJQP4AWm4d3b1Dx2K43O5ESJwW6te6WAC6QM8FA%2BXx4v3%2B9URIKU2gAFjBRm1JtNZvtkegcUR8RYWrxUCVmABKAFwgFUXHQGACTrmRAlADuUHkYDAqCggX5PwAjAAGGWHflwXHSuWHXFsPKSODAGCoEBUH4CVBYXVQOAAK14t2WhuNprEhmYoiZoiAA&css=Q&options=N4IgLgTghgdgzgMwPYQLYgFwKgGzgUwF8g)

</div>

---
layout: cover
growX: 0
growY: 50
growSize: 1.5
---

# PresetAttributify
Attributify Mode  

<div v-click="1">

```ts {monaco-diff}
<button class="px-4 py-2 rounded b b-red text-xl text-white">
  Button
</button>
~~~
<button 
  p="x-4 y-2" rounded
  b="~ red"
  text="xl white"
>
  Button
</button>
```

</div>

<div v-click="2">

[PLayground](https://unocss.dev/play/?html=DwEwlgbgBA7gTgQwA5IKZwHwCgpVJKAF1QA9CBaAYgDNaoMoAFOVAZ1UKgEFDC4wARgFdCYagE88AenARswGZGxYsQA&config=JYWwDg9gTgLgBAbzgEwKYDNgDtUGEJaYDmANHGFKgM6owCCMMUwARgK4zDoCeZF1tAJIBjAlT6UaMAKpYIcAL5x0UCCDgByNnOFUqGgFAHUAD0iwUGAIZsANvDSYc%2BQsCIAKBAbhwqAC2gYYQ4qAC5Ebx84AHcoKzAwVChwjWiAWgBGAAYsgDdouD9MnNy-ZVtTOGAYVBAqNOFULBqoOAArNipOHgamlo0SSIVBn34pMLgAbUjRyVpZCHcAShGosdoGJlYOLm5PGaiAekOfACo4AHksW244Iiakqxq4XABlV%2BVoOCet9m7br7CWxWPQHHzHXxbYQwAD84RYEAgFSsWDBcDRELg5wAAo4bPZNNo0oYokcTvxMCY4ZDmFgiGiMScsZdrrcQE9hGV0F8KcATKhkN9GMw-tRGeRKJSBVcbtSEUjUCiGaTwUzzq82AlAnB2UE-NgiHA5Fg0rkrLY2AKhb8OGKVXBMadxcyAGJfUxWcAVZ3nAAG-r8MBAth9cAAPMhgLkdTA0gAmB0APlD-t9PtDuOsdngTEtPsO4uNADVzZbkJsRba5Yjkaj7aG6HBbMAunAIOhrZWalQ4DB5CxUFUiHJKIKVGo4KYmFZoQaAHTitwj1AV7bd6ldWlESYAXSM9ohkw0udQGh3bdaR7P4pPABUIAA5Agli0C6sKpWkhQrSI7wbfgwgA&css=Q&options=N4IgLgTghgdgzgMwPYQLYgFwKgGzgUwF8g)

</div>

<div v-click="3">

[TypeScript support (JSX/TSX)](https://unocss.dev/presets/attributify#typescript-support-jsx-tsx)

</div>



<div class="number-bg">A</div>



---
layout: cover
growX: 110
growY: -10
---

# PresetIcon
用纯 css 去使用任意图标

<div class="number-bg">Icon</div>


<div v-click="1" v-show="$slidev.nav.clicks === 1"      >

```bash
npm i -D @iconify-json/[the-collection-you-want]
```

```ts
export default defineConfig({
  presets: [
    presetIcons({ /* options */ }),
    // ...other presets
  ],
})
```

</div>

<div fsc gap-20 w-full of-hidden v-show="[2,3].includes($slidev.nav.clicks)">

<div v-click="2" :class="$slidev.nav.clicks === 3 ? 'w-400px' : ''">

```html
<div fcc gap-4 text-5xl>
<!-- A basic anchor icon from Phosphor icons -->
<div class="i-fluent-emoji-confused-face" />
<!-- An orange alarm from Material Design Icons -->
<div class="i-mdi-alarm text-orange-400" />
<!-- A large Vue logo -->
<div class="i-logos-unocss text-6xl" />
<!-- Sun in light mode, Moon in dark mode, from Carbon -->
<button class="i-carbon-sun dark:i-carbon-moon" />
<!-- Twemoji of laugh, turns to tear on hovering -->
<div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
</div>
```

</div>

<div v-click="3" fcc gap-4 text-5xl>
<!-- A basic anchor icon from Phosphor icons -->
<div class="i-fluent-emoji-confused-face" />
<!-- An orange alarm from Material Design Icons -->
<div class="i-mdi-alarm text-orange-400" />
<!-- A large UnoCSS logo -->
<div class="i-logos-unocss text-6xl" />
<!-- Sun in light mode, Moon in dark mode, from Carbon -->
<button class="i-carbon-sun dark:i-carbon-moon" />
<!-- Twemoji of laugh, turns to tear on hovering -->
<div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
</div>

</div>


---
layout: two-cols
growX: 90
growY: 90
growSize: 1.5
---

# PresetIcon
强大 Icon 使用集成能力

<div class="number-bg">Icon</div>

<v-clicks>

- Render Mode
- 自动引入图标集 (Node env)
- CDN
- Load 本地/网络资源
- [Documentation](https://unocss.dev/presets/icons)

</v-clicks>

::right::

<div v-show="$slidev.nav.clicks === 1">
Uno Icon 渲染模式 分为：`mask` `background`, 默认为`mask`

```css
.icon {
  '--un-icon': url,
  '-webkit-mask': 'var(--un-icon) no-repeat',
  'mask': 'var(--un-icon) no-repeat',
  '-webkit-mask-size': '100% 100%',
  'mask-size': '100% 100%',
  'background-color': 'currentColor',
  // for Safari https://github.com/elk-zone/elk/pull/264
  'color': 'inherit',
}
```

你也可以指定 Uno Icon 的生成规则
```html
<div class="i-logos-unocss?mask text-6xl" />
<div class="i-logos-unocss?bg text-6xl" />
```
<div fsc gap-10 mt-2>
<div class="i-logos-unocss?mask text-6xl" />
<div class="i-logos-unocss?bg text-6xl" />
</div>

</div>

<div v-show="$slidev.nav.clicks === 2">

#### Auto import

你在使用 `iconify` 图标集合时，你不必在预设中再次注册图标集合`collection`，而导致图标资源加载失败。

依赖于上流 `iconify` 的能力, `Uno` 在解析规则时，会去自动搜索`已安装`的`iconify dataset`，创建对应集合的 `loader`

```ts {monaco-diff}
presetIcons({
  collections: {
    carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
    mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
    logos: () => import('@iconify-json/logos/icons.json').then(i => i.default),
  }
})
~~~
presetIcons({
  
})
```

</div>

<div v-show="$slidev.nav.clicks === 3">

#### CDN
如果你更喜欢从 CDN 获取它们，您可以指定选项 `cdn`。

我们推荐 `esm.sh` 作为 CDN 提供商。

```ts
presetIcons({
  cdn: 'https://esm.sh/'
})
```

[Interactive Docs](https://unocss.dev/interactive/)

</div>

<div v-show="$slidev.nav.clicks === 4">

#### 加载本地/网络资源
如果你的本地存在图标资源，你可以通过 Node 将其注册 图标预设的 `collections` 中。

```ts
collections: {
  'my-icons': {
    account: '<svg><!-- ... --></svg>',
    settings: () => fs.readFile('./path/to/my-icon.svg', 'utf-8'),
  },
  'my-other-icons': async (iconName) => {
    return await fetch(`https://example.com/icons/${iconName}.svg`).then(res => res.text())
  },
  'my-yet-other-icons': FileSystemIconLoader(
    './assets/icons',
    svg => svg.replace(/#fff/, 'currentColor')
  )
}
```

##### Usage
  
```html
<div i-my-icons-account />
<div i-my-icons-settings />
<div i-my-other-icons-[iconName] />
<div i-my-yet-other-icons-[iconName] />
```

</div>

---
layout: cover
---

# PresetTypography
呵护你的 HTMl 排版布局

[Playground](TODO)

---
layout: center
growX: 50
growY: 100
growSize: 1.1
---

<div text-center mt4 op50 italic font-serif mb2>I wrote a userscript:</div>
<div flex="~ gap-2 items-center" text-3xl font-mono>
<div i-simple-icons-github/> <a href="https://github.com/antfu/refined-github-notifications">antfu/refined-github-notifications</a>
</div>
<div text-center mt4 op50 italic font-serif v-click>It's hacky and opinionated!</div>

---
growX: 110
growY: 110
---


<div absolute left-165 right-5 top-20>
<v-clicks>

- Automatically dismiss unrelated notifications
- <b text-hex-a371f7>Colorize</b> notifications type
- Single-instance notifications tab
- Auto refresh

</v-clicks>
</div>


---
layout: center
---

# Wishlist to GitHub

<v-clicks depth="2">

- GitHub Notifications API, **Please**!
- Fine-grained notifications filter
  - Bots, type of notifications, random ping, etc.
- More interactive notifications inbox
  - Live updates
  - Avoid hard refreshes

</v-clicks>

---
layout: center
---

<div w-100>

<h1 mb-2>Warping up</h1>

<v-clicks>

- Keep maintenance scope manageable, don't let it grow out of control.

- **Reply and forget** - new notifications will come up once you get replies.

- Use tools to help you focus.

- **Enjoy it!**

</v-clicks>

</div>

---
layout: intro
class: text-center pb-5
growX: 50
growY: 120
---

# Thank You!

Slides on [talks.zyob.top]
