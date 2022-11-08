class KonyvAdminView 
{
    #elem;
    constructor(elem, szuloElem) 
    {
        this.#elem=elem;
        szuloElem.append(`<tr>
        <td>${elem.id}</td>
        <td>${elem.cim}</td>
        <td>${elem.szerzo}</td>
        <td>${elem.ar}</td>
        <td><button id="modosit${elem.id}">Módosít</button></td>
        <td><button id="torol${elem.id}">Töröl</button></td>
        </tr>`);

        this.sorElem=szuloElem.children("tr:last-child");
        console.log(this.sorElem);
        this.modositElem=$(`#modosit${elem.id}`);
        this.torolElem=$(`#torol${elem.id}`);

        this.modositElem.on("click", ()=>{
            console.log("Módosít a view-ban");
            this.#elem.cim="valami"
            this.kattintasTrigger("modosit");
        });
        this.torolElem.on("click", ()=>{
            console.log("Töröl a view-ban");
            this.kattintasTrigger("torol");
        })
    }

    kattintasTrigger(esemenyNeve)
    {
        console.log("triggerben",esemenyNeve);
        const esemeny = new CustomEvent(esemenyNeve,{detail:this.#elem});
        window.dispatchEvent(esemeny);
    }
}

export default KonyvAdminView;