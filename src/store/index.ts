import { createStore } from 'vuex';

export default createStore({
  state: {
    courses: [
      { name: 'Courses in England', prices: [0, 100] },
      { name: 'Courses in Germany', prices: [500, null] },
      { name: 'Courses in Italy', prices: [100, 200] },
      { name: 'Courses in Russia', prices: [null, 400] },
      { name: 'Courses in China', prices: [50, 250] },
      { name: 'Courses in USA', prices: [200, null] },
      { name: 'Courses in Kazakhstan', prices: [56, 324] },
      { name: 'Courses in France', prices: [null, null] },
    ],
    sortCourses: [
      { name: 'Courses in England', prices: [0, 100] },
      { name: 'Courses in Germany', prices: [500, null] },
      { name: 'Courses in Italy', prices: [100, 200] },
      { name: 'Courses in Russia', prices: [null, 400] },
      { name: 'Courses in China', prices: [50, 250] },
      { name: 'Courses in USA', prices: [200, null] },
      { name: 'Courses in Kazakhstan', prices: [56, 324] },
      { name: 'Courses in France', prices: [null, null] },
    ],
    needSorting: false,
  },
  getters: {
  },
  mutations: {
    setSortCourses(state, data:any) {
      if (data.inputValueFrom === '' && data.inputValueTo === '') {
        state.sortCourses = state.courses;
      }
      if (data.inputValueFrom.length > 0 && data.inputValueTo.length > 0) {
        state.sortCourses = state.courses.filter((elem:any) => elem
          .prices[0] >= data.inputValueFrom && elem
          .prices[1] <= data.inputValueTo && elem.prices[0] <= data
          .inputValueTo && (elem.prices[0] !== null || elem
          .prices[1] !== null));
      } else if (data.inputValueFrom.length > 0) {
        state.sortCourses = state.courses.filter((elem:any) => elem
          .prices[0] >= data.inputValueFrom);
      } else if (data.inputValueTo.length > 0) {
        state.sortCourses = state.courses.filter((elem:any) => elem
          .prices[1] <= data.inputValueTo && elem.prices[0] <= data
          .inputValueTo && elem
          .prices[1] !== null);
      }
      if (data.checkedSorting === false) {
        state.sortCourses.sort((a:any, b:any) => {
          if (a.prices[0] === null) {
            return a.prices[1] < b.prices[0] ? -1 : 1;
          }
          return a.prices[0] < b.prices[0] ? -1 : 1;
        });
      } else {
        state.sortCourses.sort((a:any, b:any) => {
          if (a.prices[0] === null) {
            return 1;
          }
          return b.prices[0] - a.prices[0];
        });
      }
    },
  },
  actions: {
  },
  modules: {
  },
});
