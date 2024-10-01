import { AppSchema } from '@/library/powersync/AppSchema'
import { createPowerSyncPlugin } from '@powersync/vue'
import { PowerSyncDatabase } from '@powersync/web'

export const powerSync = new PowerSyncDatabase({
  database: { dbFilename: 'test-powersync' },
  schema: AppSchema,
})

export const powerSyncPlugin = createPowerSyncPlugin({ database: powerSync })
