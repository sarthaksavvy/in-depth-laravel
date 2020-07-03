<script>
  import { store } from "../store";
  const contents = [
    {
      icon: "fas fa-layer-group",
      name: `${$store.course.chapters_count} Chapters`
    },
    { icon: "fas fa-play-circle", name: `${$store.course.items_count} Videos` },
    { icon: "fas fa-child", name: "Beginner" },
    {
      icon: "fas fa-clock",
      name: `${($store.course.duration / (60 * 60)).toFixed(2)} hour of content`
    },
    { icon: "fas fa-infinity", name: "Lifetime Access" },
    { icon: "fas fa-mobile", name: "Access anywhere" },
    { icon: "fas fa-project-diagram", name: "Real Project" },
    { icon: "fas fa-certificate", name: "Certificate" }
  ];
</script>

<div class="bg-gray-200 rounded-lg mx-2 md:mx-0">
  <p
    class="h-4 w-full"
    style="background-image:linear-gradient(to left,#ff00cc,#333399)" />
  {#each contents as content}
    <!-- {contents.map((content, i) => ( -->
    <div class="flex py-3 px-10 hover:text-blue-300">
      <div class="w-10 text-center">
        <i class={`text-2xl py-1 text-indigo-800 ${content.icon}`} />
      </div>
      <p class="mx-5 text-xl font-semibold text-gray-800">{content.name}</p>
    </div>
  {/each}
</div>
