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

const links = [
	{ id: 1, link: 'index.html', name: 'home' },
	{ id: 2, link: 'portfolio.html', name: 'Portfolio' },
	{ id: 3, link: 'contact.html', name: 'Contact me' }
];

const appHeader = {
	data() {
		return {
			name: 'Maksym Vasylenko',
			links,
		}
	},
	template: `
		<header>
			<h1>{{name}} Portfolio </h1>
			<nav>
				<ul>
					<li v-for="link in links">
						<a :href="link.link" :key="link.id">{{link.name}}</a>
					</li>
				</ul>
			</nav>
    </header>
	`
};
const blogPost = {
	props: ['post'],
	template: `
		<article>
			<h3>{{post.title}}</h3>
			<p>{{post.body}}</p>
			<p class="read_more">Read More</p>
		</article>
	`
};

const App = Vue.createApp({
	created() {
		this.getPosts();
	},
	components: {
		'app-header': appHeader,
		'blog-post': blogPost,
	},
	data() {
		return {
			posts: [],
		}
	},
	methods: {
		async getPosts() {
			const response = await fetch('https://jsonplaceholder.typicode.com/posts');
			let posts = await response.json();
			this.posts = posts;
		}
	}
})

// App.component('app-header', {
// 	data() {
// 		return {
// 			name: 'Maksym Vasylenko',
// 			links,
// 		}
// 	},
// 	template: `
// 		<header>
// 			<h1>{{name}} Portfolio </h1>
// 			<nav>
// 				<ul>
// 					<li v-for="link in links">
// 						<a :href="link.link" :key="link.id">{{link.name}}</a>
// 					</li>
// 				</ul>
// 			</nav>
//     </header>
// 	`
// });
//
// App.component('blog-post', {
// 	props: ['post'],
// 	template: `
// 		<article>
// 			<h3>{{post.title}}</h3>
// 			<p>{{post.body}}</p>
// 			<p class="read_more">Read More</p>
// 		</article>
// 	`
// })

App.mount("#app");

// vladilen course section

// const App = {
// 	data() {
// 		return {
// 			posts,
// 			counter: 0,
// 			placeholder: "Enter todo",
// 			value: '',
// 			notes: []
// 		}
// 	},
// 	methods: {
// 		// replaced with v-model
//
// 		// inputHandler(event) {
// 		// 	console.log(event.target.value);
// 		// 	this.value = event.target.value;
// 		// },
// 		addNote() {
// 			if (this.value === '') return;
// 			this.notes.push(this.value);
// 			this.value = '';
// 		},
// 		deleteNote(index) {
// 			this.notes.splice(index, 1);
// 		},
// 		toUpperCase(item) {
// 			return item.toUpperCase(item);
// 		}
// 	},
// 	computed: {
// 		doubleCount() {
// 			return this.notes.length * 2;
// 		}
// 	},
// 	watch: {
// 		value(value) {
// 			if (value.length > 10) {
// 				this.value = '';
// 			}
// 		}
// 	}
// };
//
// Vue.createApp(App).mount('#blog');


// vladilen course section

// Vue.createApp({
// 	data: () => ({
// 		title: 'Im new section',
// 		html: '<div>Vue 3 App</div>',
// 		person: {
// 			firstName: 'Max',
// 			lastName: 'Lavrov',
// 			age: 21
// 		},
// 		items: [1, 2, 3, 4, 5, 6]
// 	}),
// 	methods: {
// 		addItem() {
// 			this.items.unshift(this.$refs.inputRef.value);
// 			this.$refs.inputRef.value = '';
// 		},
// 		removeItem(index) {
// 			this.items.splice(index, 1);
// 		},
// 		log(item) {
// 			console.log(item);
// 		}
// 	},
// 	computed: {
// 		pairNumbers() {
// 			return this.items.filter(item => item % 2 === 0)
// 		}
// 	}
// }).mount('#section2')

