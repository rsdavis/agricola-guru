<script>

    export let label = 'Label'
    export let score = 0

</script>

<div class='section-header'>
    <p>{label}</p>
    <p class='section-score'>{score}</p>
</div>

<style>

    .section-header {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid var(--grey);
        color: white;
    }

    .section-score {
        color: var(--grey);
    }

</style>