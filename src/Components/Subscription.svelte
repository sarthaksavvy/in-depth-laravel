<script>
  import axios from "axios";
  import { notify } from "../Notify/store.js";
  import { navigate } from "svelte-routing";

  let email;
  let loading = false;

  function handleForm(e) {
    e.preventDefault();

    if (loading || email == null) {
      return;
    }

    loading = true;
    axios
      .post(`${process.env.API_URL}/in-depth-laravel/member/subscribe`, {
        name: email,
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

<form
  class="border-2 border-yellow-400 shadow-2xl rounded bg-white p-2 flex
  justify-between"
  on:submit={handleForm}>
  <input
    type="email"
    placeholder="Your Awesome Email..."
    bind:value={email}
    class="outline-none text-black px-1" />
  <div class="bg-blue-600 rounded shadow-2xl text-white cursor-pointer w-32">
    {#if loading}
      <i class="fas fa-circle-notch fa-spin text-2xl px-2 py-2 text-blue-400" />
    {:else}
      <input
        type="submit"
        value="Subscribe Now"
        class="p-2 bg-blue-600 cursor-pointer" />
    {/if}
  </div>
</form>
