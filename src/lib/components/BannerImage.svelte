<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { Image } from '@rodneylab/sveltekit-components';

  export let imageData: {
    alt: string;
    width: number;
    height: number;
    src: string;
    sources: { srcset: string; type: string }[];
    placeholder: string;
  };

  onMount(() => {
    if (browser) {
      document.lazyloadInstance.update();
    }
  });

  const { alt, width, height, src, sources, placeholder } = imageData;
  const sizes = '(max-width: 672px) calc(100vw - 32px), 672px';
</script>

<Image
  {alt}
  {width}
  loading="eager"
  importance="high"
  {height}
  {src}
  {sources}
  {placeholder}
  {sizes}
  style={'border-radius:12px;margin-bottom:48px;width:100%'}
/>
