<template >
    <div>
        <h4>Inicijalizacija</h4>
        <p><a @click="pokreni" href="#">Pokreni instalaciju</a></p>
        <p><RouterLink :to="'/log-in'">Pokreni app</RouterLink></p>
    </div>
  </template>
  <script>
  import { ref } from 'vue';
  
  const today = ref(new Date().toLocaleDateString('sr-RS', { 
  day: '2-digit', 
  month: '2-digit', 
  year: 'numeric' 
  }));
  export default {
    
    data() {
        return {
            radnici: [
                {
                id: Date.now(),
                imePrezime: 'Sinisa Stojanovski',
                pozicija: 'Direktor',
                projekti: [],
                rasporedjen : false,
                obuka: today,
                lekarski: today,
                licnaKarta: Date.now(),
                },
                {
                id: Date.now(),
                imePrezime: 'Nebojsa Milicevic',
                pozicija: 'Tehnicki direktor',
                projekti: [],
                rasporedjen : false,
                obuka: today,
                lekarski: today,
                licnaKarta: Date.now(),
                },
                {
                id: Date.now(),
                imePrezime: 'Dragana Stojanovski',
                pozicija: 'Finansijski direktor',
                projekti: [],
                rasporedjen : false,
                obuka: today,
                lekarski: today,
                licnaKarta: Date.now(),
                },
                {
                id: Date.now(),
                imePrezime: 'Marko Krstic',
                pozicija: 'Sef proizvodnje',
                projekti: [],
                rasporedjen : false,
                obuka: today,
                lekarski: today,
                licnaKarta: Date.now(),
                },
                {
                id: Date.now(),
                imePrezime: 'Dragan Kos',
                pozicija: 'Poslovodja',
                projekti: [],
                rasporedjen : false,
                obuka: today,
                lekarski: today,
                licnaKarta: Date.now(),
                },
                {
                id: Date.now(),
                imePrezime: 'Nenad Velickovski',
                pozicija: 'HR',
                projekti: [],
                rasporedjen : false,
                obuka: today,
                lekarski: today,
                licnaKarta: Date.now(),
                },
                {
                id: Date.now(),
                imePrezime: 'Vukovic Sava',
                pozicija: 'HSE',
                projekti: [],
                rasporedjen : false,
                obuka: today,
                lekarski: today,
                licnaKarta: Date.now(),
                },
                {
                id: Date.now(),
                imePrezime: 'Vukajlovic Zoran',
                pozicija: 'Zavarivac',
                projekti: [],
                rasporedjen : false,
                obuka: today,
                lekarski: today,
                licnaKarta: Date.now(),
                },
                {
                id: Date.now(),
                imePrezime: 'Zeljko Vulin',
                pozicija: 'Magacioner',
                projekti: [],
                rasporedjen : false,
                obuka: today,
                lekarski: today,
                licnaKarta: Date.now(),
                },
                {
                id: Date.now(),
                imePrezime: 'Svilar Zoran',
                pozicija: 'Poslovodja',
                projekti: [],
                rasporedjen : false,
                obuka: today,
                lekarski: today,
                licnaKarta: Date.now(),
                },
                {
                id: Date.now(),
                imePrezime: 'Aleksandar Aleksovski',
                pozicija: 'Bravar',
                projekti: [],
                rasporedjen : false,
                obuka: today,
                lekarski: today,
                licnaKarta: Date.now(),
                },
                {
                id: Date.now(),
                imePrezime: 'Mladenovic Sasa',
                pozicija: 'Cevar',
                projekti: [],
                rasporedjen : false,
                obuka: today,
                lekarski: today,
                licnaKarta: Date.now(),
                },
                {
                id: Date.now(),
                imePrezime: 'Despotovski Strahinja',
                pozicija: 'Dizalicar',
                projekti: [],
                rasporedjen : false,
                obuka: today,
                lekarski: today,
                licnaKarta: Date.now(),
                },
                {
                id: Date.now(),
                imePrezime: 'Hristovski Filip',
                pozicija: 'Viljuskarista',
                projekti: [],
                rasporedjen : false,
                obuka: today,
                lekarski: today,
                licnaKarta: Date.now(),
                },
                {
                id: Date.now(),
                imePrezime: 'Sreten Djuric',
                pozicija: 'IWE',
                projekti: [],
                rasporedjen : false,
                obuka: today,
                lekarski: today,
                licnaKarta: Date.now(),
                },
            ],
            projekti: [
                {
                    brojUgovora: '1234/2024',
                    naziv: 'Gasovod 12" Smederevo',
                    opis: 'Mašinski radovi na sanaciji razvodnog gasovoda visokog pritiska RG01-10, postavljenog preko gasovodnog mosta na Dunavu kod Smedereva.',
                    naruciocRadova: 'KM-Mont Vrbas',
                    lokacija: 'Gasovodni most na Dunavu Smederevo',
                    pocetakRadova: '24.10.2024',
                    krajRadova: '24.12.2024',
                    vrednost: 2964000,
                    nadzor: {
                        ime: 'Krstić Marko',
                        telefon: '0692488865',
                    },
                    rukovodiocRadova: {
                        ime: 'Veličkovski Nenad',
                        telefon: '0601408899',
                    },
                    radnici: [],
                    chat: [],
  
                },
                {
                    brojUgovora: 'DWN-111000/UD-ra/3708/2024',
                    naziv: 'Peći BA2401-BA2402',
                    opis: 'Ugradnja analizatora O2 i CO2 pametne klapne i merenja promaje na pećima BA 2401 i 2402 u rafineriji Pančevo.',
                    naruciocRadova: 'Naftna industrija Srbije A.D Novi Sad',
                    lokacija: 'Rafinerija Pančevo',
                    pocetakRadova: '16.10.2024',
                    krajRadova: '04.11.2024',
                    vrednost: 1600000,
                    nadzor: {
                        ime: 'Kukić Ljuba',
                        telefon: '0641239976',
                    },
                    rukovodiocRadova: {
                        ime: 'Tošić Milan',
                        telefon: '0661338875',
                    },
                    radnici: [],
                    chat: []
  
                }
            ],
            korisnici: [
              {
                id: Date.now(),
                email: 'admin@admin.rs',
                password: '123'
              }
            ],
            instalirano : false,
  
        }
    },
    methods: {
  
        pokreni(){
            if(!JSON.parse(localStorage.getItem('projekti-dmmont')) || !JSON.parse(localStorage.getItem('Radnici')) || !JSON.parse(localStorage.getItem('korisnici'))){
                localStorage.setItem('Radnici', JSON.stringify(this.radnici))
                localStorage.setItem('projekti-dmmont', JSON.stringify(this.projekti))
                localStorage.setItem('korisnici', JSON.stringify(this.korisnici))
                this.$toast.success('App installed.')
                return
            }
            
            this.$toast.warning('App already installed.')
            return
        }
    },
    mounted() {
        console.log(this.instalirano)
    },
  }
  </script>
  <style scoped>
    
  </style>