# Pokémon Survivors — Expedições

Versão personalizada de Pokémon Survivors, com mapas regionais, coleção de parceiros, captura automática e habilidades elementais.

## Recursos

- 572 espécies jogáveis liberadas, com seleção por região e raridade de IV.
- Eevee e suas oito evoluções disponíveis.
- Campanhas de Kanto, Johto e Hoenn com inimigos e chefes da própria região.
- Seis IVs por exemplar, captura automática, loja de Pokébolas e treinamento.
- Golpes restritos aos tipos do Pokémon, sprites animados por espécie, conexões elementais e áreas de dano com colisão correspondente.
- Guardas e áreas com comportamentos por tipo e variações por espécie. Alguns padrões principais ainda são compartilhados.

## Rodar o jogo

Requer Node.js 24 ou superior.

```sh
npm ci
npm run build
node serve-local.mjs
```

No Windows, após instalar e compilar, abra **JOGAR.cmd**. O jogo fica em http://127.0.0.1:4173/. Abrir o iniciador novamente reutiliza o servidor desta mesma versão.

Para desenvolver: `npm run dev`. Para verificar: `npm test` e `npm run build`.

O jogo funciona como visitante sem configurar serviços externos. Consulte `.env.example` e a documentação de `server/` apenas para habilitar contas opcionais.

## Documentação

- [Guia das alterações](LEIA-ME-EXPEDICOES.md)
- [Catálogo liberado](POKEMON-LIBERADOS.md)
- [Referências de combate](REFERENCIAS-DE-COMBATE.md)
- [Progressão e balanceamento](REFERENCIA-PROGRESSAO-VS.md)
- [Documentação do projeto original](docs/README-ORIGINAL.md)
- [Créditos dos recursos](CREDITS.md)

## Origem e licenças

Baseado em [pokemon-survivors, de Pedro Barretto](https://github.com/pedrobarretto/pokemon-survivors). Código sob a licença MIT original, preservada em [LICENSE](LICENSE). Os sprites, sons e demais recursos mantêm suas respectivas atribuições em CREDITS.md.

Fan game não oficial e não comercial, sem afiliação com Nintendo, The Pokémon Company, GAME FREAK ou Creatures. Não inclui arquivos do Vampire Survivors.
