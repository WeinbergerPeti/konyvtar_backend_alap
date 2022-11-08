class KonyvModel {
    #konyvekTomb = [];

    constructor(token) {
        // console.log("KonyvModel");
        this.token=token;
    }

    adatModosit(adat)
    {
        console.log("Modelben módosít",adat);
    }

    adatBe(vegpont, myCallBack) 
    {
        fetch(vegpont, 
        {
            method: 'GET',
            headers: 
            {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => 
            {
                this.#konyvekTomb = data;
                // console.log(this.#konyvekTomb);
                myCallBack(this.#konyvekTomb);
            })
            .catch((error) => 
            {
                console.error('Error:', error);
            });
    }

    adatUj(vegpont, adat)
    {
        fetch(vegpont, 
        {
            method: "POST",
            headers:
            {
                "content-type": "application/json",
                "X-CSRF-TOKEN": this.token,
            },
            body: JSON.stringify(adat),
        })
            .then((response)=>response.json())
            .then((data) => 
            {
                console.log("Új adat" + data);
            })
            .catch((error) => 
            {
                console.error('Error:', error);
            });
    }

    adatModosit(vegpont, adat)
    {
        console.log(adat);
        console.log("MÓDOSÍT" + vegpont);
        vegpont += "/" + adat.id
        fetch(vegpont,
        {
            method: "PUT",
            headers:
            {
                "content-type": "application/json",
                "X-CSRF-TOKEN": this.token,
            },
            body: JSON.stringify(adat)
        })
            .then((response)=>response.json())
            .then((data) => 
            {
                console.log("MÓDOSÍTtottam" + data.updatedAt);
            })
            .catch((error) => 
            {
                console.error('Error:', error);
            });
    }

    adatTorol(vegpont, adat)
    {
        console.log("TÖRÖLTEM: ");
        console.log(adat);
        vegpont +="/"+adat.id;
        console.log(vegpont);
        fetch(vegpont,
        {
            method: "DELETE",
            headers:
            {
                "X-CSRF-TOKEN": this.token,
            },
        })
            .then((response)=>response.json())
            .then(() => 
            {
                console.log("Sikeres törlés");
            })
            .catch((error) => 
            {
                console.error('Error:', error);
            });
    }
}

export default KonyvModel;