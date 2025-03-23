<script lang="ts">
  import { Menu, X } from "@lucide/svelte";
  let isSidebarOpen = false;

  const toggleSidebar = () => {
    isSidebarOpen = !isSidebarOpen;
  };
</script>

<!-- Navigation button for mobile -->
<button
  class="md:hidden text-white w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center"
  on:click={toggleSidebar}
>
  <Menu />
</button>

<!-- Backdrop for mobile -->
{#if isSidebarOpen}
  <div class="backdrop md:hidden" on:click={toggleSidebar}></div>
{/if}

<aside
  class="
  md:relative
  fixed
  top-0 left-0 h-full
  top-0 left-0 h-full w-60 bg-zinc-950 border-r border-zinc-800 p-5 flex flex-col justify-between md:block z-10 mobile-sidebar {isSidebarOpen
    ? 'open'
    : ''}
  "
>
  <button
    class="absolute top-4 right-4 text-white md:hidden"
    on:click={toggleSidebar}
  >
    <X class="h-6 w-6" />
  </button>

  <div>
    <div class="flex items-center space-x-2 mb-6">
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
        class="h-8 w-8 text-sky-300"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
      </svg>
      <span class="text-sky-300 font-black">
        Dye Cloud
        <p class="text-zinc-400 font-bold text-xs">Powered by Ratata</p>
      </span>
    </div>
    <nav class="text-white">
      <ul>
        <li class="mb-2">
          <a
            class="flex items-center space-x-2 p-2 rounded hover:bg-zinc-900"
            href="#"
            rel="ugc"
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
              class="h-5 w-5"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>Dashboard</span>
          </a>
        </li>
        <li class="mb-2">
          <a
            class="flex items-center space-x-2 p-2 rounded bg-zinc-900 relative"
            href="#"
            rel="ugc"
          >
            <div
              class="absolute bg-sky-300 px-[2.5px] py-3 rounded-full -left-0.5"
            ></div>
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
              class="h-5 w-5"
            >
              <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
              <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
              <line x1="6" x2="6.01" y1="6" y2="6"></line>
              <line x1="6" x2="6.01" y1="18" y2="18"></line>
            </svg>
            <span>Instances</span>
          </a>
        </li>
        <li class="mb-2">
          <a
            class="flex items-center space-x-2 p-2 rounded hover:bg-zinc-900"
            href="#"
            rel="ugc"
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
              class="h-5 w-5"
            >
              <path
                d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"
              ></path>
              <path d="m18 2 4 4-4 4"></path>
              <path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2"></path>
              <path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"></path>
              <path d="m18 14 4 4-4 4"></path>
            </svg>
            <span>Reverse Proxies</span>
          </a>
        </li>
        <li class="mb-2">
          <a
            class="flex items-center space-x-2 p-2 rounded hover:bg-zinc-900"
            href="#"
            rel="ugc"
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
              class="h-5 w-5"
            >
              <rect x="16" y="16" width="6" height="6" rx="1"></rect>
              <rect x="2" y="16" width="6" height="6" rx="1"></rect>
              <rect x="9" y="2" width="6" height="6" rx="1"></rect>
              <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
              <path d="M12 12V8"></path>
            </svg>
            <span>Nodes</span>
          </a>
        </li>
        <li class="mb-2">
          <a
            class="flex items-center space-x-2 p-2 rounded hover:bg-zinc-900"
            href="#"
            rel="ugc"
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
              class="h-5 w-5"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
              <circle cx="9" cy="9" r="2"></circle>
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
            </svg>
            <span>Image Servers</span>
          </a>
        </li>
        <li class="mb-2">
          <a
            class="flex items-center space-x-2 p-2 rounded hover:bg-zinc-900"
            href="#"
            rel="ugc"
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
              class="h-5 w-5"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span>Users</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</aside>

<style>
  /* Hide sidebar by default on mobile */
  .mobile-sidebar {
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
  }

  .mobile-sidebar.open {
    transform: translateX(0);
  }

  .backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }

  /* Always show sidebar on larger screens */
  @media (min-width: 768px) {
    .mobile-sidebar {
      transform: translateX(0);
    }

    .backdrop {
      display: none;
    }
  }
</style>
