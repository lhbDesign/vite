import StarrySky from './src/star-sky.vue';

StarrySky.install = (App) => {
	App.component(StarrySky.name, StarrySky);
};

export default StarrySky;