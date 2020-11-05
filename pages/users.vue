<template lang="pug">
  v-container
    v-row.justify-center
      v-col(cols='12' md='10' lg='8')
        v-card
          v-card-title Users
          v-card-text
            v-list-group(
              v-for='user in users'
              :key='user.display_name'
            )
              template(v-slot:activator)
                v-list-item-avatar
                  img(:src='user.display_picture')
                v-list-item-content
                  | {{ user.display_name }}
              v-container
                v-row
                  v-col(
                    v-for='(post, index) in user.posts'
                    :key='index'
                    cols='12' md='6' lg='4' xl='3'
                  )
                    img(
                      :src='post.thumbnail'
                      style='object-fit: contain; width: 100%;'
                    )
</template>
<script lang="ts">
import { reactive } from '@vue/composition-api'
import { user } from '~/models/user'
import axios from 'axios'

export default {
  setup () {
    const users = reactive<Array<user>>([])

    axios({
      url: 'https://moved-phoenix-38.hasura.app/v1/graphql',
      method: 'post',
      data: {
        query: `
          query {
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
    }).then(res => {
      res.data.data.users.forEach((user: user) => {
        users.push(user)
      })
    })

    return {
      users
    }
  }
}
</script>