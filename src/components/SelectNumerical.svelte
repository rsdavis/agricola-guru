

<script>

    import { createEventDispatcher } from 'svelte'

    export let values = []
    export let selected = null

    const dispatch = createEventDispatcher()

    function handleClick (value) {
        dispatch('select', { value })
    }
</script>


<div>
    { #each values as value }
        <button
            on:click={handleClick.bind(null,value)}
            class={value===selected ? 'active' : ''}
        >{ value }</button>
    { /each }
</div>


<style>

    div {
        display: flex;
        justify-content: space-between;
        padding: 0 5%;
        margin-top: 0.5em;
    }

    button {
        background: transparent;
        border: none;
        outline: none;
        height: 3rem;
        width: 3rem;
        border-radius: 3rem;
        text-align: center;
        padding: 0;
        color: white;
    }

    button:hover {
        cursor: pointer;
    }

    .active {
        background-color: white;
        color: var(--green-bright);
    }

</style>