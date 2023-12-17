import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFormStore = defineStore('form', () => {
    const hideFields = ref(false);//скрываем/показываем блок "поля"
    const arrFields = ref([]);//массив всех полей формы
    const arrPlaceholders = ref([]);//массив placeholderов
    const inpPlaceholder = ref('');//ввод placeholder
    const acceptPlaceholder = ref('');// кужп принимаеи placeholder

    const inputs = ref({label: 'Guest-1', placeholder: ''});

    //для скрытия/показа блока "поля"
    const showBlockField = (e) => {
        e.target.innerText === "Поля" ? hideFields.value = true : hideFields.value = false;
    }

    const clickSelect = function(e) {
        if(e.target.value !== '') {
            if(e.target.value === "InpNum") {
                arrFields.value.push(inputs);
            } 
        } 
        console.log(arrFields.value)
        e.target.value = ""
    }

    const blurInput = function() {
        if(!inpPlaceholder.value) return;
        acceptPlaceholder.value = inpPlaceholder.value;
        arrFields.value.placeholder = acceptPlaceholder.value;
        arrPlaceholders.value.push(acceptPlaceholder.value);

        inpPlaceholder.value = ''
        console.log(arrFields.value.placeholder)
    }

    return { hideFields, showBlockField, arrFields, inputs, clickSelect, blurInput, inpPlaceholder, acceptPlaceholder, arrPlaceholders }
})