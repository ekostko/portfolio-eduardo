// scripts/optimizar-diseno.mjs
import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const roots = [
  { inDir: 'public/diseno/social/originales',   outDir: 'public/diseno/social',   prefix: 'social' },
  { inDir: 'public/diseno/impresos/originales', outDir: 'public/diseno/impresos', prefix: 'imp'    },
]

const SIZES = [
  { w: 600,  suf: '-600',  qjpg: 82, qwebp: 80 },
  { w: 1200, suf: '-1200', qjpg: 82, qwebp: 80 },
  { w: 2400, suf: '-2400', qjpg: 82, qwebp: 80 },
]

async function ensure(p){ try{ await fs.mkdir(p, { recursive:true }) }catch{} }
const base = f => f.replace(/\.[^.]+$/, '')

async function processDir(inDir, outDir) {
  await ensure(outDir)
  const absIn  = path.resolve(inDir)
  const absOut = path.resolve(outDir)
  const files = (await fs.readdir(absIn)).filter(f => /\.(jpg|jpeg|png)$/i.test(f))
  if (!files.length) { console.log('⚠️  No hay archivos en', absIn); return }

  console.log('🪄 Procesando', files.length, 'archivos en', absIn)
  for (const file of files) {
    const input = path.join(absIn, file)
    const name  = base(file)
    for (const s of SIZES){
      await sharp(input).resize({ width:s.w, withoutEnlargement:true })
        .jpeg({ quality:s.qjpg, chromaSubsampling:'4:4:4' })
        .toFile(path.join(absOut, `${name}${s.suf}.jpg`))
      await sharp(input).resize({ width:s.w, withoutEnlargement:true })
        .webp({ quality:s.qwebp })
        .toFile(path.join(absOut, `${name}${s.suf}.webp`))
    }
    console.log('✅ OK', file)
  }
  console.log('✨ Listo:', absOut)
}

async function main(){
  for (const r of roots){
    await processDir(r.inDir, r.outDir)
  }
}
main().catch(e => (console.error(e), process.exit(1)))
