<template>
    <div>
      <div class="card">
        <div class="d-flex justify-content-between p-2">
          <h5 class="card-header">Upravljanje radnicima </h5>
        </div>
  
        <div class="col-md-12">
          <div class="accordion accordion-flush d-flex flex-wrap" id="accordionFlushExample">
  
  
            <div class="accordion-item col-md-6">
              <h2 class="accordion-header ">
                <button class="accordion-button collapsed d-flex gap-1 align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseOne">
                  Menadzment <span class="badge text-bg-primary">{{ menadzmentPodaci.length }}</span>
                </button>
              </h2>
              <div id="flush-collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <a  v-for="radnik,index in menadzmentPodaci" :key="index" href="#" class="list-group-item list-group-item-action list-group-item-light d-flex justify-content-between">
                      <span>{{ index + 1}}. {{ radnik.imePrezime }}</span>
                      <span>{{ radnik.pozicija }}</span>
                    </a>
                </div>
              </div>
            </div>
            
  
  
            <div class="accordion-item col-md-6">
              <h2 class="accordion-header ">
                <button class="accordion-button collapsed d-flex gap-1 align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseOne">
                  Poslovodje <span class="badge text-bg-primary">{{ poslovodjePodaci.length }}</span>
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <a  v-for="radnik,index in poslovodjePodaci" :key="index" href="#" class="list-group-item list-group-item-action list-group-item-light d-flex justify-content-between">
                      <span>{{ index + 1}}. {{ radnik.imePrezime }}</span>
                      <span>{{ radnik.pozicija }}</span>
                    </a>
                </div>
              </div>
            </div>
            
            
  
            <div class="accordion-item col-md-6">
              <h2 class="accordion-header ">
                <button class="accordion-button collapsed d-flex gap-1 align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseOne">
                  Zavarivaci <span class="badge text-bg-primary">{{ zavarivaciPodaci.length }}</span>
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <a  v-for="radnik,index in zavarivaciPodaci" :key="index" href="#" class="list-group-item list-group-item-action list-group-item-light d-flex justify-content-between">
                      <span>{{ index + 1}}. {{ radnik.imePrezime }}</span>
                      <span>{{ radnik.pozicija }}</span>
                    </a>
                </div>
              </div>
            </div>
            
            
  
            <div class="accordion-item col-md-6">
              <h2 class="accordion-header ">
                <button class="accordion-button collapsed d-flex gap-1 align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseOne">
                  Cevari <span class="badge text-bg-primary">{{ cevariPodaci.length }}</span>
                </button>
              </h2>
              <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <a  v-for="radnik,index in cevariPodaci" :key="index" href="#" class="list-group-item list-group-item-action list-group-item-light d-flex justify-content-between">
                      <span>{{ index + 1}}. {{ radnik.imePrezime }}</span>
                      <span>{{ radnik.pozicija }}</span>
                    </a>
                </div>
              </div>
            </div>
            
            
  
            <div class="accordion-item col-md-6">
              <h2 class="accordion-header ">
                <button class="accordion-button collapsed d-flex gap-1 align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseOne">
                  Bravari <span class="badge text-bg-primary">{{ bravariPodaci.length }}</span>
                </button>
              </h2>
              <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <a  v-for="radnik,index in bravariPodaci" :key="index" href="#" class="list-group-item list-group-item-action list-group-item-light d-flex justify-content-between">
                      <span>{{ index + 1}}. {{ radnik.imePrezime }}</span>
                      <span>{{ radnik.pozicija }}</span>
                    </a>
                </div>
              </div>
            </div>
            
            
  
            <div class="accordion-item col-md-6">
              <h2 class="accordion-header ">
                <button class="accordion-button collapsed d-flex gap-1 align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseOne">
                  HSE <span class="badge text-bg-primary">{{ hsePodaci.length }}</span>
                </button>
              </h2>
              <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <a  v-for="radnik,index in hsePodaci" :key="index" href="#" class="list-group-item list-group-item-action list-group-item-light d-flex justify-content-between">
                      <span>{{ index + 1}}. {{ radnik.imePrezime }}</span>
                      <span>{{ radnik.pozicija }}</span>
                    </a>
                </div>
              </div>
            </div>
            
            
  
            <div class="accordion-item col-md-6">
              <h2 class="accordion-header ">
                <button class="accordion-button collapsed d-flex gap-1 align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseOne">
                  IWE <span class="badge text-bg-primary">{{ iwmPodaci.length }}</span>
                </button>
              </h2>
              <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <a  v-for="radnik,index in iwmPodaci" :key="index" href="#" class="list-group-item list-group-item-action list-group-item-light d-flex justify-content-between">
                      <span>{{ index + 1}}. {{ radnik.imePrezime }}</span>
                      <span>{{ radnik.pozicija }}</span>
                    </a>
                </div>
              </div>
            </div>
            
            
  
            <div class="accordion-item col-md-6">
              <h2 class="accordion-header ">
                <button class="accordion-button collapsed d-flex gap-1 align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseOne">
                  Dizalicari <span class="badge text-bg-primary">{{ dizalicariPodaci.length }}</span>
                </button>
              </h2>
              <div id="flush-collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <a  v-for="radnik,index in dizalicariPodaci" :key="index" href="#" class="list-group-item list-group-item-action list-group-item-light d-flex justify-content-between">
                      <span>{{ index + 1}}. {{ radnik.imePrezime }}</span>
                      <span>{{ radnik.pozicija }}</span>
                    </a>
                </div>
              </div>
            </div>
            
            <div class="accordion-item col-md-6">
              <h2 class="accordion-header ">
                <button class="accordion-button collapsed d-flex gap-1 align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseOne">
                  Viljuskaristi <span class="badge text-bg-primary">{{ viljuskaristiPodaci.length }}</span>
                </button>
              </h2>
              <div id="flush-collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <a  v-for="radnik,index in viljuskaristiPodaci" :key="index" href="#" class="list-group-item list-group-item-action list-group-item-light d-flex justify-content-between">
                      <span>{{ index + 1}}. {{ radnik.imePrezime }}</span>
                      <span>{{ radnik.pozicija }}</span>
                    </a>
                </div>
              </div>
            </div> 
  
            <div class="accordion-item col-md-6">
              <h2 class="accordion-header ">
                <button class="accordion-button collapsed d-flex gap-1 align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseE" aria-expanded="false" aria-controls="flush-collapseOne">
                  Magacioneri <span class="badge text-bg-primary">{{ magacioneriPodaci.length }}</span>
                </button>
              </h2>
              <div id="flush-collapseE" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <a  v-for="radnik,index in magacioneriPodaci" :key="index" href="#" class="list-group-item list-group-item-action list-group-item-light d-flex justify-content-between">
                      <span>{{ index + 1}}. {{ radnik.imePrezime }}</span>
                      <span>{{ radnik.pozicija }}</span>
                    </a>
                </div>
              </div>
            </div>
          </div>
  
        </div>
        <div class="p-2">
          <hr>
          <div class="d-flex justify-content-between">
            <nav class="navbar bg-body-tertiary">
              <div class="container-fluid">
                <div class="d-flex" role="search">
                  <input v-model="pretraga" class="form-control me-2 col-md-12 border-primary" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-primary" disa type="submit">Search</button>
                </div>
              </div>
            </nav>
            <div class="p-1">
              
              <div class="d-flex gap-1">
                <RouterLink :to="'/radnik/dodaj'">
                  <button  class="btn btn-primary  btn-sm">Dodaj radnika</button>
                </RouterLink>
                
                <div>
                  <div class="btn-group">
                    <button type="button" class="btn btn-outline-danger btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      Filter
                    </button>
                    <div class="ms-1">
                      <a href="#" @click="promeniFilter('sve')"  class="text-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-octagon-fill" viewBox="0 0 16 16">
                          <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
                        </svg>
                      </a>
                    </div>
                    <ul class="dropdown-menu">
                      <li><a @click="promeniFilter('menadzment')" class="dropdown-item" href="#">Menadzment</a></li>
                      <li><a @click="promeniFilter('poslovodja')" class="dropdown-item" href="#">Poslovodje</a></li>
                      <li><a @click="promeniFilter('zavarivac')" class="dropdown-item" href="#">Zavarivaci</a></li>
                      <li><a @click="promeniFilter('cevar')" class="dropdown-item" href="#">Cevari</a></li>
                      <li><a @click="promeniFilter('bravar')" class="dropdown-item" href="#">Bravari</a></li>
                      <li><a @click="promeniFilter('hse')" class="dropdown-item" href="#">HSE</a></li>
                      <li><a @click="promeniFilter('iwe')" class="dropdown-item" href="#">IWE</a></li>
                      <li><a @click="promeniFilter('dizalicar')" class="dropdown-item" href="#">Dizalicari</a></li>
                      <li><a @click="promeniFilter('viljuskarista')" class="dropdown-item" href="#">Viljuskaristi</a></li>
                      <li><a @click="promeniFilter('magacioneri')" class="dropdown-item" href="#">Magacioneri</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a @click="promeniFilter('sve')" class="dropdown-item  text-danger" href="#"><b>Ponisti filter</b></a></li>
                    </ul>
                  </div>
                  
                </div>
                
              </div>
            </div>
          </div>
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <a @click="prethodnaStrana" class="page-link" href="#">Prethodna</a>
              </li>
              <li @click="idiNaStranu(item)" v-for="item,index in ukupnoStrana" class="page-item"><a class="page-link" href="#">{{ item }}</a></li>
              <!-- <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li> -->
              <li class="page-item">
                <a @click="sledecaStrana" class="page-link" href="#">Sledeca</a>
              </li>
            </ul>
            <p class="text-primary col-md-2">
              <b><small><i>Strana {{ trenutnaStrana }} od {{ ukupnoStrana }}</i></small></b>
            </p>
          </nav>
          <table class="table table-border table-striped">
            <thead>
              <tr>
                <th>Ime i prezime</th>
                <th>Pozicija</th>
                <th>Rasporedjen</th>
                <th>Licna Karta</th>
                <th>Obuka</th>
                <th>Lekarski</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="radnik, index in pretrazeniRadnici" :key="index">
                <td>{{ radnik.imePrezime }}</td>
                <td>{{ radnik.pozicija }}</td>
                <td><span v-if="radnik.rasporedjen">Da</span><span v-if="!radnik.rasporedjen">Ne</span></td>
                <td>{{ radnik.licnaKarta }}</td>
                <td>{{ radnik.obuka }}</td>
                <td>{{ radnik.lekarski }}</td>
              </tr>
            </tbody>
          </table>
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
    name: 'SviRadnici',
    data() {
      return {
        filter: 'sve',
        pretraga: '',
        trenutnaStrana: 1,
        poStrani: 10,
        
        radnici: [
  
        ],
      }
    },
    methods: {
      logOut(){
        localStorage.removeItem('sesija')
        this.$router.push('/log-in')
      },
      dohvatiPodatke(){
        this.radnici = JSON.parse(localStorage.getItem('Radnici'))
        //localStorage.setItem('Radnici',JSON.stringify(this.radnici))
        if(!this.radnici){
          const dummyPodaci = [
            {
              id: '',
              imePrezime: '',
              pozicija: '',
              projekti: [],
              rasporedjen: false,
              obuka: '',
              lekarski: '',
              licnaKarta: '',
            }
          ]
          localStorage.setItem('Radnici', JSON.stringify(dummyPodaci))
        }
        
      },
      promeniFilter(filter){
        this.filter = filter
      },
      prethodnaStrana(){
        if(this.trenutnaStrana > 1){
          this.trenutnaStrana -- 
          return
        }
      },
      sledecaStrana(){
        if(this.trenutnaStrana < this.ukupnoStrana){
          this.trenutnaStrana ++ 
          return
        }
      },
      idiNaStranu(index){
        this.trenutnaStrana = index
        return
      }
    },
    computed: {
      // Vraca menadzment (Direktor,Tehnicki direktor, Finansijski Direktor, Sef Proizvodnje)
      menadzmentPodaci(){
        return this.radnici.filter((radnik) => radnik.pozicija == 'Direktor' || radnik.pozicija == 'Tehnicki direktor' || radnik.pozicija == 'Finansijski direktor' || radnik.pozicija == 'Sef proizvodnje' || radnik.pozicija == 'HR')
      },
      poslovodjePodaci(){
        return this.radnici.filter((radnik) => radnik.pozicija == 'Poslovodja')
      },
      zavarivaciPodaci(){
        return this.radnici.filter((radnik) => radnik.pozicija == 'Zavarivac')
      },
      cevariPodaci(){
        return this.radnici.filter((radnik) => radnik.pozicija == 'Cevar')
      },
      bravariPodaci(){
        return this.radnici.filter((radnik) => radnik.pozicija == 'Bravar')
      },
      hsePodaci(){
        return this.radnici.filter((radnik) => radnik.pozicija == 'HSE')
      },
      iwmPodaci(){
        return this.radnici.filter((radnik) => radnik.pozicija == 'IWE')
      },
      dizalicariPodaci(){
        return this.radnici.filter((radnik) => radnik.pozicija == 'Dizalicar')
      },
      viljuskaristiPodaci(){
        return this.radnici.filter((radnik) => radnik.pozicija == 'Viljuskarista')
      },
      pretrazeniRadnici(){
        if(this.pretraga != ''){
          return this.radnici.filter((radnik) => radnik.imePrezime.toLowerCase().trim().includes(this.pretraga.toLowerCase().trim()))
        } return this.paginisaniRadnici
      },
      magacioneriPodaci(){
        return this.radnici.filter((radnik) => radnik.pozicija == 'Magacioner')
      },
      
      filtriraniPodaci(){
        if(this.filter == 'sve'){
          return this.radnici
        }
        if(this.filter == 'menadzment'){
          return this.radnici.filter((radnik) => radnik.pozicija == 'Direktor' || radnik.pozicija == 'Tehnicki direktor' || radnik.pozicija == 'Finansijski direktor' || radnik.pozicija == 'Sef proizvodnje' || radnik.pozicija == 'HR')
        }
        if(this.filter == 'poslovodja'){
          return this.radnici.filter((radnik) => radnik.pozicija == 'Poslovodja')
        }
        if(this.filter == 'zavarivac'){
          return this.radnici.filter((radnik) => radnik.pozicija == 'Zavarivac')
        }
        if(this.filter == 'cevar'){
          return this.radnici.filter((radnik) => radnik.pozicija == 'Cevar')
          
        }
        if(this.filter == 'bravar'){
          return this.radnici.filter((radnik) => radnik.pozicija == 'Bravar')
        }
        if(this.filter == 'hse'){
          return this.radnici.filter((radnik) => radnik.pozicija == 'HSE')
        }
        if(this.filter == 'iwe'){
          return this.radnici.filter((radnik) => radnik.pozicija == 'IWE')
        }
        if(this.filter == 'dizalicar'){
          return this.radnici.filter((radnik) => radnik.pozicija == 'Dizalicar')
        }
        if(this.filter == 'viljuskarista'){
          return this.radnici.filter((radnik) => radnik.pozicija == 'Viljuskarista')
        }
        if(this.filter == 'magacioneri'){
          return this.radnici.filter((radnik) => radnik.pozicija == 'Magacioner')
        }
      },
      paginisaniRadnici(){
        const startIndex = (this.trenutnaStrana - 1) * 10
        console.log('Start INDEX:', startIndex)
  
        const lastIndex = (startIndex + 10)
        console.log('Last INDEX:', lastIndex)
        return this.filtriraniPodaci.slice(startIndex,lastIndex)
        
      },
      ukupnoStrana(){
        return Math.ceil(this.radnici.length / this.poStrani)
      }
    },
    mounted() {
      this.dohvatiPodatke()
      this.paginisaniRadnici
    },
  
  }
  </script>
  <style>
    
  </style>