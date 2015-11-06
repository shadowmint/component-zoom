# component-zoom

See demo or run gulp demo and hit localhost:3000

## usage:

    <div class="zoom">
      <img data-zoom="1" src="foo1.png"/>
      <img data-zoom="2" src="foo2.png"/>
      <img data-zoom="3" src="foo3.png"/>
      <img data-zoom="4" src="foo4.png"/>
      <img data-zoom="5" src="foo5.png"/>
    </div>

    ...

    import component from 'component-zoom';
    import $ from 'jquery';

    component($('.zoom'));
