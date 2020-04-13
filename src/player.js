class Player
{
    summonControlPanel;
    constructor(name)
    {
        this.name = name;
        this.id = `${this.name}-${rng(1000)}`;
        this.buildSummonControlPanel();
    }

    buildSummonControlPanel()
    {
        this.summonControlPanel = new SummonControlPanel();
        this.summonControlPanel.build();
    }
}

function rng(range)
{
    let result = Math.floor(Math.random() * Math.floor(range));
    return result;
}