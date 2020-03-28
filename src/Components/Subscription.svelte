<script>
  import axios from "axios";
  import { getNotificationsContext } from "svelte-notifications";

  const { addNotification } = getNotificationsContext();
  let email;
  let titleSound;
  let loading = false;

  const playSound = sound => {
    sound.volume = 0.2;
    sound.play();
  };

  function handleForm(e) {
    e.preventDefault();
    if(loading || email == null){
      return;
    } 

    axios.defaults.withCredentials = true;
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer EgJQ11V8NDmKTfM6Z2qakrnJ4aE0eCv4jxAmkDSnBk10b0WO1ZSDC15iSJFgNnF0tMVf5Q57JeY9tREH`;

    loading = true;
    axios
      .post(`${process.env.API_URL}/in-depth-laravel/member/subscribe`, {
        name: email,
        email: email
      })
      .then(res => {
        playSound(titleSound);
        addNotification({
          text: "Cool 😎, now check your inbox 📩 to complete subscription.",
          position: "top-center",
          type: "success",
          removeAfter: 5000
        });
        loading = false;
      })
      .catch(e => {
        addNotification({
          text: "Something went wrong 😕",
          position: "top-center",
          type: "danger"
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

<audio bind:this={titleSound}>
  <source src="sounds/welcome.mp3" />
  Your browser isn't invited for super fun audio time.
</audio>
