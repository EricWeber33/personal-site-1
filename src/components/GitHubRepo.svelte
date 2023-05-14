<script lang='ts'>
  import Paper, {Title, Subtitle, Content} from "@smui/paper";
	import IconButton, { Icon } from "@smui/icon-button";

  export let repo:any;

  async function copy(text:string) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.log('Error copying', err);
    }
    return
  }

</script>

<div class='row'>
  <Paper class='tab-paper repo'>
    <Title>{repo.name}</Title>
    <Subtitle>
        {repo.sshUrl}
        <IconButton class="material-icons" size="button" on:click={() => copy(repo.sshUrl)}>content_copy</IconButton>
    </Subtitle>
    <Content>
      {#if repo.description}
        <p>{repo.description}</p>
      {/if}
      <p>
        {#each repo.languages.nodes as language }
         <Icon class="material-icons language-circle" style="color: {language.color};">circle</Icon>
         <span>{language.name}&nbsp;</span>
        {/each}
      </p>
    </Content>
  </Paper>
</div>

<style>
  .row {
    padding: 1em;
    display: inline-flex;
  }
  * :global(.repo) {
    width: 100%;
  }
  * :global(.language-circle) {
    font-size: 11px;
  }
  span {
    font-weight: bold;
  }
</style>