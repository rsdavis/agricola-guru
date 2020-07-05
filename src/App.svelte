
<script>

    import SectionHeader from './components/SectionHeader.svelte'
    import SelectNumerical from './components/SelectNumerical.svelte'
    import Select from './components/Select.svelte'
    import SelectRange from './components/SelectRange.svelte'

    let familyScore
    let roomType
    let roomCount
    let fieldScore
    let pastureScore
    let unusedScore
    let grainScore
    let vegScore
    let sheepScore
    let boarScore
    let cattleScore
    let stableScore

    $: roomScore = roomType * roomCount
    $: totalScore = familyScore + roomScore
        + fieldScore + pastureScore
        + unusedScore + stableScore
        + grainScore + vegScore
        + sheepScore + boarScore + cattleScore

    function setDefaults () {
        familyScore = 6
        roomType = 0
        roomCount = 2
        fieldScore = -1
        pastureScore = -1
        unusedScore = 0
        grainScore = -1
        vegScore = -1
        sheepScore = -1
        boarScore = -1
        cattleScore = -1
        stableScore = 0
    }

    setDefaults()

</script>

<main>

    <div class='content'>
        <section>

            <SectionHeader
                label='Family Members'
                score={familyScore}
            />

            <Select
                options={[
                    { label: '2', value: 6 },
                    { label: '3', value: 9 },
                    { label: '4', value: 12 },
                    { label: '5', value: 15 }
                ]}
                selected={familyScore}
                on:select={e => familyScore = e.detail.value}
            />

        </section>

        <section>
            <SectionHeader
                label='Rooms'
                score={roomScore}
            />
            <Select
                options={[
                    { label: 'wood', value: 0 },
                    { label: 'clay', value: 1 },
                    { label: 'stone', value: 2 }
                ]}
                selected={roomType}
                on:select={e => roomType = e.detail.value}
            />
            <Select
                options={[
                    { label: '2', value: 2 },
                    { label: '3', value: 3 },
                    { label: '4', value: 4 },
                    { label: '5', value: 5 },
                    { label: '6', value: 6 },
                    { label: '7', value: 7 }
                ]}
                selected={roomCount}
                on:select={e => roomCount = e.detail.value}
            />
        </section>

        <section>
            <SectionHeader
                label='Fields'
                score={fieldScore}
            />
            <Select
                options={[
                    { label: '0-1', value: -1 },
                    { label: '2', value: 1 },
                    { label: '3', value: 2 },
                    { label: '4', value: 3 },
                    { label: '5+', value: 4 }
                ]}
                selected={fieldScore}
                on:select={ e => fieldScore = e.detail.value }
            />
        </section>

        <section>
            <SectionHeader
                label='Pastures'
                score={pastureScore}
            />
            <Select
                options={[
                    { label: '0', value: -1 },
                    { label: '1', value: 1 },
                    { label: '2', value: 2 },
                    { label: '3', value: 3 },
                    { label: '4+', value: 4 },
                ]}
                selected={pastureScore}
                on:select={ e => pastureScore = e.detail.value }
            />
        </section>

        <section>
            <SectionHeader
                label='Unused Spaces'
                score={unusedScore}
            />
            <SelectRange
                min={0}
                max={20}
                selected={0}
                on:select={ e => unusedScore = -e.detail.value }
            />
        </section>

        <section>
            <SectionHeader
                label='Fenced stables'
                score={stableScore}
            />
            <Select
                options={[
                    { label: '0', value: 0 },
                    { label: '1', value: 1 },
                    { label: '2', value: 2 },
                    { label: '3', value: 3 },
                    { label: '4', value: 4 },
                ]}
                selected={stableScore}
                on:select={ e => stableScore = e.detail.value }
            />
        </section>

        <section>
            <SectionHeader
                label='Grain'
                score={grainScore}
            />
            <Select
                options={[
                    { label: '0', value: -1 },
                    { label: '1-3', value: 1 },
                    { label: '4-5', value: 2 },
                    { label: '6-7', value: 3 },
                    { label: '8+', value: 4 }
                ]}
                selected={grainScore}
                on:select={ e => grainScore = e.detail.value }
            />
        </section>

        <section>
            <SectionHeader
                label='Vegetables'
                score={vegScore}
            />
            <Select
                options={[
                    { label: '0', value: -1 },
                    { label: '1', value: 1 },
                    { label: '2', value: 2 },
                    { label: '3', value: 3 },
                    { label: '4+', value: 4 }
                ]}
                selected={vegScore}
                on:select={ e => vegScore = e.detail.value }
            />
        </section>

        <section>
            <SectionHeader
                label='Sheep'
                score={sheepScore}
            />
            <Select
                options={[
                    { label: '0',   value: -1 },
                    { label: '1-3', value: 1 },
                    { label: '4-5', value: 2 },
                    { label: '6-7', value: 3 },
                    { label: '8+',  value: 4 }
                ]}
                selected={sheepScore}
                on:select={ e => sheepScore = e.detail.value }
            />
        </section>

        <section>
            <SectionHeader
                label='Boar'
                score={boarScore}
            />
            <Select
                options={[
                    { label: '0',   value: -1 },
                    { label: '1-2', value: 1 },
                    { label: '3-4', value: 2 },
                    { label: '5-6', value: 3 },
                    { label: '7+',  value: 4 }
                ]}
                selected={boarScore}
                on:select={ e => boarScore = e.detail.value }
            />
        </section>

        <section>
            <SectionHeader
                label='Cattle'
                score={cattleScore}
            />
            <Select
                options={[
                    { label: '0',   value: -1 },
                    { label: '1',   value: 1 },
                    { label: '2-3', value: 2 },
                    { label: '4-5', value: 3 },
                    { label: '6+',  value: 4 }
                ]}
                selected={cattleScore}
                on:select={ e => cattleScore = e.detail.value }
            />
        </section>
    </div>

    <footer>
        <button on:click={setDefaults}>Reset</button>
        <div class='total-score'>{ totalScore }</div>
    </footer>
</main>

<style>

    main {
        width: 100%;
        height: 100%;
        max-width: 600px;
        margin: 0 auto;
    }

    .content {
        position: fixed;
        width: 100%;
        max-width: 600px;
        overflow: auto;
        background-color: var(--green-dark);
        height: calc(100% - 120px);
        padding: 1em;
        margin: 0 auto;
    }

    section + section {
        margin-top: 3em;
    }

    footer {
        position: fixed;
        height: 120px;
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        border-top: 2px solid white;
        bottom: 0;
        padding: 1em 1em;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    footer button {
        background: transparent;
        border: none;
        outline: none;
        background-color: var(--green-bright);
        color: white;
        padding: 0.7em;
        min-width: 3em;
        border-radius: 3em;
    }

    .total-score {
        font-size: 4rem;
        font-weight: 400;
    }

</style>