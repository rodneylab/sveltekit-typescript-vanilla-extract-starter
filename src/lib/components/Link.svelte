<script lang="ts">
  export let rel: string = '';
  export let target: string = '';
  export let href: string;
  export let ariaLabel: string;
</script>

<a aria-label={ariaLabel} {href} {rel} {target}><slot /></a>
