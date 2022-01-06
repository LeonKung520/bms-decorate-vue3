# Vue 3 + Typescript + Vite

项目名：[bms-decorate-vue3](https://github.com/LeonKung520/bms-decorate-vue3/)，


## 1. 如何运行

> node版本 `[12.22.8]`

### 1.1 开发环境配置
See [Configuration Reference](https://cli.vuejs.org/config/).


## Code specification

[EditorConfig](https://editorconfig.org/)

1. 配置.editorconfig文件
```
# Editor configuration, see http://editorconfig.org

# 表示是最顶层的 EditorConfig 配置文件
root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行首的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```

2.VSCode 使用 EditorConfig 需要去插件市场下载插件 EditorConfig for VS Code
有助于为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格。

[Prettier](https://prettier.io/)

1. 安装命令
```
npm i prettier -D
```

2.配置 .prettierrc
```
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "none",
  "bracketSpacing": true,
  "semi": false
}
```
3. 格式化代码命令
```
npx prettier --write .
```

4. VSCode 编辑器使用 Prettier 配置需要下载插件 Prettier - Code formatter
   是一款强大的代码格式化工具，支持 JavaScript、TypeScript、CSS、SCSS、Less、JSX、Angular、Vue、GraphQL、JSON、Markdown 等语言，基本上前端能用到的文件格式它都可以搞定，是当下最流行的代码格式化工具

[ESLint](https://github.com/eslint/eslint)

1. 安装命令
```
npm i eslint -D
```

2. 配置 ESLint
```
npx eslint --init
```

3. 配置 .eslintrc.js
```
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "plugin:vue/essential",
        "airbnb-base",
        'plugin:prettier/recommended', // 添加 prettier 插件
        'plugin:jest/recommended', // 添加 jest/recommended 插件
    ],
    "parserOptions": {
        "ecmaVersion": 13,
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
    }
};
```


4. 解决 Prettier 和 ESLint 的冲突
```
npm i eslint-plugin-prettier eslint-config-prettier -D
```


5. VSCode 使用 ESLint 配置文件需要去插件市场下载插件 ESLint

[husky](https://github.com/typicode/husky)
husky 包含很多 hook（钩子），常用有：pre-commit、commit-msg、pre-push。这里，我们使用 pre-commit 来触发 ESLint 命令
1. 自动配置
```
npx husky-init && npm install
```

2. 修改 .husky/pre-commit hook 文件的触发命令
```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

eslint --fix ./src --ext .vue,.js,.ts
```

[lint-staged ](https://github.com/okonet/lint-staged)
1. 安装命令
```
npm i lint-staged -D
```

2. package.json 添加 lint-staged 配置项
```
"lint-staged": {
  "*.{vue,js,ts}": "eslint --fix"
},
```

3. 修改 .husky/pre-commit hook 的触发命令为：npx lint-staged
```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

#eslint --fix ./src --ext .vue,.js,.ts
npx lint-staged
```

### 1.2 开发过程

#### 1.2.1 命令

```sh
# 开发
npm run dev

# 测试
npm run test

# 发布
npm run build
```

#### 1.2.2 代理配置

`Fiddler` 代理：

- `regex:^https?://now\.qq\.com/(.*\.(js|css|png|jpg|gif|jpeg|svg|blob).*)$` `ROOT:/path/$1`

`Whistle` 代理：

- `/^https?://now\.qq\.com/(.*\.(js|css|png|jpg|gif|jpeg|svg|blob).*)$/` `ROOT:/path/$1`

### 1.3 发布

| 发布产品 | 发布模块 |
| --- | --- |
| `[xxx]` | `[xxx]` |

> 发布时的备注

### 1.4 错误告警及监控


## 2. 业务介绍



## 3. 其他

XXX

> 项目备注
