<template>
    <div>
        
        <div class="card">
            <div class="card-header d-flex justify-content-between">
                <div>
                    Broj ugovora: {{ projekat.brojUgovora }}
                </div>  
                <div>
                    <RouterLink :to="'/projects'" class="btn btn-outline-primary ">Vrati se nazad</RouterLink>
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ projekat.naziv }}</h5>
                <p class="card-text"><small>{{ projekat.pocetakRadova }} - {{ projekat.krajRadova }}</small></p>
                <h6 class="card-text">{{ projekat.opis }}</h6>
                <p class="card-text"><small>Naručioc radova: <b>{{ projekat.naruciocRadova }}</b></small></p>
                <p class="card-text"><small>Lokacija: <b>{{ projekat.lokacija }}</b></small></p>
                
                <div class="d-flex gap-3">
                    <div class="list-group col-md-4 ">
                        <a href="#" class="list-group-item list-group-item-action">Nadzor</a>
                        <a href="#" class="list-group-item list-group-item-action"><p class="fw-light">Ime: {{ projekat.nadzor}}</p></a>
                        <a href="#" class="list-group-item list-group-item-action"><p class="fw-light">Telefon: {{ projekat.nadzor }}</p></a>
                    </div>
                    <div class="list-group col-md-4">
                        <a href="#" class="list-group-item list-group-item-action">Rukovodilac radova</a>
                        <a href="#" class="list-group-item list-group-item-action"><p class="fw-light">Ime: {{ projekat.rukovodiocRadova }}</p></a>
                        <a href="#" class="list-group-item list-group-item-action"><p class="fw-light">Telefon: {{ projekat.rukovodiocRadova }}</p></a>
                    </div>
                </div>
                <br>
                <p class="card-text">Vrednost projekta: <b>{{ projekat.vrednost }} RSD</b></p>
               
                <hr>
                
            </div>
            
            <div class="row p-3">
                
                <div class="col-sm-12 mb-3 mb-sm-0">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Radnici na projektu</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <RouterLink  :to="`/organizuj-radnike/${this.id}`" class="btn btn-outline-primary btn-sm">Organizuj radnike</RouterLink>
                        <hr>

                        <!-- PRVI RED -->
                        <div class="row m-3">
                            <ul class="list-group col-md-4">
                                <li class="list-group-item " aria-current="true">Poslovodje <span class="badge text-bg-secondary"  :class="{'badge text-bg-danger' : dohvatiPoslovodju.length == 0, 'badge text-bg-success' : dohvatiPoslovodju.length > 0}">{{ dohvatiPoslovodju.length }}</span></li>
                                <li v-for="radnik,index in dohvatiPoslovodju" :key="index" class="list-group-item">{{index + 1}}. {{ radnik.imePrezime }}</li>
                            </ul>
                            <ul class="list-group col-md-4">
                                <li class="list-group-item" aria-current="true">HSE <span class="badge text-bg-secondary"  :class="{'badge text-bg-danger' : dohvatiHSE.length == 0, 'badge text-bg-success' : dohvatiHSE.length > 0}">{{ dohvatiHSE.length }}</span></li>
                                <li v-for="radnik,index in dohvatiHSE" :key="index" class="list-group-item">{{index + 1}}. {{ radnik.imePrezime }}</li>
                            </ul>
                            <ul class="list-group col-md-4">
                                <li class="list-group-item" aria-current="true">IWE <span class="badge text-bg-secondary"  :class="{'badge text-bg-danger' : dohvatiIWE.length == 0, 'badge text-bg-success' : dohvatiIWE.length > 0}">{{ dohvatiIWE.length }}</span></li>
                                <li v-for="radnik,index in dohvatiIWE" :key="index" class="list-group-item">{{index + 1}}. {{ radnik.imePrezime }}</li>
                            </ul>
                        </div>

                        <!-- DRUGI RED -->
                        <div class="row m-3">
                            <ul class="list-group col-md-4">
                                <li class="list-group-item" aria-current="true">Zavarivaci <span class="badge text-bg-secondary"  :class="{'badge text-bg-danger' : dohvatiZavarivace.length == 0, 'badge text-bg-success' : dohvatiZavarivace.length > 0}">{{ dohvatiZavarivace.length }}</span></li>
                                <li v-for="radnik,index in dohvatiZavarivace" :key="index" class="list-group-item">{{index + 1}}. {{ radnik.imePrezime }}</li>
                            </ul>
                            <ul class="list-group col-md-4">
                                <li class="list-group-item" aria-current="true">Cevari <span class="badge text-bg-secondary"  :class="{'badge text-bg-danger' : dohvatiCevare.length == 0, 'badge text-bg-success' : dohvatiCevare.length > 0}">{{ dohvatiCevare.length }}</span></li>
                                <li v-for="radnik,index in dohvatiCevare" :key="index" class="list-group-item">{{index + 1}}. {{ radnik.imePrezime }}</li>
                            </ul>
                            <ul class="list-group col-md-4">
                                <li class="list-group-item" aria-current="true">Bravari <span class="badge text-bg-secondary"  :class="{'badge text-bg-danger' : dohvatiBravare.length == 0, 'badge text-bg-success' : dohvatiBravare.length > 0}">{{ dohvatiBravare.length }}</span></li>
                                <li v-for="radnik,index in dohvatiBravare" :key="index" class="list-group-item">{{index + 1}}. {{ radnik.imePrezime }}</li>
                            </ul>
                        </div>

                        <!-- TRECI RED -->
                        <div class="row m-3">
                            <ul class="list-group col-md-4">
                                <li class="list-group-item" aria-current="true">Magacioneri <span class="badge text-bg-secondary"  :class="{'badge text-bg-danger' : dohvatiMagacionere.length == 0, 'badge text-bg-success' : dohvatiMagacionere.length > 0}">{{ dohvatiMagacionere.length }}</span></li>
                                <li v-for="radnik,index in dohvatiMagacionere" :key="index" class="list-group-item">{{index + 1}}. {{ radnik.imePrezime }}</li>
                            </ul>
                            <ul class="list-group col-md-4">
                                <li class="list-group-item" aria-current="true">Viljuškaristi <span class="badge text-bg-secondary"  :class="{'badge text-bg-danger' : dohvatiViljuskariste.length == 0, 'badge text-bg-success' : dohvatiViljuskariste.length > 0}">{{ dohvatiViljuskariste.length }}</span></li>
                                <li v-for="radnik,index in dohvatiViljuskariste" :key="index" class="list-group-item">{{index + 1}}. {{ radnik.imePrezime }}</li>
                            </ul>
                            <ul class="list-group col-md-4">
                                <li class="list-group-item" aria-current="true">Dizaličari <span class="badge text-bg-secondary" :class="{'badge text-bg-danger' : dohvatiDizalicare.length == 0, 'badge text-bg-success' : dohvatiDizalicare.length > 0}">{{ dohvatiDizalicare.length }}</span></li>
                                <li v-for="radnik,index in dohvatiDizalicare" :key="index" class="list-group-item">{{index + 1}}. {{ radnik.imePrezime }}</li>
                            </ul>
                        </div>

                    </div>
                    </div>
                </div>
                <!-- <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Mehanizacija na projektu</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-outline-primary btn-sm">Go somewhere</a>
                    </div>
                    </div>
                </div> -->
                
            </div>
            <div class="card m-3">
                <div class="card-header">
                    Chat Room

                </div>
                <div class="card-body">
                    <!-- <h5 class="card-title">Special title treatment</h5> -->
                    <div class="wrapper">
                        <div v-for="poruka,index in this.projekat.chat" :key="index" class="card m-4">
                            <div class="card-header d-flex justify-content-between">
                                <div>
                                    {{ poruka.koSalje }}
                                </div>
                                <div>
                                    Status: {{ poruka.status }}
                                </div>
                            </div>
                            <div class="card-body">
                                <!-- <h5 class="card-title">Special title treatment</h5> -->
                                <p class="card-text d-flex justify-content-between">
                                    <div :class="{'vazno' : poruka.status == 'Važno', 'obavestenje' : poruka.status == 'Obaveštenje', 'upozorenje' : poruka.status == 'Upozorenje'}"> {{ poruka.sadrzaj }}</div>
                                    <div>
                                        <button @click="obrisiPoruku(index)" class="btn btn-outline-danger btn-sm">Obriši</button>
                                    </div>
                                </p>
                            
                            </div>
                            <div class="card-header d-flex justify-content-between">
                                <div>
                                    Datum: {{ poruka.datumSlanja }}
                                </div>
                                <div>
                                    Vreme: {{ poruka.vremeSlanja }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <p class="card-text m-4">
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">
                                <small><i>Nova poruka</i></small>
                            </label>
                            <textarea v-model="novaPoruka.sadrzaj" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            <!-- <p>{{ novaPoruka }}</p> -->
                        </div>
                        <div class="form-check d-flex gap-5">
                            <div>
                                <input v-model="novaPoruka.status" value="Važno" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Važno
                                </label>
                            </div>
                            <div>
                                <input v-model="novaPoruka.status" value="Upozorenje" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Upozorenje
                                </label>
                            </div>
                            <div>
                                <input v-model="novaPoruka.status" value="Obaveštenje" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Obaveštenje
                                </label>
                            </div>
                        </div>
                    </p>
                    
                    <div class="ms-4 ">
                        <button @click="posaljiPoruku" class="btn btn-primary btn-sm">Pošalji</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const today = ref(new Date().toLocaleDateString('sr-RS', { 
  day: '2-digit', 
  month: '2-digit', 
  year: 'numeric' 
}));
export default {
    name: 'SingleProjectView',
    props: ['id'],
    data() {
        return {
            projekti: [],
            projekat: {},
            novaPoruka: {
                koSalje: '',
                sadrzaj: '',
                datumSlanja: today,
                vremeSlanja: new Date().toLocaleTimeString(),
                status: '',
            },
            user: {},
            radniciProjekta: [],
        }
    },
    methods: {
        dohvatiPodatke(){
            this.projekti = JSON.parse(localStorage.getItem('projekti-dmmont') || {})
            this.projekat = this.projekti[this.id]
       
            
            this.user = JSON.parse(localStorage.getItem('sesija') || {})
            this.novaPoruka.koSalje = this.user.email
            
        },
        posaljiPoruku(){
            let porukaZaSlanje = { ...this.novaPoruka } // JAKO VAZNO, JER VUE MENJA VREDNOSTI SVIH PROMENLJIVIH KOJE SU VEZANE ZA ODREDJENI OBJEKAT/VREDNOST
            this.projekat.chat.push(porukaZaSlanje)
     
            this.projekti[this.id] = this.projekat
            localStorage.setItem('projekti-dmmont', JSON.stringify(this.projekti))
            this.novaPoruka.sadrzaj = ''

        },
        obrisiPoruku(index){
            this.projekat.chat.splice(index,1)
            this.projekti[this.index] = this.projekat
            localStorage.setItem('projekti-dmmont', JSON.stringify(this.projekti))

            console.log(this.projekat)
        },
       
        
    },
    computed: {
        dohvatiPoslovodju() {
        return Array.isArray(this.projekat.radnici) 
            ? this.projekat.radnici.filter((trenutniRadnik) => trenutniRadnik.pozicija === 'Poslovodja') 
            : [] // Ako radnici nisu definisani ili nisu niz, vrati prazan niz
        },
        dohvatiHSE(){
            return Array.isArray(this.projekat.radnici)
            ? this.projekat.radnici.filter((trenutniRadnik) => trenutniRadnik.pozicija == 'HSE')
            : []
        },
        dohvatiIWE(){
            return Array.isArray(this.projekat.radnici)
            ? this.projekat.radnici.filter((trenutniRadnik) => trenutniRadnik.pozicija == 'IWE')
            : []
        },
        dohvatiZavarivace(){
            return Array.isArray(this.projekat.radnici)
            ? this.projekat.radnici.filter((trenutniRadnik) => trenutniRadnik.pozicija == 'Zavarivac')
            : []
        },
        dohvatiCevare(){
            return Array.isArray(this.projekat.radnici)
            ? this.projekat.radnici.filter((trenutniRadnik) => trenutniRadnik.pozicija == 'Cevar')
            : []
        },
        dohvatiBravare(){
            return Array.isArray(this.projekat.radnici)
            ? this.projekat.radnici.filter((trenutniRadnik) => trenutniRadnik.pozicija == 'Bravar')
            : []
        },
        dohvatiMagacionere(){
            return Array.isArray(this.projekat.radnici)
            ? this.projekat.radnici.filter((trenutniRadnik) => trenutniRadnik.pozicija == 'Magacioner')
            : []
        },
        dohvatiViljuskariste(){
            return Array.isArray(this.projekat.radnici)
            ? this.projekat.radnici.filter((trenutniRadnik) => trenutniRadnik.pozicija == 'Viljuskarista')
            : []
        },
        dohvatiDizalicare(){
            return Array.isArray(this.projekat.radnici)
            ? this.projekat.radnici.filter((trenutniRadnik) => trenutniRadnik.pozicija == 'Dizalicar')
            : []
        }
    },

    mounted() {
        this.dohvatiPodatke()   
    },
}
</script>
<style scoped>
    .wrapper{
        max-height: 1000px; /* Podesite maksimalnu visinu po želji */
        overflow-y: auto; /* Omogućite vertikalni skrol bar */
    }
    .vazno{
        color: red;
    }
    .obavestenje{
        color: green;
    }
    .upozorenje{

        color: rgb(171, 171, 34);

    }
</style>