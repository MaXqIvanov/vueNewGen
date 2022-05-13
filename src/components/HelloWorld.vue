<template>
  <div class="main">
    <input v-model="inputValueFrom" placeholder="цена от">
    <input v-model="inputValueTo" class="input_price" placeholder="цена до">
    <button @click="setSortCourses({checkedSorting, inputValueFrom, inputValueTo})"
    class="button_price">поиск</button>
     <div class="form-check form-switch">
      <label class="form-check-label" for="flexSwitchCheckChecked">
        <input class="form-check-input" type="checkbox" role="switch"
      id="flexSwitchCheckChecked" aria-checked="true"
      v-model="checkedSorting"
      @change="setSortCourses({checkedSorting, inputValueFrom, inputValueTo})">
        сортировка по цене</label>
    </div>
    <div v-if="sortCourses.length > 0">
      <ul :key="elem.name" v-for="(elem) in sortCourses">
      <li class="arrayCourses">
        <div>
          {{ elem.name }}
        </div>
        <div class="price">
          {{ elem.prices }}
        </div>
      </li>
    </ul>
    </div>
    <div class="not_found" v-else>К сожалению курсов по такой цене нет</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import '../scss/main.scss';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      inputValueFrom: '',
      inputValueTo: '',
      checkedSorting: false,
    };
  },
  methods: {
    ...mapMutations({
      setSortCourses: 'setSortCourses',
    }),
  },
  computed: mapState({
    courses: (state:any) => state.courses,
    sortCourses: (state:any) => state.sortCourses,
  }),
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
}
li {
  display: inline-block;
  margin: 0 0px;
}
a {
  color: #42b983;
}
</style>
