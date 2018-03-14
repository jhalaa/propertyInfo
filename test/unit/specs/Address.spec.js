import Vue from 'vue'
import Address from '@/components/Address'
import { store } from '@/Store'

describe('Address.vue', () => {
  it('should have correct address class', () => {
    const Constructor = Vue.extend(Address)
    const vm = new Constructor({store}).$mount()
    expect(vm.$el.className)
      .to.equal('address-text container-fluid')
  })

  it('should render correct address text', () => {
    const Constructor = Vue.extend(Address)
    const vm = new Constructor({store}).$mount()
    expect(vm.$el.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim())
      .to.equal('483 Bright Street, 95138')
  })
})
