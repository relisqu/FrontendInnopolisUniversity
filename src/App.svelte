<script lang="ts">
  import Desc from './lib/description.svelte';
  import Jokes from './lib/jokes.svelte';
  import Skills from './lib/skills.svelte';
  import Experience from './lib/experience.svelte';
  import Socials from './lib/socials.svelte';
</script>

<main>
  
  <div class="main-information">
    <Desc> </Desc>
    
    <div class="wrapper">
      <Skills> </Skills>
      <Experience> </Experience>
    </div>
  
    <Socials> </Socials>
    <Jokes> </Jokes>

  </div>
</main>
