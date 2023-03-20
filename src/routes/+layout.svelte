<script lang="ts">
    import './app.css';
    import {base} from '$app/paths';
    import Socials from '$lib/socials.svelte';
</script>
<div id='page'> 
<header>
    <span id="head_highlight">Relisqu</span>
    <span class="default" id="game">game dreamer⭐</span>
    <nav>
      <a class="default" href="{base}/">About me</a>
      <a class="default" href="{base}/skills">Skills</a>
      <a class="default" href="{base}/expr">Portfolio</a>
      <a class="default" href="{base}/joke">Get joke</a>
    </nav>
</header>
<main>
    <div class="main-information">
        <slot />
    </div>
    
</main>
<footer>
    <Socials />
</footer>
</div>