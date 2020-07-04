<script>
    let min = 0;
    let max = 100;
    let selected = 10;
    let options = [];
    for (let i = min; i < max; i++) options.push(i);
    let selectedRef = null;

    $: selectedRef && selectedRef.scrollIntoView(false, { inline: "center" });

    function increment() {
        selected += 1;
    }
    function decrement() {
        selected -= 1;
    }
    function select(value) {
        selected = value
    }
</script>

<style>
    .container {
        display: flex;
        border: 1px solid black;
        scroll-snap-type: x mandatory;
        align-items: center;
    }

    .arrow {
        padding: 1em;
        margin: 0;
        background: transparent;
        border: none;
        outline: none;
    }

    .options {
        flex-grow: 1;
        display: flex;
        overflow: auto;
        scroll-snap-type: x mandatory;
    }

    .option {
        padding: 30px;
        scroll-snap-align: start;
        background: transparent;
        outline: none;
        border: none;
    }

    .active {
        color: red;
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

    <div class="options">
        {#each options as option}
            {#if option === selected}
                <button class="active option" bind:this={selectedRef}>
                    {option}
                </button>
            {:else}
                <button class="option"  on:click={select.bind(null,option)}>{option}</button>
            {/if}
        {/each}
    </div>

    <button class="right arrow" on:click={increment}>&#62;</button>
</div>
