<script>
  import { message, type, visibleFor, pos, anim } from "./store.js";
  import { fade, fly } from "svelte/transition";

  let msg, className, position, flyIn;

  message.subscribe(value => (msg = value));
  type.subscribe(value => (className = value ? value : "normal"));
  pos.subscribe(value => (position = value));
  anim.subscribe(value => (flyIn = value));
</script>

<style>
  .content {
    padding: 0.75rem;
    margin: 0.75rem;
    border-radius: 0.25rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    max-width: 32rem;
  }
  .success {
    background-color: #38a169;
  }
  .error {
    background-color: #e53e3e;
  }
  .warning {
    background-color: #d69e2e;
  }
  .info {
    background-color: #718096;
  }
  .normal {
    color: #000;
    background-color: #fff;
  }
  .box {
    z-index: 111;
    position: fixed;
    color: #fff;
    display: flex;
  }
  .top {
    top: 0;
  }
  .bottom {
    bottom: 0;
  }
  .center {
    right: 0;
    left: 0;
    justify-content: center;
  }
  .left {
    left: 0;
  }
  .right {
    right: 0;
  }
</style>

<div class="box {position}">
  {#if msg !== null}
    <p class="content {className}" in:fly={flyIn} out:fade>{msg}</p>
  {/if}
</div>
