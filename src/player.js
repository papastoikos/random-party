class Player
{
    constructor(name)
    {
        this.name = name;
        this.id = `${this.name}-${rng(1000)}`;
    }
}

function rng(range)
{
    let result = Math.floor(Math.random() * Math.floor(range));
    return result;
}