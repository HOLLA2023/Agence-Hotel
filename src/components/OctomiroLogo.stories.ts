import OctomiroLogo from './OctomiroLogo.vue'

export default {
  title: 'OctomiroLogo',
  component: OctomiroLogo,
  tags: ['autodocs'],
}

export const Default = () => ({
  components: { OctomiroLogo },
  template: `<OctomiroLogo />`,
})

export const White = () => ({
  components: { OctomiroLogo },
  template: `<div class="bg-primary">
    <OctomiroLogo />
  </div>`,
})

export const Blue = () => ({
  components: { OctomiroLogo },
  template: `<OctomiroLogo />`,
})

export const Height = () => ({
  components: { OctomiroLogo },
  template: `<OctomiroLogo :height="48"/>`,
})
