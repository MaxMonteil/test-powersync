import { column, Schema, Table } from '@powersync/web'

const users = new Table({
  created_at: column.text,
  user_name: column.text,
  email: column.text,
  email_verified: column.integer,
  weekday_start: column.integer,
  setup_time: column.integer,
  allow_sound: column.integer,
  allow_vibration: column.integer,
  meas_system: column.text,
})

export const AppSchema = new Schema({ users })

export type Database = (typeof AppSchema)['types']
