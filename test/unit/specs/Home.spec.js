import Vue from 'vue'
import Home from '@/components/Home'

describe('Home.vue', () => {
  it('should have a correct outer div class', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.className)
      .to.equal('welcome')
  })

  it('should have correct heading', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim())
      .to.equal('Welcome to Certain Lending!  Enter the address you want to search  Get Information')
  })

  it('should have inputbox 1', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelectorAll('input')[0].name)
      .to.equal('address')
  })

  it('should have inputbox 2', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelectorAll('input')[1].name)
      .to.equal('pin')
  })

  it('should have a button to fetch results', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelectorAll('button')[0].className)
      .to.equal('col-sm-offset-8 btn btn-blck btn-success')
  })

  it('should have a button with text get information', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelectorAll('button')[0].textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim())
      .to.equal('Get Information')
  })
})
