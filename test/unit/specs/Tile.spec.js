import Vue from 'vue'
import Tile from '@/components/Tile'

describe('Tile.vue', () => {
  it('should have a correct classes', () => {
    const Constructor = Vue.extend(Tile)
    const vm = new Constructor().$mount()
    expect(vm.$el.className)
      .to.equal('tile panel panel-default')
  })

  it('should display correct text in props', () => {
    const Constructor = Vue.extend(Tile)
    const vm = new Constructor({
      propsData: {
        text: 'hi'
      }
    }).$mount()
    expect(vm.$el.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim())
      .to.equal('hi')
  })

  it('should call appropriate method on to text transform', () => {
    const Constructor = Vue.extend(Tile)
    const vm = new Constructor().$mount()
    expect(Tile.methods.textTransform('hello'))
      .to.equal('Hello')
  })
})
