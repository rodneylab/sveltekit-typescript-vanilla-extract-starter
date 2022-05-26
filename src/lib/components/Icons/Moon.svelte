<script lang="ts">
  import Icon, { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

  export let label: string = 'Light mode icon';
  export let colour: string = 'inherit';
  export let ariaHidden: boolean = false;
  export let width: number = 16;

  addCollection({
    prefix: 'heroicons-outline',
    icons: {
      moon: {
        body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 0 1 8.646 3.646A9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646Z"/>',
      },
    },
    width: 24,
    height: 24,
  });

  // https://api.iconify.design/heroicons-outline.json?icons=moon
</script>

<Icon icon="heroicons-outline:moon" {ariaHidden} aria-label={label} color={colour} {width} />
