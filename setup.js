import 'jest-preset-angular/setup-jest';
import '@ng-web-apis/universal/mocks';

import 'reflect-metadata';

window.AnimationEvent = {};
window.TransitionEvent = {};
window.DragEvent = class {};
window.IntersectionObserver = function () {
  this.observe = () => {};
  this.unobserve = () => {};
  this.disconnect = () => {};
}