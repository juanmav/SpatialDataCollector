'use strict';

/**
 * @ngdoc service
 * @name suriMovilNgApp.sngFormDecorator
 * @description
 * # sngFormDecorator
 * Service in the suriMovilNgApp.
 */
var app = angular.module('suriMovilNgApp');
app.run(function ($templateCache) {
  //console.log('run templates');
  //$templateCache.put("scripts/fields/sng-template/sng-point-template.html", "LALasdasdALALA");
});




angular.module('schemaForm').config(function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {
  //console.log('run decoratos');

  ////////////// POINT
  // map from a schema type+format to a form key+type
  var point = function(name, schema, options) {
    if (schema.type === 'object' && schema.format === 'point') {
      var f = schemaFormProvider.stdFormObj(name, schema, options);
      f.key  = options.path;
      f.type = 'point';
      options.lookup[sfPathProvider.stringify(options.path)] = f;

      // ADDED THIS BIT:
      // map the schema properties to form properties
      f.properties = {};
      angular.forEach(schema.properties, function(v, k) {
        var path = options.path.slice();
        path.push(k);
        if (options.ignore[sfPathProvider.stringify(path)] !== true) {
          var required = schema.required && schema.required.indexOf(k) !== -1;

          var def = schemaFormProvider.defaultFormDefinition(k, v, {
            path: path,
            required: required || false,
            lookup: options.lookup,
            ignore: options.ignore
          });
          if (def) {
            f.properties[k] = def;
          }
        }
      });
      return f;
    }
  };

  schemaFormProvider.defaults.object.unshift(point);

  // add to the bootstrap directive
  schemaFormDecoratorsProvider.addMapping(
    'materialDecorator',
    'point',
    'scripts/fields/sng-template/sng-point-template.html'
  );
  schemaFormDecoratorsProvider.createDirective(
    'point',
    'scripts/fields/sng-template/sng-point-template.html'
  );


  ////////////// image
  // map from a schema type+format to a form key+type
  var image = function(name, schema, options) {
    if (schema.type === 'string' && schema.format === 'image') {
      var f = schemaFormProvider.stdFormObj(name, schema, options);
      f.key  = options.path;
      f.type = 'image';
      options.lookup[sfPathProvider.stringify(options.path)] = f;

      // ADDED THIS BIT:
      // map the schema properties to form properties
      f.properties = {};
      angular.forEach(schema.properties, function(v, k) {
        var path = options.path.slice();
        path.push(k);
        if (options.ignore[sfPathProvider.stringify(path)] !== true) {
          var required = schema.required && schema.required.indexOf(k) !== -1;

          var def = schemaFormProvider.defaultFormDefinition(k, v, {
            path: path,
            required: required || false,
            lookup: options.lookup,
            ignore: options.ignore
          });
          if (def) {
            f.properties[k] = def;
          }
        }
      });
      return f;
    }
  };

  schemaFormProvider.defaults.string.unshift(image);

  // add to the bootstrap directive
  schemaFormDecoratorsProvider.addMapping(
    'materialDecorator',
    'image',
    'scripts/fields/sng-template/sng-image-template.html'
  );
  schemaFormDecoratorsProvider.createDirective(
    'image',
    'scripts/fields/sng-template/sng-image-template.html'
  );



});
