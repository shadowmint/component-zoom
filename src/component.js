import $ from 'jquery/dist/jquery';
import jade from 'jade/runtime';
import {Zoom} from './zoom';
import assets from './assets';

export default function component($elements) {

  console.log("Component...");
  console.log($elements);

  // Export jade runtime
  window.jade = jade;

  // Inject styles
  $('head').append(`<style id='#component-zoom'>${assets['styles.css']}</style>`);

  // Handle component instances
  $elements.each((i, el) => {
    var instance = new Zoom($(el));
    console.log(instance);
  });
}
