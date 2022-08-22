import StarrySky from './starSky';
import EventEmitter from './event'
//按需引入
export { StarrySky, EventEmitter };

const install = (App) => {
	App.use(StarrySky)
};

const Vue3Sky = {
  install
}

export default Vue3Sky