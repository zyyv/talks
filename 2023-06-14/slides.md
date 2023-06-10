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
例如：`hover:` `dark:` etc.

<div class="number-bg">V</div>

<v-clicks>

- Normal variant 普通变体
- Nested variant 嵌套变体
- Separator 分割符
- Sort 排序
- Tips

</v-clicks>


---

# <span font-mono>.github</span> Magic Repo



---
layout: fact
growX: 50
growY: 120
growSize: 1.5
clicks: 1
---

<h1 :class="$slidev.nav.clicks === 1 ? 'line-through op50!' : ''"><span text-transparent text-8xl bg-clip-text bg-gradient-to-r from-rose-400 to-pink-600>TURN OFF</span> Notifications</h1>

<p :class="$slidev.nav.clicks === 1 ? 'line-through op20!' : ''">and call it a day</p>

---
layout: fact
growX: 50
growY: 0
growSize: 1.5
---

# Seek for Notifications
don't let them seek for you

<div class="number-bg">1</div>

---
layout: center
---

<v-clicks depth="2">

- Turn off Email & App **Push** notifications

- Look for notifications **proactively**

  - Use GitHub Notifications Inbox

</v-clicks>


---
layout: fact
growX: 0
growY: 50
growSize: 1.5
---

# Group your Notifications
by repository, instead of time

<div class="number-bg">2</div>

---
growX: 110
growY: -10
clicks: 2
---

<Arrow x1="600" y1="200" x2="550" y2="75" text-lime shadow v-if="$slidev.nav.clicks === 1" />


---
layout: fact
growX: 90
growY: 90
growSize: 1.5
---

# What to Focus
filter out the noise, prioritize

<div class="number-bg">3</div>


---
layout: center
---

<v-clicks depth="2">

- Dismiss issues/PRs that are **closed/merged**<br><span op50 translate-y--10px inline-block>(when not participant in; trust your team)</span>
- Dismiss notifications of
  - Bots 🤖
  - New commits pushed to PRs
  - GitHub Actions cancelled
  - etc.

</v-clicks>

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

Slides on [antfu.me](https://antfu.me)
