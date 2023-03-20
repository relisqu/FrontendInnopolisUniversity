<script lang="ts">
    import './app.css';
    import {base} from '$app/paths';
    import Socials from '$lib/socials.svelte';
</script>
<div id='page'> 
<header>
    <span id="head_footer_highlight">Relisqu</span>
    <nav>
      <a class="default_footer_text" href="{base}/">About me</a>
      <a class="default_footer_text" href="{base}/skills">Skills</a>
      <a class="default_footer_text" href="{base}/expr">Portfolio</a>
      <a class="default_footer_text" href="{base}/joke">Get joke</a>
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
<style>
        
    header {
        background-image: linear-gradient(45deg, #062c30 20%, transparent 20%);
        background-color: #05595b;
        box-shadow: 0px 0px 8px #062c30;
        text-align: center;
        font-family: "Ubuntu", sans-serif;
        font-size: 1.5em;
        color: #f5f5f5;
        display: grid;
        padding: 2%;
        grid-auto-flow: column;
        grid-column-gap: 15x;
    }



    #head_footer_highlight {
        text-align: left;
        font-weight: 200;
        font-size: larger;
        color: #f5f5f5;
    }

        
    .default_footer_text {
        text-align: right;
        font-weight: 100;
        font-size: larger;
        color: #e1ebe9;
    }
</style>