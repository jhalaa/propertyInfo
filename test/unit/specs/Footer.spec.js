import Vue from 'vue'
import Footer from '@/components/Footer'
import router from '@/router'

describe('Footer.vue', () => {
  it('should have a fixed footer', () => {
    const Constructor = Vue.extend(Footer)
    const vm = new Constructor().$mount()
    expect(vm.$el.className)
      .to.equal('footer navbar-fixed-bottom')
  })

  it('should have 3 sections', () => {
    const Constructor = Vue.extend(Footer)
    const vm = new Constructor({router}).$mount()
    expect(vm.$el.querySelectorAll('div')[0].children.length)
      .to.equal(3)
  })

  it('should have first section about', () => {
    const Constructor = Vue.extend(Footer)
    const vm = new Constructor({router}).$mount()
    expect(vm.$el.querySelectorAll('div')[0].children[0].textContent)
      .to.equal('About')
  })

  it('should have second section contact us', () => {
    const Constructor = Vue.extend(Footer)
    const vm = new Constructor({router}).$mount()
    expect(vm.$el.querySelectorAll('div')[0].children[1].textContent)
      .to.equal('Contact Us')
  })

  it('should have third section social media', () => {
    const Constructor = Vue.extend(Footer)
    const vm = new Constructor({router}).$mount()
    expect(vm.$el.querySelectorAll('div')[0].children[2].textContent)
      .to.equal('Social Media')
  })
})
