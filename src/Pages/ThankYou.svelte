<script>
	import { Link} from "svelte-routing";
	import { onMount } from 'svelte';

	let titleSound;

	const playSound = sound => {
	    sound.volume = 0.05;
	    sound.play();
	  };

	onMount(async () => {
		playSound(titleSound);
	});
</script>

<div class="flex justify-center">
	<div class="p-10 m-10 border border-gray-500 shadow-2xl rounded md:w-5/12">	
		<h1 class="text-2xl font-semibold tracking-wider">😊 Please Confirm your Subscription!</h1>
		
		<p class="pt-10 text-gray-800 tracking-wider">You've just been sent an email to confirm your email address. Please click on the link in this email to confirm your subscription.</p>
		<p class="py-4 text-gray-500 tracking-wider">💡 Make your you check your spam/junk folder to find confirmation email from Sarthak Shrivastava.</p>

		<Link to="/">
			<div class="bg-black text-white shadow p-3 text-center tracking-wide mt-10 w-56 cursor-pointer">
				Back to Previous Page
			</div>
		</Link>

		<audio bind:this={titleSound}>
		  <source src="sounds/welcome.mp3" />
		  Your browser isn't invited for super fun audio time.
		</audio>
	</div>
</div>