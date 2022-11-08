import KonyvAdminView from "./KonyvAdminView.js";

class KonyvekAdminView 
{
    constructor(tomb, szuloElem) 
    {
        szuloElem.html(`<table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Cím</th>
                <th>Szerző</th>
                <th>Ár</th>
                <th></th>
            </tr>
        </thead>
        <tbody></tbody>
        </table>`);
        this.tablaElem = szuloElem.children("table:last-child");
        this.tbodyElem = this.tablaElem.children("tbody");

        tomb.forEach(konyv => 
        {
            const konyvem = new KonyvAdminView(konyv, this.tbodyElem);
        });
    }
}

export default KonyvekAdminView;