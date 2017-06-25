<template>
    <div id="app">
        <div class="form">
            <h1>入力フォーム</h1>
            <form-maker :form-data="json" :header-size="1" v-model="datas"></form-maker>
        </div>
        <div class="preview">
            <h1>入力ができたらJSONに変換ボタンを押してください</h1>
            <button @click="toJson">JSONに変換</button>
            <pre>{{ jsonAtDatas }}</pre>
        </div>        
    </div>
</template>

<script>
import json from '../schema.json'

export default {
    name: 'app',
    data () {
        return {        
            json,
            datas: {},
            jsonAtDatas: ''
        }
    },    
    methods: {
        toJson() {
            this.jsonAtDatas = JSON.stringify(this.datas,null,4)
        }
    }                
}
</script>

<style scoped>
    #app {
        width: 800px;
        margin: 0 auto;
    }
    .form {
        padding: 20px;
        background-color: #f3f3f3;
    }
</style>