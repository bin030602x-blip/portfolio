import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'

const SUPABASE_URL = 'https://atapsctqeipwketirxgy.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0YXBzY3RxZWlwd2tldGlyeGd5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MDc0MTA5MCwiZXhwIjoyMDk2MzE3MDkwfQ.imnpE5CY6ElBoqBV5vwknmRu8_97anoFJ6NI3cSGhjQ'
const BUCKET = 'documents'
const FILE_PATH = '/Users/jungyubeen/jung_portfolio/scripts/정유빈_서비스디자인_기말_compressed2.pdf'
const FILE_NAME = 'jung-yubin-service-design-final.pdf'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function main() {
  // 버킷 생성 (이미 있으면 무시)
  const { error: bucketError } = await supabase.storage.createBucket(BUCKET, {
    public: true,
  })
  if (bucketError && !bucketError.message.includes('already exists')) {
    console.error('버킷 생성 실패:', bucketError.message)
    process.exit(1)
  }

  console.log('파일 읽는 중...')
  const file = readFileSync(FILE_PATH)
  console.log(`파일 크기: ${(file.length / 1024 / 1024).toFixed(1)}MB`)

  console.log('Supabase에 업로드 중...')
  const { data, error } = await supabase.storage
    .from(BUCKET)
    .upload(FILE_NAME, file, {
      contentType: 'application/pdf',
      upsert: true,
    })

  if (error) {
    console.error('업로드 실패:', error.message)
    process.exit(1)
  }

  const { data: { publicUrl } } = supabase.storage.from(BUCKET).getPublicUrl(FILE_NAME)
  console.log('\n✅ 업로드 성공!')
  console.log('Public URL:', publicUrl)
}

main()
