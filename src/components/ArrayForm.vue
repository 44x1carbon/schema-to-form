<template>    
    <div>        
        <div v-for="(v, index) in value" class="row">            
            <div v-if="formData.properties" class="disp-flex">
                <span class="index">{{ index+1 }}</span>
                <div  v-for="(data, key) in formData.properties">       
                    <form-maker :form-data="data" 
                                :header-size="1"
                                :required="isRequired(key)" 
                                v-model="d[index][key]"/>
                </div>
                <span @click="removeForm(index)" class="remove">×</span>
            </div>
            
            
            <div v-else>
                <span class="index">{{ index+1 }}</span>
                <input type="text" :value="v" @input="onInput(index,$event.target.value)">
                <span @click="removeForm(index)" class="remove">×</span>
            </div>            
        </div>
        
        <button @click="addForm">項目追加</button>
    </div>
    
</template>

<script>
export default {
    props: {
        value: {},             
        formData: {
            type: Object
        }
    },
    data() {
        return {
            d: []
        }
    },
    created() {     
        this.d = this.value
    },
    methods: {
        updateValue(value) {
            this.$emit('input', value)
        },
        onInput(index, value) {
            let _value = this.value
            _value[index] = value
            this.updateValue(_value)
        },        
        addForm() {
            let _value = this.value
            let type = this.formData.type
            if(type === 'object') _value.push({})
            if(type === 'string') _value.push('')
            this.updateValue(_value)
        },
        removeForm(index) {
            let _value = this.value
            _value.splice(index,1)
            this.updateValue(_value)
        },
        isRequired(key) {            
            if(!this.formData.required) return false
            return this.formData.required.indexOf(key) !== -1
        }
    }    
}
</script>

<style scoped>
    .disp-flex {
        display: flex;
        align-items: center;
    }
    .index {
        margin: 10px;
    }
    .row:nth-child(odd) {
        background-color:  white;
    }
    .remove {
        margin: 10px;
        background-color: #e0e0e0;
        border-radius: 50%;
        display: inline-block;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        cursor: pointer;
    }

</style>

