<template lang="pug">
  v-list-group
    template(v-slot:activator)
      v-list-item-avatar
        img(
          :src='user.display_picture'
          class='avatar'
        )
      v-list-item-content
        | {{ user.display_name }}
    v-container
      v-row
        v-col(
          v-for='(post, i) in user.posts'
          :key='i'
          cols='12' md='6' lg='4' xl='3'
        )
          img(
            :src='post.thumbnail'
            style='object-fit: contain; width: 100%;'
            class='post-thumbnail'
          )
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'User',

  props: ['user']
})
</script>
