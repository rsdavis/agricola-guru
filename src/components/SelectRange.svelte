<script>

    import { onMount, createEventDispatcher } from "svelte";

    export let min = 0;
    export let max = 20;
    export let selected = min;

    let options = [];
    for (let i = min; i <= max; i++) options.push(i);
    let selectedRef = null;
    let optionsRef = null
    let sentinelRef = null
    const dispatch = createEventDispatcher()

    onMount(() => {
        optionsRef.addEventListener('scroll', () => {
            const { left, right } = sentinelRef.getBoundingClientRect()
            let n = optionsRef.children.length
            for (let i=0; i<n; i++) {
                const rect = optionsRef.children[i].getBoundingClientRect()
                const lx = rect.left
                const rx = rect.right
                if (lx < left && rx > right) {
                    selected = parseInt(optionsRef.children[i].innerHTML)
                    dispatch('select', { value: selected })
                    break;
                }
            }
        })
    })

    function increment() {
        selected += 1;
        optionsRef.scrollLeft += 60
        dispatch('select', { value: selected })
    }

    function decrement() {
        selected -= 1;
        optionsRef.scrollLeft -= 60
        dispatch('select', { value: selected })
    }

</script>

<style>
    .container {
        margin-top: 0.5em;

        display: flex;
        scroll-snap-type: x mandatory;
        align-items: center;
        position: relative;
    }

    .sentinel {
        position: absolute;
        left: calc(50% - 30px);
        width: 60px;
        height: 100%;
        z-index: -1;
    }

    .arrow {
        padding: 0;
        margin: 0;
        background: transparent;
        border: none;
        outline: none;
        color: var(--grey);
        height: 100%;
    }

    .left {
        text-align: left;
    }

    .options {
        flex-grow: 1;
        overflow: auto;
        scroll-snap-type: x mandatory;
        white-space: nowrap;
    }


    .option {
        padding: 10px 30px;
        scroll-snap-align: center;
        background: transparent;
        outline: none;
        border: none;
        display: inline-block;
        color: var(--grey);
        min-width: 3em;
        border-radius: 3em;
    }

    .option:first-child {
        margin-left: 50%;
    }

    .option:last-child {
        margin-right: 50%;
    }

    .active {
        background-color: white;
        color: var(--green-bright);
    }

    .options::-webkit-scrollbar {
        display: none;
    }

    .options {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
</style>

<div class="container">

    <button class="left arrow" on:click={decrement} disabled={selected === min}>
        &#60;
    </button>

    <div class="options" bind:this={optionsRef}>

        {#each options as option}
            {#if option === selected}
                <button class="active option" bind:this={selectedRef}>
                    {option}
                </button>
            {:else}
                <button class="option">{option}</button>
            {/if}
        {/each}
    </div>

    <button class="right arrow" on:click={increment} disabled={selected === max}>&#62;</button>

    <div class='sentinel' bind:this={sentinelRef}></div>

</div>
