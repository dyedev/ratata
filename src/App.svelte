<script lang="ts">
  import Header from "./Header.svelte";
  import InstanceCard from "./InstanceCard.svelte";
</script>

<div class="flex flex-col md:flex-row h-screen bg-zinc-950 p-4">
  <Header />
  <main class="flex-1 overflow-auto p-4">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-lg md:text-2xl text-white font-semibold">Instances</h1>
      <button
        class="text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 fixed bottom-4 right-4 bg-[#238636] text-white hover:bg-emerald-600 rounded-full h-12 w-12 flex items-center justify-center"
      >
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
          class="h-6 w-6"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5v14"></path>
        </svg>
      </button>
    </div>
    <div class="grid gap-4 grid-cols-1">
      <InstanceCard />
      <InstanceCard />
      <InstanceCard />
    </div>
  </main>
</div>
