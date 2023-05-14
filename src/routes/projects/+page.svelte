<script lang='ts'>
  import TabContent from '../../components/TabContent.svelte';
  import GitHubRepo from '../../components/GitHubRepo.svelte';
  import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  import Paper, { Title, Subtitle, Content } from '@smui/paper';

  /** @type {import('./$types').PageData} */
  export let data:any;
  $:data;
  let active = 'Projects';
</script>


<TabBar class='rounded-tab-bar'tabs={['Projects', 'Github Feed']} let:tab bind:active>
  <Tab {tab}>
    <Label>{tab}</Label>
  </Tab>
</TabBar>
{#if active === 'Projects'}
  <TabContent>
    <div class='tab-content-row'>
      <Paper class='tab-paper'>
        <Title>Communakit App</Title>
        <Subtitle>CMPUT 401</Subtitle>
        <Content>
          App developed in my software processes and management class in partnership with Communaki,
          an Edmonton based startup that makes speach therapy kits for children. This app
          is a cross-platform mobile app that acts as a companion to their core product line.
          allowing educators to conveniently do lessons and track learning progress with their students.
          I was the main backend developer as well as the product owner for this project. 
          <br>
          <br>
          <b>Technologies Used:</b> Django-rest-framework, postgresql, flutter. 
          <br>
          <br>
          <a href='https://www.youtube.com/watch?v=89Uiz_qxB6k'>Watch the screencast</a>
          <br>
          <a href='https://cmput401.ca/projects/6dfd54f3-7e8b-4c5a-a395-1afe14b8e061'>More info</a>
          <br>
          <a href='https://communakit.com/'>communakits site</a>
        </Content>
      </Paper>
      <img src='communakit.png' alt='left side: "Helping educators and parents assist children in all areas of speach therapy", right side: Communakit app lessons screen'/>
    </div>
  </TabContent>
{:else if active === 'Github Feed'}
  <TabContent>
    {#each data.repositories as repo}
      <GitHubRepo repo={repo}/>
    {/each}
  </TabContent>
{/if}

<style lang='scss'>
  .tab-content-row {
    padding: 1em;
    display: inline-flex;
  }
  .tab-content-row img{
    max-height: 250px;
    width: auto;
    position: relative;
    margin-left: 2em;
    right: 0;
    border-radius: 5px;
    align-self: center;
  }

</style>