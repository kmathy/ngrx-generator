<p align="center">
<img width="400" src="https://github.com/kmathy/ngx-reduxor/blob/master/Ngx-reduxor.png" alt="Logo">
</p>

## [For Version 1, check this readme.md](https://github.com/kmathy/ngx-reduxor/blob/master/README_v1.md)

## Intro
If you are a user of @ngrx libs, check this generator! This will help you to save time by creating an architecture for your ngrx files. 

* Create Actions, reducers, effects and services in one command! Just provide a name and the generator will do the rest.
* Provide a module to easily import all the reducers, effects and services in your Angular app.
* Naming convention to prevent errors.
* MetaReducer: non-invasive logger in development.
* Generator available: CRUD actions, CRUD advanced actions using Entity, Basic actions.
* Mainly inspired by the [ngrx styleguide](https://github.com/orizens/ngrx-styleguide)
* Use the latest Angular HttpClient.
* Provide unit tests.

## prerequisites

```
@ngrx/store@^4.0.0
@ngrx/effects@^4.0.0
@ngrx/entity@^4.0.0
ngrx-store-freeze
```

## Getting Started

Install it via npm:

```shell
npm install ngx-reduxor --save-dev
```

or with Yarn:
```shell
yarn add --dev ngx-reduxor
```

## Configuration

in your package.json, add the following:

```
  ...
  "scripts": {
    "ngx-reduxor": "ngx-reduxor"
  },
```

So that, you can directly use the Generator like the Angular CLI.<br>
The first time you launch the generator, it will create a new file for the configuration.

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

## Usage

```shell
ngx-reduxor
```

## Note when generating an Entity

* Take note that the new store object name must be `singular`.

And then, follow the instructions... ;-)
Congratulations! You are now able to create huge and scalable app in Redux inside your Angular applications!

## Contributors

Special thanks to contributors for their hard work!! 🙏 Do you want to contribute? Check the [Contributor Guide](https://github.com/kmathy/ngx-reduxor/blob/master/CONTRIBUTOR_GUIDE.md)

<a href="https://github.com/lexcaraig">
  <img src="https://avatars1.githubusercontent.com/u/15936424?s=75&v=4">
</a>

## Issues/Improvements
Don't hesitate to send a PR or to contribute to this project. If you have suggestion or a problem, feel free to open an issue.

## [Wiki](https://github.com/kmathy/ngx-reduxor/wiki)
A wiki is being written to provide a documentation of the architecture for each generator, some best practices to use in Ngrx or to facilitate your development. Everyone can contribute. This is also a place to put some kind messages about how you love this tool (A bit of softness in this brutal world)

## Roadmap
It is just the beginning! The idea is to provide a tool that can help you to manage easily your ngrx applications and also, create powerful actions. [See the next version](https://github.com/kmathy/ngx-reduxor/projects/1)
