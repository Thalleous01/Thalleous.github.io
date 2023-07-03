(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{461:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"},[t._v("说明")]),s("p",[t._v("这是js基础的原型与原型链模块的摘要内容，"),s("code",[t._v("vuepress")]),t._v("提供的语法块")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.bilibili.com/video/BV1N741127VA/",target:"_blank",rel:"noopener noreferrer"}},[t._v("原型与原型链相关的讲解视频"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"js原型与原型链与类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js原型与原型链与类"}},[t._v("#")]),t._v(" JS原型与原型链与类")]),t._v(" "),s("blockquote",[s("p",[t._v("什么是原型和原型链")])]),t._v(" "),s("p",[t._v("在 JavaScript 中，所有的对象都有一个原型对象（prototype），而原型对象本身也是一个"),s("strong",[t._v("对象")]),t._v("，它也有自己的原型对象，这样形成了一个原型链（prototype chain）。原型链是 JavaScript 实现继承的一种机制，通过原型链，一个对象可以继承另一个对象的属性和方法。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/629260200",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS原型与原型链 - 知乎 (zhihu.com)"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("原型的作用")])]),t._v(" "),s("p",[t._v("原型可以用于共享方法")]),t._v(" "),s("blockquote",[s("p",[t._v("原型的构造器指向什么？")])]),t._v(" "),s("p",[t._v("原型的构造器指向构造函数")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Star")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Star")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'小红'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Star")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" Star"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("__proto__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" Star"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("blockquote",[s("p",[t._v("模拟extend(继承)")])]),t._v(" "),s("p",[t._v("可以通过构造函数+原型对象来模拟实现继承")]),t._v(" "),s("p",[t._v("利用call改变this指向（该方法只能继承属性，不能继承方法）")]),t._v(" "),s("p",[t._v("如何继承方法：子类的原型指向父类的实例"),s("code",[t._v("Son.prototype = new Father()")])]),t._v(" "),s("blockquote",[s("p",[t._v("类如何添加方法")])]),t._v(" "),s("p",[t._v("利用"),s("code",[t._v("Object.assign(Father.prototype,...methods)")]),t._v("添加方法（在原型上追加方法）。")]),t._v(" "),s("blockquote",[s("p",[t._v("什么是constructor方法")])]),t._v(" "),s("p",[t._v("此为类的默认方法，构造器，通过new生成实例化对象的时候自动调用此方法。一个类必须要有constructor方法，即使没有定义也会隐式定义")]),t._v(" "),s("blockquote",[s("p",[t._v("类和构造函数的区别")])]),t._v(" "),s("p",[t._v("类必须要通过new来生成实例化对象，否则会报错，而构造函数不用new也可以执行")]),t._v(" "),s("p",[t._v("类的所有实例化对象享受一个原型对象")]),t._v(" "),s("p",[t._v("类的内部默认严格模式")])])}),[],!1,null,null,null);s.default=e.exports}}]);