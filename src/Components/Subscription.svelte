<form class="border-2 border-yellow-400 shadow-2xl rounded bg-white p-3 flex justify-between" on:submit={handleForm}>
	<input type="email" placeholder="Your Awesome Email..." class="outline-none text-black px-1" />
	<input type="submit" value="Subscribe Now" class="p-2 bg-blue-600 rounded shadow-2xl text-white cursor-pointer" />
</form>

<script>
	function handleForm(e){
		e.preventDefault()
	}
</script>