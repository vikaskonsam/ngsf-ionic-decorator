angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("decorators/ionic/actions-trcl.html","<div class=\"button-bar schema-form-actions {{form.htmlClass}}\" ng-transclude=\"\"></div>");
$templateCache.put("decorators/ionic/actions.html","<div class=\"btn-group schema-form-actions {{form.htmlClass}}\"><input ng-repeat-start=\"item in form.items\" type=\"submit\" class=\"button {{ item.style || \'btn-light\' }} {{form.fieldHtmlClass}}\" value=\"{{item.title}}\" ng-if=\"item.type === \'submit\'\"> <button ng-repeat-end=\"\" class=\"button {{ item.style || \'btn-light\' }} {{form.fieldHtmlClass}}\" type=\"button\" ng-disabled=\"form.readonly\" ng-if=\"item.type !== \'submit\'\" ng-click=\"buttonClick($event,item)\"><span ng-if=\"item.icon\" class=\"{{item.icon}}\"></span>{{item.title}}</button></div>");
$templateCache.put("decorators/ionic/array.html","<div class=\"schema-form-array {{form.htmlClass}}\" sf-field-model=\"sf-new-array\" sf-new-array=\"\"><label class=\"control-label\" ng-show=\"showTitle()\">{{ form.title }}</label><ol class=\"list-group\" sf-field-model=\"\" ui-sortable=\"form.sortOptions\"><li class=\"list-group-item {{form.fieldHtmlClass}}\" schema-form-array-items=\"\" sf-field-model=\"ng-repeat\" ng-repeat=\"item in $$value$$ track by $index\"><button ng-hide=\"form.readonly || form.remove === null\" ng-click=\"deleteFromArray($index)\" ng-disabled=\"form.schema.minItems >= modelArray.length\" style=\"position: relative; z-index: 20;\" type=\"button\" class=\"close pull-right\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button></li></ol><div class=\"clearfix\" style=\"padding: 15px;\" ng-model=\"modelArray\" schema-validate=\"form\"><div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div><button ng-hide=\"form.readonly || form.add === null\" ng-click=\"appendToArray()\" ng-disabled=\"form.schema.maxItems <= modelArray.length\" type=\"button\" class=\"btn {{ form.style.add || \'btn-default\' }} pull-right\"><i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || \'Add\'}}</button></div></div>");
$templateCache.put("decorators/ionic/checkbox.html","<label class=\"item item-checkbox {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\"><div class=\"checkbox checkbox-input-hidden disable-pointer-events checkbox-circle\"><input type=\"checkbox\" sf-changed=\"form\" ng-disabled=\"form.readonly\" sf-field-model=\"\" schema-validate=\"form\" class=\"{{form.fieldHtmlClass}}\" name=\"{{form.key.slice(-1)[0]}}\"> <i class=\"checkbox-icon\"></i></div><div class=\"item-content disable-pointer-events\"><span>{{form.title}}</span></div><div class=\"help-block\" sf-message=\"form.description\"></div></label>");
$templateCache.put("decorators/ionic/checkboxes.html","<div sf-field-model=\"sf-new-array\" sf-new-array=\"\" class=\"form-group schema-form-checkboxes {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\"><label class=\"control-label {{form.labelHtmlClass}}\" sf-field-model=\"\" schema-validate=\"form\" ng-show=\"showTitle()\">{{form.title}}</label><div class=\"checkbox\" ng-repeat=\"val in titleMapValues track by $index\"><label><input type=\"checkbox\" ng-disabled=\"form.readonly\" sf-changed=\"form\" class=\"{{form.fieldHtmlClass}}\" ng-model=\"titleMapValues[$index]\" name=\"{{form.key.slice(-1)[0]}}\"> <span ng-bind-html=\"form.titleMap[$index].name\"></span></label></div><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/ionic/default.html","<div class=\"form-wrap\"><label class=\"item item-input\" ng-if=\"form.labelType == \'placeholder\'\"><input type=\"{{form.type}}\" placeholder=\"{{form.title}}\"><div class=\"help-text\" sf-message=\"form.description\"></div></label><div ng-if=\"form.labelType == \'inline\'\"><label class=\"item item-input\"><span class=\"input-label\">{{form.title}}</span> <input type=\"{{form.type}}\" placeholder=\"{{form.placeholder}}\"><div class=\"help-text\" sf-message=\"form.description\"></div></label></div><label class=\"item item-input item-stacked-label\" ng-if=\"form.labelType == \'stacked\' || !form.labelType\"><span class=\"input-label\">{{form.title}}</span> <input type=\"{{form.type}}\" placeholder=\"{{form.placeholder}}\"><div class=\"help-text\" sf-message=\"form.description\"></div></label> <label class=\"item item-input item-floating-label\" ng-if=\"form.labelType == \'floating\'\"><span class=\"input-label\">{{form.title}}</span> <input type=\"{{form.type}}\" placeholder=\"{{form.placeholder || form.title}}\"><div class=\"help-text\" sf-message=\"form.description\"></div></label></div>");
$templateCache.put("decorators/ionic/fieldset.html","<fieldset ng-disabled=\"form.readonly\" class=\"schema-form-fieldset {{form.htmlClass}}\"><legend ng-class=\"{\'sr-only\': !showTitle() }\">{{ form.title }}</legend><div class=\"help-block\" ng-show=\"form.description\" ng-bind-html=\"form.description\"></div></fieldset>");
$templateCache.put("decorators/ionic/help.html","<div class=\"helpvalue schema-form-helpvalue {{form.htmlClass}}\" ng-bind-html=\"form.helpvalue\"></div>");
$templateCache.put("decorators/ionic/radio-buttons.html","<div class=\"form-group schema-form-radiobuttons {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\"><div><label class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\">{{form.title}} why is title not coming</label></div><div class=\"btn-group\"><label sf-field-model=\"replaceAll\" class=\"btn {{ (item.value === $$value$$) ? form.style.selected || \'btn-default\' : form.style.unselected || \'btn-default\'; }}\" ng-class=\"{ active: item.value === $$value$$ }\" ng-repeat=\"item in form.titleMap\"><input type=\"radio\" class=\"{{form.fieldHtmlClass}}\" sf-changed=\"form\" style=\"display: none;\" ng-disabled=\"form.readonly\" sf-field-model=\"\" schema-validate=\"form\" ng-value=\"item.value\" name=\"{{form.key.join(\'.\')}}\"> <span ng-bind-html=\"item.name\"></span></label></div><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/ionic/radios-inline.html","<div class=\"form-group schema-form-radios-inline {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\"><label class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\" sf-field-model=\"\" schema-validate=\"form\">{{form.title}}</label><div><label class=\"radio-inline\" ng-repeat=\"item in form.titleMap\"><input type=\"radio\" class=\"{{form.fieldHtmlClass}}\" sf-changed=\"form\" ng-disabled=\"form.readonly\" sf-field-model=\"\" ng-value=\"item.value\" name=\"{{form.key.join(\'.\')}}\"> <span ng-bind-html=\"item.name\"></span></label></div><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/ionic/radios.html","<div class=\"form-group schema-form-radios {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\"><label class=\"control-label {{form.labelHtmlClass}}\" sf-field-model=\"\" schema-validate=\"form\" ng-show=\"showTitle()\">{{form.title}}</label><div class=\"radio\" ng-repeat=\"item in form.titleMap\"><label><input type=\"radio\" class=\"{{form.fieldHtmlClass}}\" sf-changed=\"form\" ng-disabled=\"form.readonly\" sf-field-model=\"\" ng-value=\"item.value\" name=\"{{form.key.join(\'.\')}}\"> <span ng-bind-html=\"item.name\"></span></label></div><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/ionic/section.html","<div class=\"schema-form-section {{form.htmlClass}}\"></div>");
$templateCache.put("decorators/ionic/select.html","<ion-item><ion-label>Gender</ion-label><ion-select [(ngmodel)]=\"gender\"><ion-option value=\"f\" selected=\"true\">Female</ion-option><ion-option value=\"m\">Male</ion-option></ion-select></ion-item>");
$templateCache.put("decorators/ionic/submit.html","<div class=\"schema-form-submit {{form.htmlClass}}\"><input type=\"submit\" class=\"button {{ form.style || \'button-positive\' }} {{form.fieldHtmlClass}}\" value=\"{{form.title}}\" ng-disabled=\"form.readonly\" ng-if=\"form.type === \'submit\'\"> <button class=\"button {{ form.style || \'button-positive\' }}\" type=\"button\" ng-click=\"buttonClick($event,form)\" ng-disabled=\"form.readonly\" ng-if=\"form.type !== \'submit\'\"><span ng-if=\"form.icon\" class=\"{{form.icon}}\"></span> {{form.title}}</button></div>");
$templateCache.put("decorators/ionic/tabarray.html","<div ng-init=\"selected = { tab: 0 }\" ng-model=\"modelArray\" schema-validate=\"form\" sf-field-model=\"sf-new-array\" sf-new-array=\"\" class=\"clearfix schema-form-tabarray schema-form-tabarray-{{form.tabType || \'left\'}} {{form.htmlClass}}\"><div ng-if=\"!form.tabType || form.tabType !== \'right\'\" ng-class=\"{\'col-xs-3\': !form.tabType || form.tabType === \'left\'}\"><ol class=\"nav nav-tabs\" ng-class=\"{ \'tabs-left\': !form.tabType || form.tabType === \'left\'}\" sf-field-model=\"\" ui-sortable=\"form.sortOptions\"><li sf-field-model=\"ng-repeat\" ng-repeat=\"item in $$value$$ track by $index\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" ng-class=\"{active: selected.tab === $index}\"><a href=\"#\">{{interp(form.title,{\'$index\':$index, value: item}) || $index}}</a></li><li ng-hide=\"form.readonly || form.add === null\" ng-disabled=\"form.schema.maxItems <= modelArray.length\" ng-click=\"$event.preventDefault() || (selected.tab = appendToArray().length - 1)\"><a href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || \'Add\'}}</a></li></ol></div><div ng-class=\"{\'col-xs-9\': !form.tabType || form.tabType === \'left\' || form.tabType === \'right\'}\"><div class=\"tab-content {{form.fieldHtmlClass}}\"><div class=\"tab-pane clearfix tab{{selected.tab}} index{{$index}}\" sf-field-model=\"ng-repeat\" ng-repeat=\"item in $$value$$ track by $index\" ng-show=\"selected.tab === $index\" ng-class=\"{active: selected.tab === $index}\"><div schema-form-array-items=\"\"></div><button ng-hide=\"form.readonly || form.remove === null\" ng-click=\"selected.tab = deleteFromArray($index).length - 1\" ng-disabled=\"form.schema.minItems >= modelArray.length\" type=\"button\" class=\"btn {{ form.style.remove || \'btn-default\' }} pull-right\"><i class=\"glyphicon glyphicon-trash\"></i> {{ form.remove || \'Remove\'}}</button></div><div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div></div></div></div><div ng-if=\"form.tabType === \'right\'\" class=\"col-xs-3\"><ul class=\"nav nav-tabs tabs-right\"><li sf-field-model=\"ng-repeat\" ng-repeat=\"item in $$value$$ track by $index\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" ng-class=\"{active: selected.tab === $index}\"><a href=\"#\">{{interp(form.title,{\'$index\':$index, value: item}) || $index}}</a></li><li ng-hide=\"form.readonly || form.add === null\" ng-disabled=\"form.schema.maxItems <= modelArray.length\" ng-click=\"$event.preventDefault() || (selected.tab = appendToArray().length - 1)\"><a href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || \'Add\'}}</a></li></ul></div>");
$templateCache.put("decorators/ionic/tabs.html","<div ng-init=\"selected = { tab: 0 }\" class=\"schema-form-tabs {{form.htmlClass}}\"><ul class=\"nav nav-tabs\"><li ng-repeat=\"tab in form.tabs\" ng-disabled=\"form.readonly\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" ng-class=\"{active: selected.tab === $index}\"><a href=\"#\">{{ tab.title }}</a></li></ul><div class=\"tab-content {{form.fieldHtmlClass}}\"></div></div>");
$templateCache.put("decorators/ionic/textarea.html","<label class=\"item item-input\"><textarea placeholder=\"{{form.title}}\"></textarea></label>");}]);
angular.module('schemaForm').config(['schemaFormDecoratorsProvider', 'sfBuilderProvider', 'sfPathProvider',
function(decoratorsProvider, sfBuilderProvider, sfPathProvider) {
  var base = 'decorators/ionic/';

  var simpleTransclusion  = sfBuilderProvider.builders.simpleTransclusion;
  var ngModelOptions      = sfBuilderProvider.builders.ngModelOptions;
  var ngModel             = sfBuilderProvider.builders.ngModel;
  var sfField             = sfBuilderProvider.builders.sfField;
  var condition           = sfBuilderProvider.builders.condition;
  var array               = sfBuilderProvider.builders.array;

  // Tabs is so bootstrap specific that it stays here.
  var tabs = function(args) {
    if (args.form.tabs && args.form.tabs.length > 0) {
      var tabContent = args.fieldFrag.querySelector('.tab-content');

      args.form.tabs.forEach(function(tab, index) {
        var div = document.createElement('div');
        div.className = 'tab-pane';
        div.setAttribute('ng-disabled', 'form.readonly');
        div.setAttribute('ng-show', 'selected.tab === ' + index);
        div.setAttribute('ng-class', '{active: selected.tab === ' + index + '}');

        var childFrag = args.build(tab.items, args.path + '.tabs[' + index + '].items', args.state);
        div.appendChild(childFrag);
        tabContent.appendChild(div);
      });
    }
  };
  
  // Set tabArray sortOptions.items default.
  var tabArray = function(args) {
    if(args.form.hasOwnProperty('sortOptions')) {
      if(!args.form.sortOptions.hasOwnProperty('items')) {
        args.form.sortOptions['items'] = 'li:not(:last-child)';
      }
    } else {
      args.form['sortOptions'] = {items: 'li:not(:last-child)'};
    }
  }

  var selectPlaceholder = function(args) {
    if (args.form.placeholder) {
      var selectBox = args.fieldFrag.querySelector('select');
      var option = document.createElement('option');
      option.setAttribute('value', '');

      /* We only want the placeholder to show when we do not have a value on the model.
       * We make ngModel builder replace all so we can use $$value$$.
       */
      option.setAttribute('sf-field-model', 'replaceAll');

      /* https://github.com/angular/angular.js/issues/12190#issuecomment-115277040
       * angular > 1.4 does a emptyOption.attr('selected', true)
       * which does not like the ng-if comment.
       */
      if (angular.version.major === 1 && angular.version.minor < 4) {
        option.setAttribute('ng-if', '$$value$$ === undefined');
      } else {
        option.setAttribute('ng-show', '$$value$$ === undefined');
      }

      option.textContent = args.form.placeholder;

      selectBox.appendChild(option);
    }
  };

  var defaults = [sfField, ngModel, ngModelOptions, condition];
  decoratorsProvider.defineDecorator('ionicDecorator', {
    textarea: {template: base + 'textarea.html', builder: defaults},
    fieldset: {template: base + 'fieldset.html', builder: [sfField, simpleTransclusion, condition]},
    array: {template: base + 'array.html', builder: [sfField, ngModelOptions, ngModel, array, condition]},
    tabarray: {template: base + 'tabarray.html', builder: [sfField, ngModelOptions, ngModel, array, condition, tabArray]},
    tabs: {template: base + 'tabs.html', builder: [sfField, ngModelOptions, tabs, condition]},
    section: {template: base + 'section.html', builder: [sfField, simpleTransclusion, condition]},
    conditional: {template: base + 'section.html', builder: [sfField, simpleTransclusion, condition]},
    actions: {template: base + 'actions.html', builder: defaults},
    select: {template: base + 'select.html', builder: [selectPlaceholder, sfField, ngModel, ngModelOptions, condition]},
    checkbox: {template: base + 'checkbox.html', builder: defaults},
    checkboxes: {template: base + 'checkboxes.html', builder: [sfField, ngModelOptions, ngModel, array, condition]},
    number: {template: base + 'default.html', builder: defaults},
    password: {template: base + 'default.html', builder: defaults},
    submit: {template: base + 'submit.html', builder: defaults},
    button: {template: base + 'submit.html', builder: defaults},
    radios: {template: base + 'radios.html', builder: defaults},
    'radios-inline': {template: base + 'radios-inline.html', builder: defaults},
    radiobuttons: {template: base + 'radio-buttons.html', builder: defaults},
    help: {template: base + 'help.html', builder: defaults},
    'default': {template: base + 'default.html', builder: defaults}
  }, []);

}]);
