<script>
  import AppBar from '../components/AppBar.svelte';
  import Credits from '../components/Credits.svelte';
</script>

<AppBar/>
<div class='main-content'>
  <div class='hero'>
    <div class='hero-img-wrapper'>
      <div class='hero-border'>
        <div>
          <div>
            <div>
              <img src='posing-abandoned-train-car.jpg' alt='Eric Weber posing in an abandoned train-car'/>
            </div>
          </div>
        </div>
      </div>
    </div> <!-- end of image wrapper-->
    <div class='hero-text'>
      <div class='hero-text-wrapper'>
        <h1>Eric Weber</h1>
        <p>
          Hello! I am an asipiring software developer and recent graduate of the University of Alberta.
          I enjoy many areas of software development including both backend and frontend coding.
        </p>
      </div>
    </div>
  </div>
  <slot/>
  <Credits/>
</div>

<style>
  .main-content {
    width: 75%;
    margin: auto;
  }
  .hero {
    margin-top: 3em;
    margin-bottom: 3em;
    border: 15px;
    display: flex;
  }
  .hero-img-wrapper {
    display: inline-flex;
  }
  .hero-img-wrapper img {
    height: 400px;
    width: 320px;
    border-radius: 15px;
  }
  .hero-border {
    width:400px;
    height: 400px;
    background-color: #50eeb7;
    border-radius: 15px;
    justify-content: right;
  }
  .hero-border div {
    width: 380px;
    height: 400px;
    border-radius: 15px;
    background-color: rgb(125, 255, 116);
  }
  .hero-border div div{
    width: 360px;
    height: 400px;
    border-radius: 15px;
    background-color: rgb(189, 255, 103);
  }
  .hero-border div div div {
    width: 340px;
    height: 400px;
    border-radius: 15px;
    background-color: rgb(255, 255, 82);
  }
  .hero-text {
    margin-left: 2.5em;
    font-family: Roboto;
    width: 100%;
    position: relative;
  }
  .hero-text-wrapper {
    position: absolute;
    bottom: 0;
  }
  .hero-text h1 {
    font-size: 2.5em;
  }

  .hero-text p {
    margin-bottom: 0;
    font-size: 1.125em;
    font-weight: bold;
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