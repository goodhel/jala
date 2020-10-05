<template>
<div class="container">
    <div class="row pt-1">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <h5 class="card-title p-2">Pilih Lokasi</h5>
                        <div class="col-md-4">
                            <v-select placeholder="Choose place to view" label="name" :options="options" :reduce="myValue => myValue.id" v-model="myValue"></v-select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-5">
            <div class="card">
                <div class="card-header">
                    Persebaran Harga Udang Size 100
                </div>
                <div class="card-body p-0">
                    <gmap-map
                    :center="center"
                    :zoom="7"
                    style="width:100%;  height: 200px;"
                    >
                        <gmap-marker
                            :key="index"
                            v-for="(m, index) in markers"
                            :position="m.position"
                            @click="center=m.position"
                            :label="m.label"
                        ></gmap-marker>
                    </gmap-map>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    Grafik Harga Udang
                </div>
                <div class="card-body">
                    <line-chart style="width:100%;  height: 200px;" v-if="chartjs.length > 0" :data="hargas" :options="chartOptions" :labels="labels"/>
                    <h6 v-else>Silakan Pilih Lokasi Untuk Menampilkan Grafik Harga Udang Per Daerah</h6>
                </div>
            </div>
        </div>
        <div class="col-md-7">
            <div class="card">
                <div class="card-header">
                    List Harga Udang
                    <button class="btn btn-primary btn-sm float-right">Tambah Harga</button>
                </div>
                <div class="card-body pb-0" v-for="shrimp in shrimps" :key="shrimp.id">
                    <div class="card bg-light">
                        <div class="card-header border-bottom-0 pb-0">
                            <p class="mb-0">
                                <b style="color: #007bff;font-size: 24;">{{shrimp.region['province_name']}}</b>
                                <span class="float-right" style="font-size: 13px;">
                                    {{shrimp.date | formatDate}}
                                </span>
                            </p>
                        </div>
                        <div class="card-body pt-0 pb-0">
                            <div class="row">
                                <div class="col-7">
                                    <p style="font-size: 14px;">
                                        <span style="color: #007bff;">{{shrimp.region['name']}}</span><br>
                                        {{shrimp.species['name']}}<br>
                                        Harga Size 100 : <br>
                                        <b style="font-size: 20px;">{{shrimp.size_100 | currency}}</b>
                                    </p>
                                </div>
                                <div class="col-5 text-right">
                                    <div class="float-right">
                                        Penjual<br>
                                        <span v-if="shrimp.creator">{{shrimp.creator['name']}}</span> <br>
                                        <span v-if="shrimp.creator">{{shrimp.creator['phone']}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                                <router-link :to="{name: 'shrimp.detail', params: { id: shrimp.id }}" class="btn btn-sm btn-block btn-primary">SEMUA SIZE</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    import moment from 'moment'
    import LineChart from '../components/LineChart.vue' //IMPORT COMPONENT CHART 
    export default {
        data(){
            return {
                //variable array menampung hasil fetch api
                shrimps: [], //shrimp
                myValue: '', //id lokasi
                options: [], //lokasi
                chartjs: [], //data chart
                chartOptions: {
                    responsive: true,
                    maintainAspectRatio: false
                },
                center: { lat: -7.15097500, lng: 110.14025940 },
                markers: [{
                    position: {
                        lat: -7.78278,
                        lng: 110.36083
                    },
                    label: "Rp. 40000",
                    title: 'title1',
                },{
                    position: {
                        lat: -7.55611,
                        lng: 110.83167
                    },
                    title: 'title2',
                    label: {
                        text: 'Rp. 45000',
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "10px"
                    }
                },{
                    position: {
                        lat: -7.51235,
                        lng: 110.12345
                    },
                    title: 'title3',
                    label: {
                        text: 'Rp. 60000',
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "12px"
                    },
                }],
                test: []
            };
        },
        created(){
            this.loadData();
            this.loadLokasi();
        },
        watch: {
            myValue(after, before){
                this.fetch();
                this.chart();
            },
        },
        methods: {
            loadData(){
                //fetch data dari api menggunakan axios
                axios.get("/api/shrimp").then(response => {
                    //mengirim data hasil fetch ke variabel shrimps
                    this.shrimps = response.data.data;
                });
            },
            loadLokasi(){
                axios.get("/api/lokasi").then(response =>{
                    this.options = response.data.data;
                });
            },
            fetch(){
                axios.get("/api/shrimp/search",{params: {myValue: this.myValue }}).then(response => {
                    this.shrimps = response.data.data;
                })
            },
            chart(){
                axios.get("/api/chart",{params: {myValue: this.myValue }}).then(response => {
                    this.chartjs = response.data;
                })
            }
        },
        computed: {
            labels(){
                return _.map(this.chartjs, function(o) {
                    return moment(o.date).format('MMMM YYYY')
                });
            },
            hargas(){
                return _.map(this.chartjs, function(o) {
                    return o.size100
                });
            }
        },
        components: { 'line-chart': LineChart },
    }
</script>