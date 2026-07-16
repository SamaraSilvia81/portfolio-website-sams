import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

const cache = {}

export function useSupabase(table, orderBy = 'sort_order') {
  const [data, setData] = useState(cache[table] || [])
  const [loading, setLoading] = useState(!cache[table])
  const [error, setError] = useState(null)

  useEffect(() => {
    if (cache[table]) return

    async function fetch() {
      const { data: rows, error: err } = await supabase
        .from(table)
        .select('*')
        .order(orderBy, { ascending: true })

      if (err) {
        setError(err.message)
        setLoading(false)
      } else {
        cache[table] = rows
        setData(rows)
        setLoading(false)
      }
    }

    fetch()
  }, [table])

  return { data, loading, error }
}