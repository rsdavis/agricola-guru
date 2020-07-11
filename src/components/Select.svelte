
<script>

    import { createEventDispatcher } from 'svelte'

    export let options = [{ label: 'L', value: 1 }]
    export let selected = 1

    const dispatch = createEventDispatcher()

    function handleClick (option) {
        dispatch('select', option)
    }

</script>

<div>

    { #each options as option }
        <button
            on:click={handleClick.bind(null,option)}
            class={option.value===selected ? 'active' : ''}
        >{ option.label }</button>
    { /each }

</div>

<style>
    div {
        display: flex;
        justify-content: space-between;
        margin-top: 0.5em;
    }

    button {
        background: transparent;
        border: none;
        outline: none;
        height: 3rem;
        line-height: 3rem;
        min-width: 3em;
        border-radius: 3rem;
        text-align: center;
        padding: 0 0.5em;
        color: var(--grey);
        vertical-align: middle;
    }

    button:hover {
        cursor: pointer;
    }

    .active {
        background-color: white;
        color: var(--green-dark);
    }
</style>