import Vue from 'vue'
import Results from '@/components/Results'

describe('Results.vue', () => {
  it('should render length', () => {
    const Constructor = Vue.extend(Results)
    const vm = new Constructor().$mount()
    expect(vm.$el.children.length)
      .to.equal(4)
  })
})
