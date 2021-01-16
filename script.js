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

const App = {
	data() {
		return {
			posts,
			counter: 0,
			placeholder: "Enter todo",
			value: '',
			notes: []
		}
	},
	methods: {
		inputHandler(event) {
			console.log(event.target.value);
			this.value = event.target.value;
		},
		addNote() {
			this.notes.push(this.value);
			this.value = '';
		},
		deleteNote(index) {
			this.notes.splice(index, 1);
		}
	}
};

Vue.createApp(App).mount('#blog');

