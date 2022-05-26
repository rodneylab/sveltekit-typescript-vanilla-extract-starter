<script lang="ts">
  import Icon, { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

  export let label: string = 'Light mode icon';
  export let colour: string = 'inherit';
  export let ariaHidden: boolean = false;
  export let width: number = 16;

  addCollection({
    prefix: 'heroicons-outline',
    icons: {
      sun: {
        body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z"/>',
      },
    },
    width: 24,
    height: 24,
  });

  // https://api.iconify.design/heroicons-outline.json?icons=sun
</script>

<Icon icon="heroicons-outline:sun" {ariaHidden} aria-label={label} color={colour} {width} />
