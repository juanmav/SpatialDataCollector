"use strict";
var fs = require('fs');
var request = require('request');
var mkdirp = require('mkdirp-then');

function lon2tilex(lng_deg, zoom) {
  var n = Math.pow (2.0,zoom);
  var x = Math.floor((lng_deg + 180.0) / 360.0 * n);
  return x;
}

function lat2tiley(lat_deg, zoom) {
  var n = Math.pow (2.0,zoom);
  var lat_rad = lat_deg / 180 * Math.PI;
  var y = Math.floor((1.0 - Math.log(Math.tan(lat_rad) + (1 / Math.cos(lat_rad))) / Math.PI) / 2.0 * n);
  return y;
}

function getTileList(lat_min, lng_min, lat_max, lng_max, zoom_min, zoom_max) {
  var tiles = [];
  for ( var zoom = zoom_min; zoom <= zoom_max; zoom++){
    var txmin, txmax;
    var tymin, tymax;

    txmin = lon2tilex(lng_min, zoom);
    txmax = lon2tilex(lng_max, zoom);

    tymin = lat2tiley(lat_min, zoom);
    tymax = lat2tiley(lat_max, zoom);

    for (var tx = txmin; tx <= txmax; tx++ ) {
      for (var ty = tymin; ty <= tymax; ty++){
        //console.log('x: ', tx, 'y: ',  ty, 'z: ',  zoom);
        tiles.push({'x': tx, 'y': ty, 'z': zoom });
      }
    }
  }
  return tiles;
}

// -34.59042,-58.4833967
// -34.6006649,-58.4671747

var tiles = getTileList(-34.51,-58.55,-34.70,-58.34,17,17);

var p = Promise.resolve(0);

tiles.forEach(function(tile, idx){
  let path = './map/' + tile.z +'/' + tile.x + '/';
  p = p.then(function() {
    console.log(path);
    return mkdirp(path);
  })
});//*/


function* tileIt(it){
  yield* it;
}

// https://gist.github.com/tmcw/4954720
p.then(function(){

  var iterator = tileIt(tiles);

  downloadTile(iterator.next().value);

  function downloadTile(tile){
    console.log(tile);
    let tmsy = Math.pow(2, tile.z) - tile.y - 1;
    let tileurl = 'https://tiles1.usig.buenosaires.gob.ar/mapcache/tms/1.0.0/fotografias_aereas_1940_caba_3857@GoogleMapsCompatible/' + tile.z +'/' + tile.x + '/' + tmsy + '.png';

    let dest = './map/' + tile.z +'/' + tile.x + '/' + tile.y + '.png';

    request.get(tileurl, {timeout: 10000})
      .on('error', function(err){
        console.log(err);
      }) // del request
      .pipe(fs.createWriteStream(dest))
      .on('finish',function(){
        let aux = iterator.next();
        if (aux.done == false)
          downloadTile(aux.value);
      });
  }


});

