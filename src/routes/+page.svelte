<script lang="ts">
  import TabContent from '../components/TabContent.svelte';
  import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  import Paper, { Title, Subtitle, Content } from '@smui/paper';

  let active = 'Experience';
</script>

<TabBar class='rounded-tab-bar'tabs={['Experience', 'Education', 'Interests']} let:tab bind:active>
  <Tab {tab}>
    <Label>{tab}</Label>
  </Tab>
</TabBar>
{#if active === 'Experience'}
  <TabContent>
    <div class='tab-content-row'>
      <Paper class='tab-paper'>
        <Title>Software Developer Intern</Title>
        <Subtitle>HCL / Dell-EMC</Subtitle>
        <Content>
          <b>VPLEX project:</b> Worked on UI for a mature enterprise level storage-virtualization and protection product.
          <ul>
            <li> Developed web-GUI as well as CLI features. </li>
            <li>Ensured software quality by writing unit, integration, system, and acceptance tests. </li>
            <li> Maintained testing infrastructure used by multiple teams. </li>
          </ul>
        </Content>
      </Paper>
      <img src="vplex.jfif" alt="diagram of VPLEX data logical layout"/>
    </div>
  </TabContent>
{:else if active === 'Education'}
  <TabContent>
    <div class='tab-content-row'>
      <Paper class='tab-paper'>
        <Title>University of Alberta</Title>
        <Subtitle>Bsc Computing Science 2018-2023</Subtitle>
        <Content><b>Relevant Coursework:</b> Web development, software quality and testing, software 
          development processes and product management, operating systems concepts.
        </Content>
      </Paper>
    </div>
  </TabContent>
{:else if active === 'Interests'}
  <TabContent>
    <div class='tab-content-row'>
      <Paper class='tab-paper'>
        <Title>Climbing</Title>
        <Content>
          I started rock climbing towards in April of 2022. In my first few sessions it seemed impossible to do many of the routes set up. However, upon seeing other people in the gym complete these routes, with what seemed like super-human strength and technique, I was inspired. Over the following few months I would go climbing every second day and saw quick improvement. With the beginning of school again in the fall I began climbing less frequently. Although I do not go as often as when I began if you spend any amount of time at the Wilson Climbing center or Boulders it is likely that you will see me.  
        </Content>
      </Paper>
      <img src='climbing.jpg' alt='man climbing an indoor bouldering route'/>
    </div>
    <div class='tab-content-row'>
      <Paper class='tab-paper'>
        <Title>Soccer</Title>
        <Content>
          I have spent the greater part of my life playing rec-league soccer, throughout my youth I would play in the EMSA community league through which I have made several lifelong friends. After a brief hiatus I have returned to playing soccer with a couple of friends with the ESSC. My favourite position is center-back as I enjoy being the second-last line of defense (and also have next to zero offensive instincts).
        </Content>
      </Paper>
    </div>
    <div class='tab-content-row'>
      <img class='left-image' src='clock_tower_1.png' alt='A clock tower and town built in Minecraft'/>
      <Paper class='tab-paper'>
        <Title>Games</Title>
        <Content>
          Since I was a child I have enjoyed a variety of games. I remember in my early years of elementary school playing games like Sim-City 2000 and the X-Wing series on an old computer. As I grew into adulthood I continued to enjoy a variety of games including sandbox games like Minecraft and Cities Skylines as well as strategy games including Stellaris and Civilization.
        </Content>
      </Paper>
    </div>
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

  .tab-content-row .left-image {
    margin-left: 0;
    margin-right: 2em;
  }
  * :global(.rounded-tab-bar) {
    background: #ffffff;
    border-radius: 15px 15px 0px 0px;
  }
  * :global(.tab-paper) {
    background: rgba(255,255,255,0.6);
    height: 100%;
  }
  * :global(.mdc-tab__text-label) {
    color: black;
  }
</style>
