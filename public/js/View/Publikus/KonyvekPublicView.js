import KonyvPublicView from "../Publikus/KonyvPublicView.js";

class KonyvekPublicView
{
    constructor(tomb, szuloElem)
    {
        // console.log("KonyvekPublicView");
        szuloElem.html(`
        <h1>Könyvek</h1>
        <div id="foTarolo">
        </div>
        `);
        this.PublicElem = szuloElem.children("div:last-child");

        tomb.forEach(publicKonyv => 
        {
            const konyveim = new KonyvPublicView(publicKonyv, this.PublicElem);    
        });
    }
}
export default KonyvekPublicView;