# Full Stack Next.js 13 Application | React, Next JS 13, TypeScript, Tailwind CSS



## 1.创建项目

### 使用脚手架创建

```npx create-next-app```

https://zh-hans.react.dev/learn/start-a-new-react-project

选择 tailwind css

https://tailwindcss.com/docs/installation

### 安装生产依赖

```npm i @headlessui/react cloudinary jsonwebtoken @types/jsonwebtoken graphql-request next-auth```

- tailwind ui 框架headlessui https://headlessui.com/
- 图片云管理？cloudinary https://cloudinary.com/documentation/cloudinary_get_started
- 权限验证 jwt 
- graphql-request  https://www.npmjs.com/package/graphql-request
- next-auth

### 安装开发依赖 dev

```npm i @grafbase/sdk --save-dev```



### 初始化内容

清空 app 文件夹、public 文件夹 （真没必要吧……）

#####  create page.tsx

在 app 文件夹下创建根组件 page.tsx

```tsx
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;

```

运行测试一下```npm run dev```

会自动生成 layout.tsx文件

![image-20230729182853095](/Users/puluotagela/Library/Application Support/typora-user-images/image-20230729182853095.png)

##### create  api folder

later on to put API routes 

#####  global.css

contain common Tailwind classes

 copy and paste https://gist.github.com/adrianhajdin/a453d745c2361ae4183b421f577a0715

##### 在 public 文件夹下增加一堆图标

#####  favicon.ico

##### create components folder

##### update tailwind.config.js

##### create common.types.ts 



## 2.开始搭建

page.tsx 增加内容

layout.tsx 修改描述

Q：page 和 layout 什么关系，function RootLayout（）是什么

https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts



### 创建组件：Navbar.tsx

rafce生成代码片段， 安装 es7+ react snippets 插件

bug：tailwind ：gap-10 为什么没有提示

![image-20230731021352780](/Users/puluotagela/Library/Application Support/typora-user-images/image-20230731021352780.png)

内容：logo+菜单列表+用户信息发布作品

### 创建组件：Footer.tsx

![image-20230731021317575](/Users/puluotagela/Library/Application Support/typora-user-images/image-20230731021317575.png)



## BUG

##### 1.unknown at rule @tailwind /@apply

https://www.codeconcisely.com/posts/tailwind-css-unknown-at-rules/

修改 vscode 设置

##### 2.The `lg:` class does not exist. If `lg:` is a custom class, make sure it is defined within a `@layer` directive.

https://github.com/tailwindlabs/tailwindcss/discussions/8754

https://indianhomehealthcare.com/?_=%2Fquestions%2F75463490%2Fthe-dark-class-does-not-exist-if-dark-is-a-custom-class-make-sure-it-is-defi%230l1SBObOUqm2iQJ0p8be9ZIqZLSvXIqZng%3D%3D

删掉冒号后的空格

##### The `lg:` class does not exist. If `lg:` is a custom class, make sure it is defined within a `@layer` directive.

为什么文件里删了空格，编译后还给我加上空格。。

![image-20230730151812322](/Users/puluotagela/Library/Application Support/typora-user-images/image-20230730151812322.png)



好像不是空格的锅，真的就只是 lg 不存在，因为少了一个 css 文件（和视频项目源码对比起来）

![image-20230730165705975](/Users/puluotagela/Library/Application Support/typora-user-images/image-20230730165705975.png)

##### 3.tailwind 提示插件不管用

https://javascript.plainenglish.io/how-to-fix-tailwind-css-intellisense-in-visual-studio-code-3dede794df21 

https://www.youtube.com/watch?v=21HuwjmuS7A&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=2&ab_channel=AdamWathan

增加了一堆 setting.json的设置，还安装了 postcss、autoprefixer，出现了输入提示，但是 hover  preview 还是没有QAQ

##### 4.tailwind 属性 gap-10 为什么没有提示

## REF

- github https://github.com/adrianhajdin/project_nextjs13_flexibble/tree/main

- youtube https://www.youtube.com/watch?v=986hztrfaSQ&t=122s&ab_channel=JavaScriptMastery

