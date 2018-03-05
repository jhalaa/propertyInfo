import Vue from 'vue'
import Header from '@/components/Header'

describe('Header.vue', () => {
  it('should render correct heading text', () => {
    const Constructor = Vue.extend(Header)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.heading').textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim())
      .to.equal('Certain Lending')
  })

  it('should render correct glyphicon', () => {
    const Constructor = Vue.extend(Header)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.heading span').className)
      .to.equal('pull-right glyphicon glyphicon-home')
  })
})
