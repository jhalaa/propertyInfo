import Vue from 'vue'
import Contact from '@/components/Contact'

describe('Contact.vue', () => {
  it('should have a correct classes', () => {
    const Constructor = Vue.extend(Contact)
    const vm = new Constructor().$mount()
    expect(vm.$el.className)
      .to.equal('container')
  })

  it('should have correct heading', () => {
    const Constructor = Vue.extend(Contact)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim())
      .to.equal('Contact')
  })

  it('should have some text content', () => {
    const Constructor = Vue.extend(Contact)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('p').textContent)
      .not.equal(null)
  })
})
