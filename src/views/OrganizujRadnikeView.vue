<template>
    <div class="d-flex">
        
        <div class="d-flex border col-md-8 p-2  justify-content-start gap-2 flex-wrap">

            <div class="card col-md-5 flex-grow-1 ">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <button type="button" class="btn btn-secondary">
                    Zavarivači <span  :class="{'badge bg-danger' : !zavarivaciPodaci.length, 'badge bg-primary': zavarivaciPodaci.length}">{{zavarivaciPodaci.length}} </span>
                    </button>
                    <span>Raspoloživo: {{ zavarivaciPodaci.length }} / {{ zavarivaciUkupno }}</span>
                </div>
                <!-- <div class="card-body"> -->
                    <table v-if="zavarivaciPodaci.length" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>R.b</th>
                                <th>Ime i Prezime</th>
                                <th>Pozicija</th>
                                <th>Opcije</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="radnik,index in zavarivaciPodaci" :key="index">
                                <td>{{ index + 1 }}.</td>
                                <td>{{ radnik.imePrezime }}</td>
                                <td>{{ radnik.pozicija }}</td>
                                <td><button @click="dodeliRadnika(radnik)" class="btn btn-outline-primary btn-sm">Dodeli</button></td>
                            </tr>
                        </tbody>
                    </table>
                <!-- </div> -->
            </div>
            

            <div class="card col-md-5 flex-grow-1">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <button type="button" class="btn btn-secondary">
                    Bravari <span  :class="{'badge bg-danger' : !bravariPodaci.length, 'badge bg-primary': bravariPodaci.length}">{{bravariPodaci.length}} </span>
                    </button>
                    <span>Raspoloživo: {{ bravariPodaci.length }} / {{ bravariUkupno }}</span>
                </div>
                <!-- <div class="card-body"> -->
                    <table v-if="bravariPodaci.length" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>R.b</th>
                                <th>Ime i Prezime</th>
                                <th>Pozicija</th>
                                <th>Opcije</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="radnik,index in bravariPodaci" :key="index">
                                <td>{{ index + 1 }}.</td>
                                <td>{{ radnik.imePrezime }}</td>
                                <td>{{ radnik.pozicija }}</td>
                                <td><button @click="dodeliRadnika(radnik)" class="btn btn-outline-primary btn-sm">Dodeli</button></td>
                            </tr>
                        </tbody>
                    </table>
                <!-- </div> -->
            </div>

            <div class="card col-md-5 flex-grow-1">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <button type="button" class="btn btn-secondary">
                    Cevari <span  :class="{'badge bg-danger' : !cevariPodaci.length, 'badge bg-primary': cevariPodaci.length}">{{cevariPodaci.length}} </span>
                    </button>
                    <span>Raspoloživo: {{ cevariPodaci.length }} / {{ cevariUkupno }}</span>
                </div>
                <!-- <div class="card-body"> -->
                    <table v-if="cevariPodaci.length" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>R.b</th>
                                <th>Ime i Prezime</th>
                                <th>Pozicija</th>
                                <th>Opcije</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="radnik,index in cevariPodaci" :key="index">
                                <td>{{ index + 1 }}.</td>
                                <td>{{ radnik.imePrezime }}</td>
                                <td>{{ radnik.pozicija }}</td>
                                <td><button @click="dodeliRadnika(radnik)" class="btn btn-outline-primary btn-sm">Dodeli</button></td>
                            </tr>
                        </tbody>
                    </table>
                <!-- </div> -->
            </div>

            <div class="card col-md-5 flex-grow-1">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <button type="button" class="btn btn-secondary">
                    Dizaličari <span  :class="{'badge bg-danger' : !dizalicariPodaci.length, 'badge bg-primary': dizalicariPodaci.length}">{{dizalicariPodaci.length}} </span>
                    </button>
                    <span>Raspoloživo: {{ dizalicariPodaci.length }} / {{ dizalicariUkupno }}</span>
                </div>
                <!-- <div class="card-body"> -->
                    <table v-if="dizalicariPodaci.length" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>R.b</th>
                                <th>Ime i Prezime</th>
                                <th>Pozicija</th>
                                <th>Opcije</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="radnik,index in dizalicariPodaci" :key="index">
                                <td>{{ index + 1 }}.</td>
                                <td>{{ radnik.imePrezime }}</td>
                                <td>{{ radnik.pozicija }}</td>
                                <td><button @click="dodeliRadnika(radnik)" class="btn btn-outline-primary btn-sm">Dodeli</button></td>
                            </tr>
                        </tbody>
                    </table>
                <!-- </div> -->
            </div>


            <div class="card col-md-5 flex-grow-1">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <button type="button" class="btn btn-secondary">
                    Viljuškaristi <span  :class="{'badge bg-danger' : !viljuskaristiPodaci.length, 'badge bg-primary': viljuskaristiPodaci.length}">{{viljuskaristiPodaci.length}} </span>
                    </button>
                    <span>Raspoloživo: {{ viljuskaristiPodaci.length }} / {{ viljuskaristiUkupno }}</span>
                </div>
                <!-- <div class="card-body"> -->
                    <table v-if="viljuskaristiPodaci.length" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>R.b</th>
                                <th>Ime i Prezime</th>
                                <th>Pozicija</th>
                                <th>Opcije</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="radnik,index in viljuskaristiPodaci" :key="index">
                                <td>{{ index + 1 }}.</td>
                                <td>{{ radnik.imePrezime }}</td>
                                <td>{{ radnik.pozicija }}</td>
                                <td><button @click="dodeliRadnika(radnik)" class="btn btn-outline-primary btn-sm">Dodeli</button></td>
                            </tr>
                        </tbody>
                    </table>
                <!-- </div> -->
            </div>

            <div class="card col-md-5 flex-grow-1">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <button type="button" class="btn btn-secondary">
                    HSE <span  :class="{'badge bg-danger' : !hsePodaci.length, 'badge bg-primary': hsePodaci.length}">{{hsePodaci.length}} </span>
                    </button>
                    <span>Raspoloživo: {{ hsePodaci.length }} / {{ hseUkupno }}</span>
                </div>
                <!-- <div class="card-body"> -->
                    <table v-if="hsePodaci.length" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>R.b</th>
                                <th>Ime i Prezime</th>
                                <th>Pozicija</th>
                                <th>Opcije</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="radnik,index in hsePodaci" :key="index">
                                <td>{{ index + 1 }}.</td>
                                <td>{{ radnik.imePrezime }}</td>
                                <td>{{ radnik.pozicija }}</td>
                                <td><button @click="dodeliRadnika(radnik)" class="btn btn-outline-primary btn-sm">Dodeli</button></td>
                            </tr>
                        </tbody>
                    </table>
                <!-- </div> -->
            </div>


            <div class="card col-md-5 flex-grow-1">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <button type="button" class="btn btn-secondary">
                    IWE <span  :class="{'badge bg-danger' : !iwePodaci.length, 'badge bg-primary': iwePodaci.length}">{{iwePodaci.length}} </span>
                    </button>
                    <span>Raspoloživo: {{ iwePodaci.length }} / {{ iweUkupno }}</span>
                </div>
                <!-- <div class="card-body"> -->
                    <table v-if="iwePodaci.length" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>R.b</th>
                                <th>Ime i Prezime</th>
                                <th>Pozicija</th>
                                <th>Opcije</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="radnik,index in iwePodaci" :key="index">
                                <td>{{ index + 1 }}.</td>
                                <td>{{ radnik.imePrezime }}</td>
                                <td>{{ radnik.pozicija }}</td>
                                <td><button @click="dodeliRadnika(radnik)" class="btn btn-outline-primary btn-sm">Dodeli</button></td>
                            </tr>
                        </tbody>
                    </table>
                <!-- </div> -->
            </div>
            

            <div class="card col-md-5 flex-grow-1">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <button type="button" class="btn btn-secondary">
                    Poslovođe <span  :class="{'badge bg-danger' : !poslovodjePodaci.length, 'badge bg-primary': poslovodjePodaci.length}">{{poslovodjePodaci.length}} </span>
                    </button>
                    <span>Raspoloživo: {{ poslovodjePodaci.length }} / {{ poslovodjeUkupno }}</span>
                </div>
                <!-- <div class="card-body"> -->
                    <table v-if="poslovodjePodaci.length" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>R.b</th>
                                <th>Ime i Prezime</th>
                                <th>Pozicija</th>
                                <th>Opcije</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="radnik,index in poslovodjePodaci" :key="index">
                                <td>{{ index + 1 }}.</td>
                                <td>{{ radnik.imePrezime }}</td>
                                <td>{{ radnik.pozicija }}</td>
                                <td><button @click="dodeliRadnika(radnik)" class="btn btn-outline-primary btn-sm">Dodeli</button></td>
                            </tr>
                        </tbody>
                    </table>
                <!-- </div> -->
            </div>

            <div class="card col-md-6 ">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <button type="button" class="btn btn-secondary">
                    Magacioneri <span  :class="{'badge bg-danger' : !magacioneriPodaci.length, 'badge bg-primary': magacioneriPodaci.length}">{{magacioneriPodaci.length}} </span>
                    </button>
                    <span>Raspoloživo: {{ magacioneriPodaci.length }} / {{ magacioneriUkupno }}</span>
                </div>
                <!-- <div class="card-body"> -->
                    <table v-if="magacioneriPodaci.length" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>R.b</th>
                                <th>Ime i Prezime</th>
                                <th>Pozicija</th>
                                <th>Opcije</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="radnik,index in magacioneriPodaci" :key="index">
                                <td>{{ index + 1 }}.</td>
                                <td>{{ radnik.imePrezime }}</td>
                                <td>{{ radnik.pozicija }}</td>
                                <td><button @click="dodeliRadnika(radnik)" class="btn btn-outline-primary btn-sm">Dodeli</button></td>
                            </tr>
                        </tbody>
                    </table>
                <!-- </div> -->
            </div>


        </div>
        <div class="col-md-4 p-2 border">
            <ul class="list-group">
                <li class="list-group-item active" aria-current="true">Dodati Radnici</li>
                <li  v-for="radnik,index in projekat.radnici" :key="index" class="list-group-item d-flex justify-content-between"><span><small>[{{ index + 1 }}]</small> {{ radnik.imePrezime }} - {{ radnik.pozicija }}</span> <span @click="obrisiRadnika(radnik,index)" class="text-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                </svg></span>
                </li>
            </ul> 
            <br>
            <div class="d-flex justify-content-between">
                <button @click="sacuvajRadnike" class="btn btn-outline-success btn-sm">Sacuvaj</button>
                <button @click="resetujSve" class="btn btn-outline-danger btn-sm">Resetuj</button>
            </div>
            <div class="text-center">
                <hr>
                <i>*** Sačuvaj da bi se videle izmene***</i>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'OrganizujRadnikeView',
    props: ['id'],
    data() {
        return {
            radnici: [],
            projekti: [],
            projekat: {},
            sviRadnici: [],
            
        }
    },
    methods: {
        dohvatiPodatke(){
            this.radnici = JSON.parse(localStorage.getItem('Radnici')).filter((radnik) => !radnik.rasporedjen)
           
            this.projekti = JSON.parse(localStorage.getItem('projekti-dmmont'))
            
            this.projekat = this.projekti[this.id]
            
            this.sviRadnici = JSON.parse(localStorage.getItem('Radnici'))
            console.log(this.sviRadnici)
            

            
        },
        dodeliRadnika(radnik){
            for (const trenutniRadnik of this.projekat.radnici) {
                if(trenutniRadnik.imePrezime == radnik.imePrezime){
                    console.log("vec postoji")
                    return
                }
            }
            
            // Menjam njegovu vrednost 
            radnik.rasporedjen = !radnik.rasporedjen

            // Dodajem radnika u niz
            this.projekat.radnici.push(radnik)

            // Da bi glogalno promenio radnika moram da ga nadjem premo namea
            let trenutniRadnik = this.sviRadnici.find((radnikNiza) => radnikNiza.imePrezime == radnik.imePrezime)
            console.log(trenutniRadnik)
            trenutniRadnik.rasporedjen = !trenutniRadnik.rasporedjen
            
            let index = this.sviRadnici.findIndex((radnikNiza) => radnikNiza.imePrezime == radnik.imePrezime)
            console.log(index)

            // sad zamenim 
            this.sviRadnici[index] = trenutniRadnik
            localStorage.setItem('Radnici', JSON.stringify(this.sviRadnici))
            console.log('-------------------------------------')
            console.log(this.sviRadnici)

            
            console.log('Cuvam radnike')
            this.projekti[this.index] = this.projekat
            localStorage.setItem('projekti-dmmont', JSON.stringify(this.projekti))

            // location.reload()
            
            
            
            
        },
        sacuvajRadnike(){
            location.reload()
        },
        obrisiRadnika(radnik,redniBroj){
            console.log(radnik,redniBroj)
            this.projekat.radnici.splice(redniBroj,1)
            this.projekti[this.index] = this.projekat
            localStorage.setItem('projekti-dmmont', JSON.stringify(this.projekti))

            let trenutniRadnik = this.sviRadnici.find((radnikNiza) => radnikNiza.imePrezime == radnik.imePrezime)
            console.log(trenutniRadnik)
            trenutniRadnik.rasporedjen = !trenutniRadnik.rasporedjen
            
            let index = this.sviRadnici.findIndex((radnikNiza) => radnikNiza.imePrezime == radnik.imePrezime)
            console.log(index)

            // sad zamenim 
            this.sviRadnici[index] = trenutniRadnik
            localStorage.setItem('Radnici', JSON.stringify(this.sviRadnici))
            console.log('-------------------------------------')
            console.log(this.sviRadnici)
        },
        resetujSve(){
            console.log('resetuj sve')
            for (const radnik of this.projekat.radnici) {
                console.log(radnik.imePrezime, '*****', radnik.rasporedjen)

                // sada globalno menjam tog radnika iz kljuca Radnici -> sviRadnici (promenljiva)
                for(let i=0; i<this.sviRadnici.length;i++){
                    if(radnik.imePrezime == this.sviRadnici[i].imePrezime){
                        this.sviRadnici[i].rasporedjen = !this.sviRadnici[i].rasporedjen
                    }
                }
                
            }
            this.projekat.radnici = []
            this.projekti[this.id] = this.projekat
            localStorage.setItem('projekti-dmmont', JSON.stringify(this.projekti))
            localStorage.setItem('Radnici', JSON.stringify(this.sviRadnici))
            location.reload()
        }
    },
    computed: {
        menadzmentPodaci(){
            return this.radnici.filter((radnik) => radnik.pozicija == 'Direktor' || radnik.pozicija == 'Tehnicki direktor' || radnik.pozicija == 'Finansijski direktor' || radnik.pozicija == 'Sef proizvodnje' || radnik.pozicija == 'HR')
        },
        poslovodjePodaci(){
            
            return this.radnici.filter((radnik) => radnik.pozicija == 'Poslovodja')
        },
        poslovodjeUkupno(){
            
            return this.sviRadnici.filter((radnik) => radnik.pozicija == 'Poslovodja').length
        },
        zavarivaciPodaci(){
            return this.radnici.filter((radnik) => radnik.pozicija == 'Zavarivac')
        },
        zavarivaciUkupno(){
            return this.sviRadnici.filter((radnik) => radnik.pozicija == 'Zavarivac').length
        },
        cevariPodaci(){
            return this.radnici.filter((radnik) => radnik.pozicija == 'Cevar')
        },
        cevariUkupno(){
            return this.sviRadnici.filter((radnik) => radnik.pozicija == 'Cevar').length
        },
        bravariPodaci(){
            return this.radnici.filter((radnik) => radnik.pozicija == 'Bravar')
        },
        bravariUkupno(){
            return this.sviRadnici.filter((radnik) => radnik.pozicija == 'Bravar').length
        },
        hsePodaci(){
            return this.radnici.filter((radnik) => radnik.pozicija == 'HSE')
        },
        hseUkupno(){
            return this.sviRadnici.filter((radnik) => radnik.pozicija == 'HSE').length
        },
        iwePodaci(){
            return this.radnici.filter((radnik) => radnik.pozicija == 'IWE')
        },
        iweUkupno(){
            return this.sviRadnici.filter((radnik) => radnik.pozicija == 'IWE').length
        },
        dizalicariPodaci(){
            return this.radnici.filter((radnik) => radnik.pozicija == 'Dizalicar')
        },
        dizalicariUkupno(){
            return this.sviRadnici.filter((radnik) => radnik.pozicija == 'Dizalicar').length
        },
        viljuskaristiPodaci(){
            return this.radnici.filter((radnik) => radnik.pozicija == 'Viljuskarista')
        },
        viljuskaristiUkupno(){
            return this.sviRadnici.filter((radnik) => radnik.pozicija == 'Viljuskarista').length
        },
        magacioneriPodaci(){
            return this.radnici.filter((radnik) => radnik.pozicija == 'Magacioner')
        },
        magacioneriUkupno(){
            return this.sviRadnici.filter((radnik) => radnik.pozicija == 'Magacioner').length
        }
    },
    mounted() {
        this.dohvatiPodatke()
    },
}
</script>
<style scoped>
    th,td{
        text-align: center;
        
        
    }
    .crven{
        background-color: red;
        color: white;
    }
</style>