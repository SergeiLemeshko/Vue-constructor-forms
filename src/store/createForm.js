import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFormStore = defineStore('form', () => {
    const hideFields = ref(false); //скрываем/показываем блок "поля"
    const arrFields = ref([]); //массив всех полей инпутов формы
    const arrFieldsSelect = ref([]); //массив всех селектов формы
    const arrFieldsSelectMult = ref([]); //массив всех селектов multiple формы
    const arrPlaceholders = ref([]); //массив placeholderов
    const inpPlaceholder = ref(''); //ввод placeholder
    const acceptPlaceholder = ref(''); //куда принимаем placeholder
    const checkedInp = ref({}) // привязываем checkbox inputs
    const checkedSel = ref({}) // привязываем checkbox selects
    const checkedSelMult = ref({}) // привязываем checkbox selects multiple
    const checkMod = ref('') // привязываем checkbox selects
    
    const input = ref({label: 'inp', placeholder: ''});
    const select = ref({select: 1});
    const selectOptions = ref([
        {name:'Tom', age:22},
        {name:'Bob', age:25},
        {name:'Sam', age:28},
        {name:'Alice', age:26}
    ]);

    //для скрытия/показа блока "поля"
    const showBlockField = (e) => {
        e.target.innerText === "Поля" ? hideFields.value = true : hideFields.value = false;
    };

    const clickSelect = function(e) {
        if(e.target.value !== '') {
            if(e.target.value === "InpNum" || e.target.value === "InpText") {
                arrFields.value.push(input);
            } 
            if(e.target.value === "Select") {
                arrFieldsSelect.value.push(select);
            }
            if(e.target.value === "SelectMult") {
                arrFieldsSelectMult.value.push(select);
            }
        } 
        e.target.value = "";//очищаем выбранный option
    };
    
    const blurInput = function() {
        if(!inpPlaceholder.value) return;

        acceptPlaceholder.value = inpPlaceholder.value;
        arrFields.value.placeholder = acceptPlaceholder.value;
        arrPlaceholders.value.push(acceptPlaceholder.value);
        inpPlaceholder.value = '';
    };

    //удаление инпута по клику на кнопку Удалить поле
    const deleteInpNum = function(index) {
        arrFields.value.splice(index, 1);
        arrPlaceholders.value.splice(index, 1);
    };
    //удаление selecta по клику на кнопку Удалить поле
    const deleteSelect = function(index) {
        arrFieldsSelect.value.splice(index, 1);
    };
    //удаление selecta multiple по клику на кнопку Удалить поле
    const deleteSelectMult = function(index) {
        arrFieldsSelectMult.value.splice(index, 1);
    };

    return { 
        clickSelect, 
        blurInput, 
        showBlockField,
        deleteInpNum, 
        deleteSelect,
        deleteSelectMult,
        hideFields, 
        arrFields, 
        input, 
        inpPlaceholder, 
        acceptPlaceholder, 
        arrPlaceholders, 
        arrFieldsSelect, 
        selectOptions, 
        arrFieldsSelectMult,
        checkedInp,
        checkedSel,
        checkedSelMult,
        checkMod
    }
})