import { mount } from '@vue/test-utils'
import User from '@/components/user.vue'

const factory = (propsData = {}, mocks = {}) => mount(User, {
  global: {
    mocks
  },
  propsData,
  stubs: ['v-list-group', 'v-list-item-avatar', 'v-list-item-content', 'v-container', 'v-row', 'v-col']
});

const thumbnailSelector = 'img.post-thumbnail'

describe('User', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  test('is a Vue instance', () => {
    // GIVEN
    const props = {
      user: {
        display_name: 'test',
        display_picture: 'https://cdn.wandrcontent.com/assets/profile/user_outline.png',
        posts: []
      }
    }

    // WHEN
    const wrapper = factory(props)

    // THEN
    expect(wrapper.vm).toBeTruthy()
  })

  test('should have a user prop when mounted', () => {
    // GIVEN
    const props = {
      user: {
        display_name: 'test',
        display_picture: 'https://cdn.wandrcontent.com/assets/profile/user_outline.png',
        posts: []
      }
    }

    // WHEN
    const wrapper = factory(props)

    // THEN
    expect(wrapper.vm.user).toEqual(props.user)
  })

  test('should display user post thumbnails', () => {
    // GIVEN
    const props = {
      user: {
        display_name: 'test',
        display_picture: 'https://cdn.wandrcontent.com/assets/profile/user_outline.png',
        posts: [
          { thumbnail: 'https://cdn.wandrcontent.com/video/852e3fcadbc24e87ae71cf55a7760f66/post.jpg' },
          { thumbnail: 'https://cdn.wandrcontent.com/video/852e3fcadbc24e87ae71cf55a7760f66/post.jpg' }
        ]
      }
    }

    // WHEN
    const wrapper = factory(props)

    // THEN
    expect(wrapper.find(thumbnailSelector).exists()).toBe(true)
  })

  test('should not display user post thumbnails', () => {
    // GIVEN
    const props = {
      user: {
        display_name: 'test',
        display_picture: 'https://cdn.wandrcontent.com/assets/profile/user_outline.png',
        posts: []
      }
    }

    // WHEN
    const wrapper = factory(props)

    // THEN
    expect(wrapper.find(thumbnailSelector).exists()).toBe(false)
  })
})
