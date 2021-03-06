# generator-polymer-init-redux [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Polymer PRPL project generator with Redux

## Features

- Redux (via [PolymerRedux](https://github.com/tur-nr/polymer-redux))
- Redux Thunk
- New element adding (see below)
- Service worker
- Lazy-loading screens
- Routing and URL synchronization with Redux

## TODO

- Generator tests
- Generate test templates for new elements
- Optional databases/backend integration support (see 'db' branch)

## Installation

First, install [Yeoman](http://yeoman.io) and generator-polymer-init-redux using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-polymer-init-redux
```

## Usage

Generate your new project with

```bash
polymer init redux
```

or use Yeoman directly:

```bash
yo polymer-init-redux
```

To **add a new element** to the project use

```bash
yo polymer-init-redux:el element-name
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

BSD-2-Clause-FreeBSD © [Jan Hrdina](www.hrdinajan.cz)


[npm-image]: https://badge.fury.io/js/generator-polymer-init-redux.svg
[npm-url]: https://npmjs.org/package/generator-polymer-init-redux
[travis-image]: https://travis-ci.org/jhrdina/generator-polymer-init-redux.svg?branch=master
[travis-url]: https://travis-ci.org/jhrdina/generator-polymer-init-redux
[daviddm-image]: https://david-dm.org/jhrdina/generator-polymer-init-redux.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/jhrdina/generator-polymer-init-redux
