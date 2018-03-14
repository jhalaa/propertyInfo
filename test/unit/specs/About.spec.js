import Vue from 'vue'
import About from '@/components/About'

describe('About.vue', () => {
  it('should have a correct classes', () => {
    const Constructor = Vue.extend(About)
    const vm = new Constructor().$mount()
    expect(vm.$el.className)
      .to.equal('container')
  })

  it('should have correct heading', () => {
    const Constructor = Vue.extend(About)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim())
      .to.equal('About')
  })

  it('should have some text content', () => {
    const Constructor = Vue.extend(About)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('p').textContent)
      .not.equal(null)
  })
})
