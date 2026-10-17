import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), 'dist')
const port = 4173
const types = { '.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.png':'image/png','.webp':'image/webp','.svg':'image/svg+xml','.mp3':'audio/mpeg','.ogg':'audio/ogg','.wav':'audio/wav','.woff':'font/woff','.woff2':'font/woff2','.ico':'image/x-icon' }
if (!fs.existsSync(path.join(root,'index.html'))) { console.error('Falta a pasta dist. Execute npm run build.'); process.exit(1) }
const server = http.createServer((req,res) => {
  let url
  try { url = decodeURIComponent(new URL(req.url,'http://localhost').pathname) } catch { res.writeHead(400).end(); return }
  let file = path.resolve(root,'.'+url)
  if (file !== root && !file.startsWith(root+path.sep)) { res.writeHead(403).end(); return }
  try {
    if (fs.statSync(file).isDirectory()) file = path.join(file,'index.html')
    if (!fs.statSync(file).isFile()) throw new Error('missing')
    res.writeHead(200,{'Content-Type':types[path.extname(file)] ?? 'application/octet-stream','Cache-Control':'no-cache'})
    fs.createReadStream(file).pipe(res)
  } catch { res.writeHead(404).end('Arquivo não encontrado') }
})
const openGame = () => {
  if (!process.argv.includes('--no-browser') && process.platform === 'win32') {
    spawn('powershell.exe',['-NoProfile','-WindowStyle','Hidden','-Command',`Start-Process 'http://127.0.0.1:${port}/'`],{ windowsHide:true, stdio:'ignore' }).unref()
  }
}
server.on('error',error => {
  if (error.code !== 'EADDRINUSE') { console.error(`Não foi possível abrir o jogo: ${error.message}`); process.exitCode=1; return }
  // Only reuse a server serving this exact build; never stop another application.
  const request=http.get(`http://127.0.0.1:${port}/`,res=>{
    let body='';res.setEncoding('utf8');res.on('data',chunk=>{body+=chunk;if(body.length>2_000_000)res.destroy()})
    res.on('end',()=>{
      if(res.statusCode===200 && body===fs.readFileSync(path.join(root,'index.html'),'utf8')) {
        console.log('O jogo já está aberto. Abrindo no navegador: http://127.0.0.1:'+port+'/');openGame()
      } else { console.error('A porta '+port+' está sendo usada por outro aplicativo. Feche esse aplicativo e abra o jogo novamente.');process.exitCode=1 }
    })
    res.on('error',()=>{console.error('Não foi possível verificar o jogo aberto.');process.exitCode=1})
  })
  request.setTimeout(3000,()=>request.destroy(new Error('Tempo de resposta esgotado')))
  request.on('error',()=>{console.error('Não foi possível acessar o jogo na porta '+port+'.');process.exitCode=1})
})
server.listen(port,'127.0.0.1',() => {
  const url = `http://127.0.0.1:${port}/`
  console.log(`Pokémon Survivors — Expedições\n${url}\nMantenha esta janela aberta enquanto joga. Ctrl+C para fechar.`)
  openGame()
})
