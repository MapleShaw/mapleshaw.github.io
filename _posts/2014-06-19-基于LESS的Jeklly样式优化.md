---
layout: post
title: 基于LESS的Jeklly样式优化
intro: 开始捣鼓LESS了，这次是原创文章啊啊啊，不过里面的代码盗用了一下LESS官网的
image: http://mapleshaw.github.io/img/post/less.png
---

# 基于LESS的Jeklly样式优化

---

## LESS介绍

&emsp;&emsp;Less 是一门 CSS 预处理语言，它扩充了 CSS 语言，增加了诸如变量、混合（mixin）、函数等功能，让 CSS 更易维护、方便制作主题、扩充。

&emsp;&emsp;Less 可以运行在 Node、浏览器和 Rhino 平台上。网上有很多第三方工具帮助你编译 Less 源码。

例如：

    @base: #f938ab;
    .box-shadow(@style, @c) when (iscolor(@c)) {
      -webkit-box-shadow: @style @c;
      box-shadow:         @style @c;
    }
    .box-shadow(@style, @alpha: 50%) when (isnumber(@alpha)) {
      .box-shadow(@style, rgba(0, 0, 0, @alpha));
    }
    .box {
      color: saturate(@base, 5%);
      border-color: lighten(@base, 30%);
      div { .box-shadow(0 0 5px, 30%) }
    }

编译结果：

    .box {
      color: #fe33ac;
      border-color: #fdcdea;
    }
    .box div {
      -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    }
    
&emsp;&emsp;这里不再赘述，想了解详细的请狂击：<i class="iconfont icon-jingdai"></i>[LESS的官网](http://less.bootcss.com/)

&emsp;&emsp;由于使用Jekyll在Github Pages上搭建Blog，使用MD发布的文章看起来好丑，所以私人定制了posts模块的专属样式，顺便入门了LESS。一开始看文档，没转过弯，总能看到编译这个词，而且还分浏览器，客户端，服务端，又是nodeJs，又是HTML里面引用less.js，乱七八糟的差点想<i class="iconfont icon-jingdai"></i>*四级英语单词本第一次单词（abandon）*，哈哈！！后来经过错乱神经的调整，突然醍醐灌顶，说白了，就是
> 你用less写啊写，写完之后，又不在服务端用nodeJs，或者HTML的less.js，又或者通过第三方工具，编译成css文件，再引用进HTML，仅此而已！！！

&emsp;&emsp;第一次使用只是稍微了解下语法，定义和操作变量而已，有点蜻蜓点水，后续再**深入**使用学习！<i class="iconfont icon-jingdai"></i>
