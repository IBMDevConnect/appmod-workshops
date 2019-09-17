
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);



'use strict';
/* global $ circuitBreaker */


  const route = '/getMongo';


  const circuitBreakerOptions = {
    timeout: 500,
    errorThresholdPercentage: 50,
    resetTimeout: 5000
  };

  const circuit = circuitBreaker(_ => $.get(route), circuitBreakerOptions);

  circuit.fallback(_ =>
    ({ body: `${route} unavailable right now. Try later.` }));

  circuit.on('success',
    result => $(element).prepend(
      makeNode(`SUCCESS: ${JSON.stringify(result)}`)));

  circuit.on('timeout',
    () => $(element).prepend(
      makeNode(`TIMEOUT: ${route} is taking too long to respond.`)));

  circuit.on('reject',
    () => $(element).prepend(
      makeNode(`REJECTED: The breaker for ${route} is open. Failing fast.`)));

  circuit.on('open',
    () => $(element).prepend(
      makeNode(`OPEN: The breaker for ${route} just opened.`)));

  circuit.on('halfOpen',
    () => $(element).prepend(
      makeNode(`HALF_OPEN: The breaker for ${route} is half open.`)));

  circuit.on('close',
    () => $(element).prepend(
      makeNode(`CLOSE: The breaker for ${route} has closed. Service OK.`)));

  circuit.on('fallback',
    data => $(element).prepend(
      makeNode(`FALLBACK: ${JSON.stringify(data)}`)));

  function makeNode (body) {
    const response = document.createElement('p');
    $(response).addClass(body.substring(0, body.indexOf(':')).toLowerCase());
    response.append(body);
    return response;
  }
