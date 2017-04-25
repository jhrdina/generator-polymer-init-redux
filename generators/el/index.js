'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var _s = require('underscore.string');
var path = require('path');

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);

    this.argument('name', {
      desc: 'Element name. Must contain dash symbol!',
      type: String,
      required: true
    });

    this.option('path', {
      desc: 'Element output path',
      defaults: 'src'
    });
  },

  initializing: function () {
    if (!this.name.includes('-')) {
      this.yo.emit('error', new Error(
        '\nUh oh, custom elements must include a hyphen in their name. ' +
        'Please try again.'
      ));
    }
  },

  prompting: function () {
    var prompts = [
      {
        type: 'input',
        name: 'description',
        message: 'Brief description of the element'
      },
      {
        name: 'includeTests',
        message: 'Would you like to include test files?',
        type: 'confirm',
        default: true
      }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    var name = this.name;
    var allProps = Object.assign({}, this.props, {
      name: this.name
    });
    this.props.className = _s.classify(name);

    this.fs.copyTpl(
      this.templatePath('demo.html'),
      this.options.path + '/' + name + '/demo.html',
      allProps);

    this.fs.copyTpl(
      this.templatePath('element.html'),
      this.options.path + '/' + name + '/' + name + '.html',
      allProps);

    if (this.props.includeTests) {
      var pathToTest = path.join(this.options.path, this.name, 'test', this.name + '.html');

      this.fs.copyTpl(
        this.templatePath('element.test.html'),
        pathToTest,
        allProps
      );

      // Add Test to index.html

      var relPathToTest = path.relative(
        this.destinationPath('test'),
        pathToTest
      );

      var testsIndexPath = path.join(this.destinationPath('test'), 'index.html');

      var file = this.fs.read(testsIndexPath).toString();
      var pattern = 'WCT.loadSuites([';
      file = file.replace(
        pattern,
        pattern + "\n        '" + relPathToTest + "?dom=shady'," +
                  "\n        '" + relPathToTest + "?dom=shadow',"
      );
      this.fs.write(testsIndexPath, file);
    }
  },

  end: function () {
    this.log(chalk.bold('\nElement created!'));
  }
});
