<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <h3>All projects</h3>
            <div>
                <button @click="dodaj" class="btn btn-primary btn-sm">Dodaj novi projekat</button>
            </div>
        </div>
        <div  v-for="projekat,index in projekti" :key="projekat.brojUgovora" class="card">
            <div class="card-header">
                Broj ugovora: {{ projekat.brojUgovora }}
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ projekat.naziv }}</h5>
                <p class="card-text"><small>{{ projekat.pocetakRadova }} - {{ projekat.krajRadova }}</small></p>
                <h6 class="card-text">{{ projekat.opis }}</h6>
                <p class="card-text"><small>Naručioc radova: <b>{{ projekat.naruciocRadova }}</b></small></p>
                <p class="card-text"><small>Vrednost <b>{{ projekat.vrednost }} RSD</b></small></p>
                <RouterLink :to="`/single-project/${index}`" class="btn btn-outline-primary btn-sm">Pogledaj detalje</RouterLink>
            </div>
        </div>
    </div>
</template>
<script>
export default {    
    name: 'ProjectsView',
    data() {
        return {
            projekti: [
                
            ],

        }
    },
    methods: {
        dodaj(){
            this.$router.push('projects/add')
        },
        dohvatiPodatke(){
            // localStorage.setItem('projekti-dmmont', JSON.stringify(this.projekti))
            this.projekti = JSON.parse(localStorage.getItem('projekti-dmmont') || {})     
            // this.projekti.splice(2,1)
            // localStorage.setItem('projekti-dmmont', JSON.stringify(this.projekti))
        }
    },
    mounted() {
        this.dohvatiPodatke()
    },
}
</script>
<style>
    
</style>