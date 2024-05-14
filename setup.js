<<<<<<< HEAD
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
=======
import 'jest-preset-angular/setup-jest';
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
