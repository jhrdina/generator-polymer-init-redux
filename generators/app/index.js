'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _s = require('underscore.string');

module.exports = yeoman.Base.extend({
  initializing: function () {
    // Yeoman replaces dashes with spaces. We want dashes.
    this.appname = this.appname.replace(/\s+/g, '-');
  },
  prompting: function () {
    var _this = this;

    var prompts = [
      {
        name: 'name',
        type: 'input',
        message: 'Application name',
        default: this.appname
      },
      {
        type: 'input',
        name: 'elementName',
        message: 'Main element name',
        default: function (answers) {
          return answers.name + '-app';
        },
        validate: function (name) {
          var nameContainsHyphen = name.includes('-');
          if (!nameContainsHyphen) {
            _this.log('\nUh oh, custom elements must include a hyphen in ' + 
              'their name. Please try again.');
          }
          return nameContainsHyphen;
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Brief description of the application',
      }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    var elementName = this.props.elementName;
    this.props.className = _s.classify(elementName);

    this.fs.copy(
      this.templatePath() + '/images/**/*',
      this.destinationPath('images'));

    this.fs.copyTpl(
      this.templatePath() + '/src/**/?(.)!(_)*',
      this.destinationPath('src'),
      this.props);

    this.fs.copyTpl(
      this.templatePath() + '/test/**/?(.)!(_)*',
      this.destinationPath('test'),
      this.props);

    this.fs.copyTpl(
      this.templatePath() + '/?(.)!(_)*',
      this.destinationPath(),
      this.props);

    // Copy Element
    this.fs.copy(
      this.templatePath('src/_element/_actions.js'),
      this.destinationPath('src/' + elementName + '/actions.js'));

    this.fs.copy(
      this.templatePath('src/_element/_reducers.js'),
      this.destinationPath('src/' + elementName + '/reducers.js'));

    this.fs.copyTpl(
      this.templatePath('src/_element/_element.html'),
      'src/' + elementName + '/' + elementName + '.html',
      this.props);
  },

  install: function () {
    this.installDependencies();
  },

  end: function () {
    this.log(chalk.bold('\nSetup Complete!'));
  }
});
