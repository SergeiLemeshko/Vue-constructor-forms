<template>
  <form id="form" name="form" method="get">
    <div v-for="(input, k) in arrFields">
      <div class="form-control">
        <label :for="input.label"></label>
        <input type="text" :id="input.label" :placeholder="arrPlaceholders[k]">
      </div>
    </div>
    <div v-for="sel in arrFieldsSelect">
      <div class="form-control">
        <select class="center-select">
          <option v-for="opt in selectOptions">{{ opt.name }}</option>
        </select>
      </div>
    </div>
    <div v-for="sel in arrFieldsSelectMult" multiple>
      <div class="form-control">
        <select class="center-select">
          <option v-for="opt in selectOptions">{{ opt.age }}</option>
        </select>
      </div>
    </div>
  </form>
</template>

<script setup>
  import { useFormStore } from '@/store/createForm.js'
  import { storeToRefs } from 'pinia'

  const store = useFormStore();
  const { arrFields, arrPlaceholders, arrFieldsSelect, selectOptions, arrFieldsSelectMult, checkMod } = storeToRefs(store);

</script>

<style scoped lang="scss">
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

.form-control {
  background-color: #3EA748;
}
</style>
