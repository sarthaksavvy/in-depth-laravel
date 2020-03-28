import App from './App.svelte';
import axios from 'axios'

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

axios.defaults.withCredentials = true;
axios.defaults.headers.common["Authorization"] = `Bearer ${process.env.MAILTREE_KEY}`;

export default app;