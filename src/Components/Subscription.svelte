<script>
  import axios from "axios";
  import { notify } from "../Notify/store.js";
  import { navigate } from "svelte-routing";

  let email;
  let name;
  let loading = false;

  function handleForm(e) {
    e.preventDefault();

    if (loading || (email == null && name == null)) {
      return;
    }

    loading = true;
    axios
      .post(`${process.env.API_URL}/in-depth-laravel/member/subscribe`, {
        name: name,
        email: email
      })
      .then(res => {
        navigate("/thank-you");
        email = "";
        loading = false;
      })
      .catch(e => {
        notify({
          message: "Oops! Something went wrong. 😞",
          type: "error",
          fly: {
            y: 100,
            duration: 500
          }
        });
        loading = false;
      });
  }
</script>

<form class="" on:submit={handleForm}>
  <div class="border-2 border-blue-200 shadow-2xl rounded-md bg-white p-2 my-2">
    <input
      type="text"
      placeholder="Your Nice Name..."
      bind:value={name}
      class="outline-none text-black px-1 w-full" />
  </div>
  <div class="border-2 border-blue-200 shadow-2xl rounded bg-white p-2 my-2">
    <input
      type="email"
      placeholder="Awesome Email..."
      bind:value={email}
      class="outline-none text-black px-1 w-full" />
  </div>
  <div
    class="bg-blue-600 rounded-md shadow-2xl text-white cursor-pointer w-full">
    {#if loading}
      <i class="fas fa-circle-notch fa-spin text-2xl px-2 py-2 text-blue-400" />
    {:else}
      <button
        class="p-2 bg-blue-800 rounded-md cursor-pointer relative w-full
        hover:text-white hover:bg-blue-600 transition-all duration-300
        overflow-hidden"
        type="submit">
        <p class="ml-16 -mt-3 text-3xl absolute">👉</p>
        <div class="flex justify-center">
          <p>Subscribe Now</p>
        </div>
      </button>
    {/if}
  </div>
</form>
