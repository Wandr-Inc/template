import { mount } from '@vue/test-utils'
import Users from '@/pages/users.vue'

const factory = (mocks = {}) => mount(Users, {
  global: {
    mocks
  },
  stubs: ['v-container', 'v-row', 'v-col', 'v-card', 'v-card-title', 'v-card-text', 'user']
});

describe('Users', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  test('is a Vue instance', () => {
    // WHEN
    const wrapper = factory()

    // THEN
    expect(wrapper.vm).toBeTruthy()
  })
})
