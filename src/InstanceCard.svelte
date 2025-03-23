<script lang="ts">
  import { formatMegabytes } from "./lib/format.ts";

  export let server = {
    name: "Development",
    description: "Dye Ratata development server",
    cpu: 20,
    memory: 151,
    disk: 1200,
    tags: ["running", "container"],
  };
</script>

<div
  class="flex flex-wrap md:grid-cols-2 gap-4 bg-zinc-900 border border-zinc-800 p-2 md:p-4 rounded-lg hover:border-zinc-600 transition-colors duration-200 ease-in-out cursor-pointer p-4"
>
  <div class="flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="text-[#58a6ff] h-8 w-8 mr-2"
    >
      <path
        d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"
      ></path>
    </svg>
    <div class="ml-2">
      <div class="flex">
        <h2 class="text-white font-semibold">
          {server.name}
        </h2>
      </div>
      <p class="text-zinc-400 text-sm">{server.description}</p>
    </div>
  </div>
  <div class="flex items-center justify-between md:justify-end">
    {#each server.tags as tag (tag)}
      {@const lowerTag = tag.toLowerCase()}
      <div
        class="
        inline-flex items-center rounded-full
        border transition-colors focus:outline-none
        focus:ring-2 focus:ring-ring focus:ring-offset-2
        border-transparent hover:bg-secondary/80
        text-xs pointer-events-none font-bold
        px-2 py-1 mr-2
        {lowerTag === 'running' ? 'bg-green-500 text-black' : ''}
        {lowerTag === 'stopped' ? 'bg-red-500 text-black' : ''}
        {lowerTag !== 'running' && lowerTag !== 'stopped'
          ? 'bg-sky-500 text-black'
          : ''}
        "
      >
        {tag.toUpperCase()}
      </div>
    {/each}
  </div>
  <!-- Hide extra information on small screens -->
  <div
    class="flex space-x-4 md:space-x-8 text-sm text-zinc-400 font-semibold
    hidden lg:flex lg:items-center lg:justify-end"
    class:opacity-50={server.tags.includes("stopped")}
    class:opacity-100={server.tags.includes("running")}
  >
    <div class="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-5 w-5 mr-2 text-green-500"
      >
        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
        <rect x="9" y="9" width="6" height="6"></rect>
        <path d="M15 2v2"></path>
        <path d="M15 20v2"></path>
        <path d="M2 15h2"></path>
        <path d="M2 9h2"></path>
        <path d="M20 15h2"></path>
        <path d="M20 9h2"></path>
        <path d="M9 2v2"></path>
        <path d="M9 20v2"></path>
      </svg>
      <span>
        <p class="text-zinc-400 text-xs font-bold">CPU</p>
        {server.cpu}%
      </span>
    </div>
    <div class="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-5 w-5 mr-2 text-yellow-500"
      >
        <path d="M6 19v-3"></path>
        <path d="M10 19v-3"></path>
        <path d="M14 19v-3"></path>
        <path d="M18 19v-3"></path>
        <path d="M8 11V9"></path>
        <path d="M16 11V9"></path>
        <path d="M12 11V9"></path>
        <path d="M2 15h20"></path>
        <path
          d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"
        ></path>
      </svg>
      <span>
        <p class="text-zinc-400 text-xs font-bold">Memory</p>
        {formatMegabytes(server.memory)}
      </span>
    </div>
    <div class="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-5 w-5 mr-2 text-red-500"
      >
        <line x1="22" x2="2" y1="12" y2="12"></line>
        <path
          d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
        ></path>
        <line x1="6" x2="6.01" y1="16" y2="16"></line>
        <line x1="10" x2="10.01" y1="16" y2="16"></line>
      </svg>
      <span>
        <p class="text-zinc-400 text-xs font-bold">Disk</p>
        {formatMegabytes(server.disk, false)}
      </span>
    </div>
  </div>
</div>
