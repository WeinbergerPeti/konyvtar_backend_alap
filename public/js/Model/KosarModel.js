class KosarModel
{
    #kosarTomb=[];
    constructor()
    {
        this.#kosarTomb=[];
    }

    getKosarTomb()
    {
        return this.#kosarTomb;
    }

    kosarba(elem)
    {
        console.log(elem);
        this.#kosarTomb.push(elem);
        console.log(this.#kosarTomb);
    }

    tombTorol()
    {
        this.#kosarTomb.pop();
    }
}

export default KosarModel;