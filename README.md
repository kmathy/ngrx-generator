# ngrx-generator

![Downloads](https://img.shields.io/npm/dm/ngrx-generator.svg)
![Downloads](https://img.shields.io/npm/dt/ngrx-generator.svg)
![npm version](https://img.shields.io/npm/v/ngrx-generator.svg)
![License](https://img.shields.io/npm/l/ngrx-generator.svg)

![Demo](https://s22.postimg.org/5nlkpozi9/demo.gif)

### Save yourself the headache of Redux boilerplate.[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

## Getting Started

Install it via npm:

```shell
npm install ngrx-generator -g
```

```shell
ngrx-gen
```

By default, it will create the templates in the current directory.
If you prefer the ngrx/example style -
```shell
- reducers
- services
- actions
- effects
- services
```

you can add the following line to your `package.json`
```shell
{
 "ngrxGen": {
   "seperateDirectory": "true"
 }
}
```

![Demo](https://s23.postimg.org/8urbz1xjv/demo2.gif)

## License

MIT
