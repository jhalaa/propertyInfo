import Vue from 'vue'
import Address from '@/components/Address'

describe('Address.vue', () => {
  it('should render correct address text', () => {
    const Constructor = Vue.extend(Address)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim())
      .to.equal('483 Bright St, San Francisco, CA 94132')
  })
})
