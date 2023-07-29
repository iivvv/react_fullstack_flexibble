# Full Stack Next.js 13 Application | React, Next JS 13, TypeScript, Tailwind CSS



## 1.创建项目

#### 使用脚手架创建

```npx create-next-app```

https://zh-hans.react.dev/learn/start-a-new-react-project

选择 tailwind css

https://tailwindcss.com/docs/installation

#### 安装生产依赖

```npm i @headlessui/react cloudinary jsonwebtoken @types/jsonwebtoken graphql-request next-auth```

- tailwind ui 框架headlessui https://headlessui.com/
- 图片云管理？cloudinary https://cloudinary.com/documentation/cloudinary_get_started
- 权限验证 jwt 
- graphql-request  https://www.npmjs.com/package/graphql-request
- next-auth

#### 安装开发依赖 dev

```npm i @grafbase/sdk --save-dev```



#### 初始化内容

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

















## REF

- github https://github.com/adrianhajdin/project_nextjs13_flexibble/tree/main

- youtube https://www.youtube.com/watch?v=986hztrfaSQ&t=122s&ab_channel=JavaScriptMastery

