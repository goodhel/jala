<template>
    <div class="container">
        <div class="row pt-3">
            <div class="col-md-7">
                <div class="card">
                    <div class="card-header pb-0">
                        Detail Harga Udang
                        <p class="float-right">
                            <span class="badge badge-primary">Semua Harga</span>
                        </p>
                    </div>
                    <div class="card-body table-responsive p-0">
                        <div class="col-md-12">
                            <div class="row pl-3">
                                <div class="col-md-6">
                                    <span style="font-size: 13px;">{{details.date | formatDate}}</span> <br>
                                    <b style="font-size: 15px;" v-if="details.species">{{details.species['name']}}</b> <br>
                                    <b style="font-size: 18px;color: #007bff;" v-if="details.region">{{details.region['province_name']}}</b> <br>
                                    <span v-if="details.region">{{details.region['name']}}</span>
                                </div>
                                <div class="col-md-6 text-right">
                                    <p class="float-right">
                                        <span style="font-size: 13px;">Penjual:</span> <br>
                                        <span style="font-size: 13px;" v-if="details.creator">{{details.creator['name']}}</span> <br>
                                        <span style="font-size: 13px;" v-if="details.creator">{{details.creator['phone']}}</span>
                                    </p>
                                </div>
                            </div>
                            <table class="table table-hover table-nowrap">
                                <tbody>
                                    <tr>
                                        <td style="width: 40%;">Size 30</td>
                                        <td style="width: 60%;">{{details.size_30 | currency}}</td>
                                    </tr>
                                    <tr>
                                        <td style="width: 40%;">Size 40</td>
                                        <td style="width: 60%;">{{details.size_40 | currency}}</td>
                                    </tr>
                                    <tr>
                                        <td style="width: 40%;">Size 50</td>
                                        <td style="width: 60%;">{{details.size_50 | currency}}</td>
                                    </tr>
                                    <tr>
                                        <td style="width: 40%;">Size 60</td>
                                        <td style="width: 60%;">{{details.size_60 | currency}}</td>
                                    </tr>
                                    <tr>
                                        <td style="width: 40%;">Size 70</td>
                                        <td style="width: 60%;">{{details.size_70 | currency}}</td>
                                    </tr>
                                    <tr>
                                        <td style="width: 40%;">Size 80</td>
                                        <td style="width: 60%;">{{details.size_80 | currency}}</td>
                                    </tr>
                                    <tr>
                                        <td style="width: 40%;">Size 90</td>
                                        <td style="width: 60%;">{{details.size_90 | currency}}</td>
                                    </tr>
                                    <tr>
                                        <td style="width: 40%;">Size 100</td>
                                        <td style="width: 60%;">{{details.size_100 | currency}}</td>
                                    </tr>
                                    <tr>
                                        <td style="width: 40%;">Size 110</td>
                                        <td style="width: 60%;">{{details.size_110 | currency}}</td>
                                    </tr>
                                    <tr>
                                        <td style="width: 40%;">Size 120</td>
                                        <td style="width: 60%;">{{details.size_120 | currency}}</td>
                                    </tr>
                                    <tr>
                                        <td style="width: 40%;">Size 130</td>
                                        <td style="width: 60%;">{{details.size_130 | currency}}</td>
                                    </tr>
                                    <tr>
                                        <td style="width: 40%;">Size 140</td>
                                        <td style="width: 60%;">{{details.size_140 | currency}}</td>
                                    </tr>
                                    <tr>
                                        <td style="width: 40%;">Size 150</td>
                                        <td style="width: 60%;">{{details.size_150 | currency}}</td>
                                    </tr>
                                    <tr>
                                        <td style="width: 40%;">Catatan</td>
                                        <td style="width: 60%;">{{details.remark}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <p>
                Rekomendasi
                <span class="float-right">
                    <!-- <button class="btn btn-sm btn-primary"> -->
                        <router-link class="btn btn-sm btn-primary" to="/"> Kembali </router-link>
                    <!-- </button> -->
                </span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            details: {}
        };
    },
    created(){
        this.loadData();
    },
    methods: {
        loadData(){
            axios.get("/api/shrimp/detail/" + this.$route.params.id).then(response =>{
                this.details = response.data.data;
            });
        },
    }
    
}
</script>