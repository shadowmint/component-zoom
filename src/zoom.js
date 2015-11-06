import $ from 'jquery/dist/jquery';
import {Root} from 'component-utils/dist/root';
import short_template from './templates/short';
import full_template from './templates/full';

export class Zoom {

  /** Create a new instance */
  constructor($el) {

    // Setup
    this.$el = $el;
    this.templates = {};
    this.templates.short = short_template;
    this.templates.full = full_template;

    // Draw initial state
    this.redraw();
  }

  redraw() {
  }
}
