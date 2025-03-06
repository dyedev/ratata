<script lang="ts">
</script>

<div class="flex flex-col md:flex-row h-screen bg-zinc-950">
  <aside
    class="md:hidden bg-zinc-900/30 border-b border-zinc-800 p-5 flex justify-between items-center"
  >
    <div class="flex items-center space-x-2">
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
        class="h-8 w-8 text-white"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
      </svg>
      <span class="text-white font-bold">Dye Cloud</span>
    </div>
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
      class="h-5 w-5 text-white"
    >
      <line x1="4" x2="20" y1="12" y2="12"></line>
      <line x1="4" x2="20" y1="6" y2="6"></line>
      <line x1="4" x2="20" y1="18" y2="18"></line>
    </svg>
  </aside>
  <aside
    class="hidden md:block w-60 bg-zinc-900/30 border-r border-zinc-800 p-5 flex flex-col justify-between"
  >
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
  <main class="flex-1 p-4 md:p-6 overflow-auto">
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
    <div
      class="grid md:grid-cols-2 gap-4 bg-zinc-900 border border-zinc-800 p-2 md:p-4 rounded-lg hover:bg-zinc-800 hover:border-zinc-600 transition-colors duration-200 ease-in-out cursor-pointer"
    >
      <div class="flex items-center mb-2 pt-2 pl-2.5">
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
          class="h-4 w-4 text-[#58a6ff] mr-3"
        >
          <path
            d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"
          ></path>
        </svg>
        <div class="ml-2">
          <h2 class="text-white font-semibold">
            Development
            <div
              class="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-secondary-foreground hover:bg-secondary/80 ml-1.5 py-0 bg-green-500 px-1 text-[8px] pointer-events-none font-bold"
            >
              RUNNING
            </div>
            <div
              class="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-sky-300 py-0 px-1 ml-1.5 text-[8px] text-sky-900 pointer-events-none font-bold"
            >
              CONTAINER
            </div>
          </h2>
          <p class="text-zinc-400 text-sm">Dye Ratata development D-VPS</p>
        </div>
      </div>
      <div
        class="flex items-center justify-between text-white space-x-2 mb-2 md:mb-0 px-1 md:px-0"
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
            20%
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
            151mb
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
            1.2gb
          </span>
        </div>
        <button
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border hover:text-accent-foreground h-10 px-4 py-2 bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-600 transition-colors duration-200 ease-in-out"
        >
          Manage
        </button>
      </div>
    </div>
  </main>
</div>
