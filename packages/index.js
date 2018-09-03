import Loading from './loading';

const version = require('../package.json').version;
const components = [Loading];
const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export { version, install, Loading };
const funtUi = {
  version,
  install
};

export default funtUi;
