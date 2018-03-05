import Vue from 'vue'
import Home from '@/components/Home'

describe('Home.vue', () => {
  it('should have a correct outer div class', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.className)
      .to.equal('welcome')
  })

  it('should have first section about', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim())
      .to.equal('Welcome to Certain Lending!  Enter the address you want to search  Get Information')
  })
})
