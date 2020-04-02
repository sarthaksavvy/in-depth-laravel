<script>
  import Tailwindcss from "./Tailwindcss.svelte";
  import Home from './Pages/Home.svelte';
  import ThankYou from './Pages/ThankYou.svelte';
  import Notify from "./Notify/NotifyComponent.svelte";
  import { Router, Link, Route } from "svelte-routing";

  export let url = "";
</script>

<style>

</style>

<main>
  <Notify />
  <Router url="{url}">
    <Route path="/"><Home /></Route>
    <Route path="/thank-you"><ThankYou /></Route>
  </Router>
</main>
