// scripts/optimizar-retrato.mjs
import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

// Carpeta de entrada (originales) y salida (optimizadas)
const inDir  = path.resolve('public/fotos/retrato/originales')
const outDir = path.resolve('public/fotos/retrato')

// Tamaños que vamos a generar
const SIZES = [
  { w: 600,  suf: '-600',  qjpg: 82, qwebp: 80 },
  { w: 1200, suf: '-1200', qjpg: 82, qwebp: 80 }, // grid md/desktop
  { w: 2400, suf: '-2400', qjpg: 82, qwebp: 80 }, // lightbox/retina
]

async function ensure(p){ try{ await fs.mkdir(p, { recursive:true }) }catch{} }
const base = f => f.replace(/\.[^.]+$/, '')

async function processOne(file){
  const input = path.join(inDir, file)
  const name  = base(file)
  for (const s of SIZES){
    await sharp(input).resize({ width:s.w, withoutEnlargement:true })
      .jpeg({ quality:s.qjpg, chromaSubsampling:'4:4:4' })
      .toFile(path.join(outDir, `${name}${s.suf}.jpg`))
    await sharp(input).resize({ width:s.w, withoutEnlargement:true })
      .webp({ quality:s.qwebp })
      .toFile(path.join(outDir, `${name}${s.suf}.webp`))
  }
}

async function main(){
  await ensure(outDir)
  const files = (await fs.readdir(inDir)).filter(f => /\.(jpg|jpeg|png)$/i.test(f))
  if (!files.length){ console.log('⚠️  No hay archivos en', inDir); return }
  console.log('🪄 Procesando', files.length, 'archivos...')
  for (const f of files){ await processOne(f); console.log('✅ OK', f) }
  console.log('✨ Listo:', outDir)
}
main().catch(e => (console.error(e), process.exit(1)))
