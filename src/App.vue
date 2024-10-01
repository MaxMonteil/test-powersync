<template>
  <main>
    <h1>Data</h1>

    <pre>{{ data }}</pre>
  </main>
</template>

<script setup lang="ts">
import { useQuery } from '@powersync/vue'
import { powerSync } from './plugins/powerSync'
import { supabase } from './plugins/supabase'

powerSync.init()
supabase.registerListener({
  sessionStarted: () => powerSync.connect(supabase),
})
supabase.init()

const { data } = useQuery('select * from users')
powerSync.get('select * from users').then(data => console.log({ data }))
</script>
