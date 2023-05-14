<script lang="ts">

</script>


<div class="tab-parent">
    <div class="tab-content" id="tab-content">
        <slot></slot>
    </div>
</div>



<style>
    .tab-parent {
        padding: 0;
        margin: 0;
        border-radius: 0 0 15px 15px;
        overflow: hidden;
    }
    .tab-content {
        background: rgba(255,255,255, 0.4);
        height: 100%;
        min-height: 400px;
        max-height: 400px;
        padding: 1em;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
    }

</style>