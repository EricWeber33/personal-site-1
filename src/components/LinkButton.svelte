<script lang='ts'>
  import Button, {Label} from "@smui/button";
  export let link:string;
  export let linkText:string;
  import { goto } from '$app/navigation';
</script>

<Button style="background:#ffffffc0; margin-left: 2em; padding-left: 1em; padding-right: 1em;" on:click={() => {goto(link)}}>
  <Label>{linkText}</Label>
</Button>

