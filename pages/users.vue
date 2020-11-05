<template lang="pug">
  v-container
    v-row.justify-center
      v-col(cols='12' md='10' lg='8')
        v-card
          v-card-title Users
          v-card-text
            user(
              v-for='(user, key) in users'
              :key='key'
              :user='user'
            )
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@vue/composition-api'
import axios from 'axios'

import Post from '@/interfaces/post'
import User from '@/interfaces/user'

import config from '@/config'

export default defineComponent({
  name: 'Users',

  setup () {
    const users = reactive<User[]>([])
    const data = {
      query: `
        query MyQuery {
          users {
            display_name
            display_picture
            posts {
              thumbnail
            }
          }
        }
      `
    }

    axios.post(config.graphiqlEndpoint, data)
      .then(res => {
        users.push(...res.data.data.users)
      })

    return {
      users
    }
  }
})
</script>
