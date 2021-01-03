const posts = [
	{
		id: 1,
		get title() {
			return `Post ${this.id}`
		},
		body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, similique!'
	},
	{
		id: 2,
		get title() {
			return `Post ${this.id}`
		},
		body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, similique!'
	},
	{
		id: 3,
		get title() {
			return `Post ${this.id}`
		},
		body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, similique!'
	}
];

Vue.createApp({
	data() {
		return {
			name: 'Maksym Vasylenko',
			links: ['home', 'portfolio', 'contact me']
		}
	}
}).mount("header");

Vue.createApp({
	data() {
		return {
			posts,
		}
	}
}).mount('#blog');
