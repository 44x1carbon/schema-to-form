<template>
    <div>
        <section>
            <my-header :size="headerSize" v-if="formData.description !== undefined">
                <div v-if="required" class="required">必須</div>
                {{ formData.description }}                 
            </my-header>
            <div>
                <div v-if="formData.properties"
                     v-for="(data, key) in formData.properties">       
                    <form-maker :form-data="data" 
                                :header-size="1"
                                :required="isRequired(key)" 
                                v-model="d[key]"/>
                </div>
                <template v-if="formData.type === 'array'">
                    <array-form v-model="d" :form-data="formData.items"></array-form>
                </template>
                <template v-else-if="formData.type === 'string'">
                    <string-form v-model="d"></string-form>
                </template>
            </div>
        </section>
    </div>
</template>

<script>
import MyHeader from './Header.vue'
import ArrayForm from './ArrayForm.vue'
import StringForm from './StringForm.vue'
export default {
    name: 'form-maker',
    data() {
        return {
            d: {}
        }
    },
    props: [ 'formData', 'headerSize', 'required', 'value'],
    components: {
        MyHeader,
        ArrayForm,
        StringForm,
    },
    created() {
        let type = this.formData.type
        let data = this.value  
        if(type === 'object') {
            let object =this.formData.properties
            for(var key in object) {
                if(typeof object[key] === "object") {
                    let o = object[key]
                    if(o.properties !== undefined) {                        data[key] = {}
                    } else {
                        let type = o.type
                        if(type === 'string') {  
                            data[key] = ''
                        } else 
                        if(type === 'array') {  
                            data[key] = []
                        }
                    }            
                }                                                
            }
        }
        this.$emit('input', data)
        this.d = this.value
    },
    watch: {
        d() {
            this.$emit('input', this.d)
        }
    },
    methods: {
        isRequired(key) {            
            if(!this.formData.required) return false
            return this.formData.required.indexOf(key) !== -1
        }
    }
}
</script>

<style scoped>
    .required {
        color: red;
    }
</style>

