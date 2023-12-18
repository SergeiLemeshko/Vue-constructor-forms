<template>
    <section class="form">
        <div class="left">
            <button @click="$router.push('/')">Назад</button>
            <ul @click="showBlockField">
                <li>Тип формы</li>
                <li>Сущности</li>
                <li>Поля</li>
                <li>Правила показа полей</li>
                <li>Другие настройки</li>
            </ul>
            <div class="form-btns">
                <button>Скрипт</button>
                <button>Сохранить</button>
            </div>
        </div>
        <div class="center">
          <template v-if="hideFields">
            <div>
              <h3>Скрытые поля</h3>
              <select @click.prevent="clickSelect" class="center-select">
                <option value="">Добавить поле</option>
                <option value="InpNum">Добавить Input Number</option>
                <option value="InpText">Добавить Input Text</option>
                <option value="Select">Добавить Select</option>
                <option value="SelectMult">Добавить Select multiple</option>
              </select>
            </div>
            <div>
              <h3>Поля</h3>
              <div v-for="el in arrPlaceholders" class="center-contact">
                <p>{{ el }}</p>
              </div>
              <div v-for="(input, i) in arrFields">
                <div class="form-control">
                  <p>Контакт</p>
                  <p @click="deleteInpNum">Удалить поле</p>
                  <label :for="input.label"></label>
                  <input @blur="blurInput" v-model="inpPlaceholder" type="text" :id="input.label" :placeholder="arrPlaceholders[i]">
                </div>
                <input type="checkbox" id="checkbox" v-model="checkedInp[`input${i}`]">
                <label for="checkbox"></label>
              </div>
              <div v-for="(sel, k) in arrFieldsSelect">
                <div class="form-control">
                  <p @click="deleteSelect">Удалить поле</p>
                  <select class="center-select">
                    <option v-for="opt in selectOptions">{{ opt.name }}</option>
                  </select>
                  <input type="checkbox" id="checkbox" v-model="checkedSel[`sel${k}`]">
                  <label for="checkbox"></label>
                </div>
              </div>
              <div v-for="(sel, j) in arrFieldsSelectMult" multiple>
                <div class="form-control">
                  <p @click="deleteSelectMult">Удалить поле</p>
                  <select class="center-select">
                    <option v-for="opt in selectOptions">{{ opt.age }}</option>
                  </select>
                  <input type="checkbox" id="checkbox" v-model="checkedSelMult[`sel${j}`]">
                  <label for="checkbox"></label>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="right">
          <MyForms></MyForms>
        </div>
    </section>
</template>

<script setup>
  import { useFormStore } from '@/store/createForm.js'
  import { storeToRefs } from 'pinia'
  import MyForms from '@/components/MyForms.vue'

  const store = useFormStore();
  const { hideFields, arrFields, inpPlaceholder, arrPlaceholders, arrFieldsSelect, selectOptions, arrFieldsSelectMult, checkedInp, checkedSel, checkedSelMult } = storeToRefs(store);
  const { showBlockField, clickSelect, blurInput, deleteInpNum, deleteSelect, deleteSelectMult} = store;
</script>

<style lang="scss" scoped>
.form {
    display: flex;
    width: 100%;
    height: 100vh;
}
.left {
    width: calc(100% - 33%);
    flex-direction: column;
    background-color: #FFFFFF;

    p {
        display: inline-block;
    }
}
.center {
    width: calc(100% - 33%);
    flex-direction: column;
    background-color: #F9F9F9; 
    
    p {
        display: inline-block;
    }
}
.right {
    width: calc(100% - 33%);
    flex-direction: column;
    background-color: #a7a7a7;
    
    p {
        display: inline-block;
    }
}
.form-btns {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        width: 70px;
    }
}
.center-select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  padding: 10px;
  background: url("@/assets/img/plus.svg") no-repeat right center;
  outline: 0;
  width: 200px;
  height: 50px;
  border: 1px dotted #3EA748;
  border-radius: 8px;
}
.center-contact {
  display: flex;
}
input::placeholder {
  color: red;
  font-size: 1.2em;
  font-style: italic;
}
</style>