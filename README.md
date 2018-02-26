<p align="center">
  <img src="https://img.shields.io/npm/dt/ngx-reduxor.svg">
  <img src="https://img.shields.io/npm/dm/ngx-reduxor.svg">
  <img src="https://img.shields.io/npm/v/ngx-reduxor.svg">
</p>

## [For Version 1, check this readme.md](https://github.com/kmathy/ngx-reduxor/blob/master/README_v1.md)

## Articles associated
[Medium 23/02/2018](https://blog.cloudboost.io/ngx-reduxor-generate-a-complete-ngrx-architecture-in-one-command-574e3ea76f2d)
[Medium 10/12/2017](https://blog.cloudboost.io/ngx-reduxor-do-you-use-ngrx-in-your-angular-app-check-this-generator-b3386e7bf8bf)

## Intro
If you are a user of @ngrx libs, check this generator! This will help you to save time by creating an architecture for your ngrx files. 

* Create an **entity** is easy. Just provide a name and it will generate all the files!
* Create a **router-serializer** to use @ngrx/router-store.
* Provide a module to easily import all the reducers, effects and services in your Angular app.
* MetaReducer: non-invasive logger in development.
* Mainly inspired by the [ngrx styleguide](https://github.com/orizens/ngrx-styleguide)
* Use the latest Angular HttpClient.
* Use lettable operators in Rxjs.
* Provide unit tests.

## prerequisites

```
@ngrx/store@^5.0.0 // Required
@ngrx/effects@^5.0.1 // Required
@ngrx/entity@^5.0.1 // Optional but recommended. (Required if you generate entity)
ngrx-store-freeze // Optional but recommended. Useful to prevent state mutation.
```

## Getting Started
### Globally
Install it via npm:

```shell
npm install -g ngx-reduxor
```

or with Yarn:
```shell
yarn global add ngx-reduxor
```
### Locally in a project
Install it via npm:

```shell
npm install ngx-reduxor --save-dev
```

or with Yarn:
```shell
yarn add --dev ngx-reduxor
```

## Configuration

If you want to install it locally, you have to add the following in your package.json:

```
  ...
  "scripts": {
    "ngx-reduxor": "ngx-reduxor"
  },
```

If installed globally, you can directly use the Generator like the Angular CLI.<br>
The first time you launch the generator, it will create a new file for the configuration:

| Option             | Description                                                             | Type    | Default           |
|--------------------|-------------------------------------------------------------------------|---------|-------------------|
| BASE_PATH          | Path to put the generated files                                         | String  | './src/app/store' |
| SEPARATE_DIRECTORY | If true, separate each action, reducer, service,... In their own folder | Boolean | false             |
| IGNORE_SPEC        | If true, skip generation of spec files                                  | Boolean | false             |

## Usage
You need to use the generator at the root of your project.

If installed globally:
```shell
ngx-reduxor
```

Otherwise:
```
npm run ngx-reduxor
```

## Import to your Angular application
A module is created once you generate your first ngrx files. This module contains all the necessary: Reducers, interfaces, meta-reducers, effects,...
You just need to import the module inside the AppModule and it will expose the store in your application.

```
...
import { StoreReduxorModule } from './path/to/your/store-reduxor.module';
...
@NgModule({
...
imports: [
  ...
  StoreReduxorModule.forRoot(),
  ...
]
...
```

## Generate Entity

If you want to generate an entity, you need to provide the **singular** of the name. After, you will be asked to provide
the plural of this name in order to correctly generate the files.

## Generate router-serializer

To use this feature:
* You firstly need to generate your first store object. So that, the module and the required files (app.store,...)  are created.
* Ensure you have **@ngrx/router-store** installed in your project and existing in your package.json.

If these two conditions are met, you will be able to generate the router-serializer (it also update store-reduxor.module and app.store with routerReducer ect)

## Contributors

Special thanks to contributors for their hard work!! 🙏 Do you want to contribute? Check the [Contributor Guide](https://github.com/kmathy/ngx-reduxor/blob/master/CONTRIBUTOR_GUIDE.md)

<a href="https://github.com/lexcaraig">
  <img src="https://avatars1.githubusercontent.com/u/15936424?s=75&v=4">
</a>

## Issues/Improvements
Don't hesitate to send a PR or to contribute to this project. If you have suggestion or a problem, feel free to open an issue.
