<script lang="ts">
  import Link from '$lib/components/Link.svelte';

  export let rel: string = 'nofollow noopener noreferrer';
  export let target: string = '_blank';
  export let href: string;
  export let ariaLabel: string;
</script>

<Link {ariaLabel} {href} {rel} {target}><slot /></Link>
