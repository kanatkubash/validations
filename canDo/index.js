export default function canDo(path) {
  return function(target, key, desc) {
    let func = desc.value;

    desc.value = function() {
      if (this[path] == 100) return func.apply(this, arguments);
      else this.warn(`warning: ${this[path]} not 100`);
    };
  };
}
