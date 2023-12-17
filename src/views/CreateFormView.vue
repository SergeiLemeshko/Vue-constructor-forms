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
          <!-- <MyFields /> -->
          <template v-if="hideFields">
            <div>
              <h3>Скрытые поля</h3>
              <select @click.prevent="clickSelect" class="center-select">
                <option value="">Добавить поле</option>
                <option value="InpNum">Input Number</option>
                <option value="InpText">Input Text</option>
                <option value="Select">Select</option>
              </select>
            </div>
            <div>
              <h3>Поля</h3>
              <div v-for="el in arrPlaceholders" class="center-contact">
                <p>{{ el }}</p>
                <p>Контакт</p>
                <p>Удалить поле</p>
              </div>
              <div v-for="(input) in arrFields">
                <div class="form-control">
                  <label :for="input.label">{{ input.label }}</label>
                  <input @blur="blurInput" v-model="inpPlaceholder" type="text" :id="input.label" :placeholder="acceptPlaceholder">
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="right">
            <p>content content content content content content content contentcontentv content content content content content</p>
        </div>
    </section>
</template>

<script setup>
  import { useFormStore } from '@/store/createForm.js'
  import { storeToRefs } from 'pinia'
  // import MyFields from '@/components/MyFields.vue'

  const store = useFormStore()
  const { hideFields, arrFields, inpPlaceholder, acceptPlaceholder, arrPlaceholders } = storeToRefs(store)
  const { showBlockField, clickSelect, blurInput } = store
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
    background-color: #3EA748;
    
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