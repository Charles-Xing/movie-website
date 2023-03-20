#搭建repo
使用Next.js搭建项目，然后安装tailwind依赖，要注意在文件tailwind.config.js中的内容content: ["./src/**/*.{html,js,tsx}"]要包括项目中使用的文件类型

#分析页面结构
1.左侧的sidebar是根据页面宽度进行伸缩，所以应该是100vh，而不能写死；另外在position上，fixed和absolute都可以使用，fixed是相对于视口，absolute是相对于父元素
2. <Hero />中的图片选择img而不是backgroundimg img的自带属性更多更稳定
3. margin使用 我们在布局时，尽量给下方的内容margin-top 而不是给上方的内容设置margin-bottom
4. <Hero />中的阴影设置：首先是父元素position：relative， 然后是阴影盒子position：absolute和文字盒子postion：relative，所以阴影盒子放在img图层下和文字盒子上即可

#tailwind使用
1.颜色是16进制 eg：bg-[#101010]
2.宽高尺寸设置 w-[60px]
3.flex盒子 flex flex-col items-center justify-between
4.gap、margin 和   padding都可以用于控制元素之间的间隙或元素内部的间隔，但它们的作用范围不同。 
gap 用于设置网格布局中网格元素之间的间隙，只适用于 display: grid 和 display: inline-grid 元素，不会影响元素自身的布局或尺寸。
margin 用于设置元素与其它元素之间的距离，影响元素的外部尺寸和布局。通过设置负数的 margin，可以将元素向外移动，从而与其它元素重叠。
padding 用于设置元素内部的间隔，影响元素的内部尺寸和布局。通过设置 padding 可以在元素内部创建空白区域，用于放置元素的内容。
如果是网格布局，使用 gap 可以更方便地控制元素之间的间隔。如果需要控制元素与其它元素之间的距离，使用 margin 更合适。如果需要在元素内部创建空白区域，使用 padding 更合适。
5. object-cover ： <img className=" w-full h-[65vh] object-cover " src="img/bg.png" loading="lazy" alt="" /> 图片写死了这个宽高之后，使用这个属性，会产生自适应效果
6. flex-1 即 是给元素设置了以下属性 flex-grow: 1;flex-shrink: 1;flex-basis: 0%; 可以使元素自动填充其 Flexbox 容器中的可用空间，并且能够根据容器的大小自动调整元素的大小。

#新的知识点
1. loading=“lazy” 会在页面加载后等待，直到用户滚动到该元素的可见区域时才会开始加载它。
这个属性可以帮助减少页面的初始加载时间和带宽占用，特别是对于长页面或包含大量图像的页面。它可以提高页面的性能和用户体验，因为它减少了需要下载的内容量和页面的初始加载时间。
2. z-index尽量慎用，当图层过多时，容易混乱，所以可以利用代码读取渲染顺利来按顺序编写代码
3. responsive中 现在框架会多选用min,优先使用小屏 mobile first
4. block：none 和 visibility：hidden 的区别是 前者会删除DOM，后者只是CSS层面的隐藏，更快速

#整体思路
首先分析页面结构，分为左边的sidebar和右边的main部分（背景图+上浮文字+NewMovie+Categories）
使用tailwind中的 block/hidden md lg 完成responsive的设计（在适当的位置插入相应的样式，这是重点）
