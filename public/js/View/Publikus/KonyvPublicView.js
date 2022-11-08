class KonyvPublicView
{
    #elem;
    constructor(elem, szuloElem)
    {
        // console.log("KonvyPublicView");
        this.#elem=elem
        szuloElem.append(`
        <div class="konyvAdatok">
            <h1>Könyv cím: ${elem.cim}</h1>
            <div>
                <p>Szerző: ${elem.szerzo}</p>
                <p>Ár: ${elem.ar}</p>
            </div>
            <button id="kosarba${elem.id}">Kosárba</button>
        </div>
        `);

        this.kosarbaElem=$(`#kosarba${elem.id}`);

        this.kosarbaElem.on("click", ()=>
        {
            console.log("Kosárba kattintottam");
            this.kosarKattintasTrigger("kosarba")
        });
       
    }

    kosarKattintasTrigger(esemenyNeve)
    {
        console.log("triggerben ", esemenyNeve);
        const esemeny = new CustomEvent(esemenyNeve,{detail:this.#elem});
        window.dispatchEvent(esemeny);
    }
}

export default KonyvPublicView;