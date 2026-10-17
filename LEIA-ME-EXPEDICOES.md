# Pokémon Survivors — Expedições

Abra **JOGAR.cmd** para iniciar a versão modificada. O Node.js já está instalado neste computador. O navegador abre em http://127.0.0.1:4173/. Mantenha a janela do iniciador aberta enquanto joga. Não abra o HTML diretamente: os recursos precisam do servidor local.

Esta é uma cópia independente do projeto de Downloads. O jogo original e a instalação Steam não foram alterados. Os arquivos WEAPON_DATA, ITEM_DATA e POWERUP_DATA da instalação local de Vampire Survivors foram lidos para estudar padrões e melhorias. Nenhum sprite, áudio ou pacote Unity desse jogo foi incluído nesta versão.

## Como usar

1. Clique em **Expedição, Loja & Treino**, no canto inferior esquerdo. O painel tem abas Capturar, Loja de Pokébolas, Treino por Pokémon e Coleção.
2. Escolha Kanto, Johto ou Hoenn em **Mapa da expedição**, na seleção de parceiro, ou na aba Capturar. As abas de iniciais escolhem o parceiro; o campo Mapa escolhe a campanha. A região fica travada durante a partida.
3. Escolha o Pokémon alvo, a Pokébola e ative a captura automática.
4. No menu, a caça faz uma tentativa a cada oito segundos, com a aba visível. Em combate, a tentativa acontece ao derrotar o alvo. Cada tentativa gasta uma bola, inclusive quando o Pokémon escapa.
5. Na Loja de Pokébolas, compare Poké, Great, Ultra e Master Balls. Compre 1, 10 (5% de desconto) ou 50 (10% de desconto) por vez. A chance contra o alvo e o estoque aparecem em cada cartão. Lendários exigem batalha; Master Ball garante a captura quando usada em uma tentativa válida.
6. Consulte a coleção no painel e na Pokédex. Capturar uma espécie pertencente a uma família jogável libera essa família na seleção; outras espécies ficam na coleção. Se a seleção já estiver aberta, volte ao título e abra novamente para atualizar os desbloqueios.

O dinheiro usa a mesma carteira do Poké Mart. Cada derrota dá ₽2 extras (chefe: ₽100), além das recompensas anteriores. A caça do menu dá ₽6 por encontro. O progresso é salvo neste navegador e endereço; trocar a porta ou o navegador usa outro armazenamento. Não há captura com o jogo fechado ou cálculo de progresso offline.

## Combate e melhorias

- Até seis golpes independentes e seis itens. As escolhas de nível e baús não oferecem receitas de fusão de golpes.
- Golpes chegam ao nível 10. Cada nível acumula mais dano e área e reduz a recarga. Nos níveis 4, 7 e 10 também mudam de comportamento: perseguição, órbitas opostas, explosões, campos e auras. No nível 7, os golpes que possuem forma avançada a usam automaticamente (Ember → Flamethrower, Water Gun → Hydro Pump), mantendo nível e espaço e sem precisar de item. Níveis 4, 7 e 10 acrescentam projéteis ou efeitos, além dos incrementos específicos já existentes.
- **Regra de tipo:** somente golpes dos tipos da forma atual. Charmander usa Fogo; Charizard usa Fogo/Voador; Mega Charizard X usa Fogo/Dragão. Tipos adquiridos na evolução abrem novas opções. Golpes incompatíveis são substituídos por golpes válidos conservando o nível. Buffs específicos de tipos que a forma perdeu ficam inativos até o tipo voltar.
- **108 novos golpes:** seis padrões por tipo, nos 18 tipos. Leques penetrantes, guardas orbitais, impactos anunciados, bumerangues, zonas persistentes e cadeias de alvos. A raridade influencia a frequência das opções elaboradas, sem liberar tipos estrangeiros.
- **62 novos buffs:** três específicos por tipo e oito universais. Incluem dano, área, duração, recarga, velocidade, status, defesa, regeneração, crítico, roubo de vida, empurrão e dano contra chefes. Os valores aparecem nas cartas e os atributos novos aparecem na pausa.
- Petal Guard cria pétalas orbitais; Volt Cascade encadeia descargas com paralisia; Meteor Draco dispara projéteis perseguidores que atravessam inimigos.
- A mira automática considera o centro do corpo. A colisão acompanha o trajeto dos projéteis entre quadros, evitando que golpes rápidos atravessem inimigos sem causar dano.
- A evolução do próprio Pokémon e a Mega Evolução continuam disponíveis. Cada evolução adiciona, além dos bônus da espécie: +30 HP, +18% de dano, +0,5 de defesa, +10% de área, +3 de velocidade, +12 de coleta e -2,5% de recarga.

## Campanhas regionais

As campanhas reutilizam a pixel art e os terrenos procedurais do projeto, com rotas, elenco de espécies, progressão e chefes regionais. Não são reproduções dos mapas dos jogos oficiais. Esta edição inclui três regiões; as demais ainda não têm campanha própria.

| Região | Percurso | Chefes principais | Final aos 15 minutos |
|---|---|---|---|
| Kanto | Rota 1 → Floresta de Viridian → Monte Lua → Ilhas Seafoam → Caverna Cerulean | Onix, Snorlax, Articuno, Zapdos, Moltres | Mewtwo |
| Johto | Rota 29 → Floresta Ilex → Union Cave → Ice Path → Torre do Sino | Sudowoodo, Steelix, Raikou, Entei, Suicune | Ho-Oh |
| Hoenn | Rota 101 → Bosque Petalburg → Monte Chimney → Caverna de Origem → Pilar Celeste | Aggron, Slaking, Regirock, Regice, Registeel | Rayquaza |

As primeiras ondas usam básicos fracos; as últimas usam espécies mais fortes e evoluídas. Mew, Celebi ou Jirachi podem aparecer como encontro mítico raro no final da respectiva região. Fendas da campanha também respeitam a região. Os novos minichefes têm padrões próprios de ataques anunciados. A restrição regional vale também para invocações, emboscadas, fendas, desafio diário e modo sem fim. O guardião do modo sem fim é o chefe final da região, em vez de Arceus. Chefes de fase têm silhueta de até 58 pixels do mundo e finais de até 68, com colisão ajustada ao tamanho. O envio de partidas ao ranking do jogo original está desativado nesta edição local.

## Treino permanente e coleta

Na aba **Treino por Pokémon**, escolha um parceiro desbloqueado e compre níveis de Poder, Vitalidade, Resistência, Agilidade, Coleta, Aprendizado, Precisão e Recuperação. Cada parceiro tem seu próprio registro e o bônus entra na próxima partida normal. O desafio diário mantém as regras sem treino personalizado. Os preços e limites aparecem em cada cartão.

A coleta começa com alcance 95 (antes: 30) e itens comuns atraídos vêm a até 720 px/s. Itens encostados são recolhidos imediatamente; pedras Mega em escolha continuam exigindo escolher uma das opções. Os mobs comuns usam uma curva mais suave, de +15% no início até +25% sobre a base, além da progressão temporal existente; chefes usam +8% e alguns usam tiros, investidas e impactos com aviso prévio, com limite compartilhado de ataques para a tela não ficar tomada por projéteis.

A lista de captura inclui também as formas evoluídas dos parceiros, como Pikachu, Raichu, Charizard e Dragonite. A busca aceita nome ou número da Pokédex, com filtros por tipo, raridade e já/não capturados. Os cartões mostram sprite, tipos, chance e seleção atual.

## Referências e validação

- Vampire Survivors: instalação local indicada pelo usuário, estudada diretamente pelos dados locais (153 armas, 109 entradas de itens e 29 power-ups). Veja REFERENCIAS-DE-COMBATE.md para a adaptação.
- [Poke Idle World](https://poke.idleworld.online/): inspiração para selecionar alvo, capturar automaticamente e comprar Pokébolas.
- Código original, créditos e licenças preservados no projeto.

Para desenvolvimento: `npm ci`, `npm test`, `npm run build` e `npm run dev`. A pasta `dist` contém o jogo compilado que o iniciador utiliza.

## Meus Pokémon, IVs e golpes exclusivos

Abra **Meus Pokémon · Captura · Loja → Meus Pokémon · Jogar**, selecione um exemplar e clique em **Jogar com [nome]**. Há também um atalho na seleção de parceiro. Todos os alvos capturáveis têm uma forma jogável própria; capturar Charizard, por exemplo, inicia como Charizard, e não como Charmander. Encerre a partida atual antes de trocar de parceiro.

Cada captura é guardada separadamente com seis IVs de 1 a 31. A qualidade é a soma dividida por 186. As faixas são: comum abaixo de 40%, incomum abaixo de 55%, raro abaixo de 70%, épico abaixo de 85%, único abaixo de 95% e místico a partir de 95%. As faixas são específicas desta edição. As capturas antigas são convertidas uma única vez em exemplares com IVs estáveis; não é necessário recapturar. Os IVs permanecem na evolução e são registrados no início da partida e no replay.

Vida aumenta HP; Ataque e Ataque Especial aumentam dano; Defesa aumenta armadura; Defesa Especial reduz dano recebido; Velocidade aumenta movimento e velocidade dos projéteis e reduz recarga. Ataque Especial também aumenta área. O treino é por espécie e vale para todos os exemplares daquela forma.

Foram criadas 569 assinaturas de espécie com combinação própria de padrão, força, recarga, tamanho e velocidade. O nível 7 combina um segundo padrão. Os golpes mantêm as mutações nos níveis 4, 7 e 10 e a restrição ao tipo da forma atual. Cinco novas melhorias universais aparecem nas cartas: Poder Ofensivo, Expansão de Área, Ritmo de Batalha, Multidisparo e Projéteis Velozes.

## Coleta, recompensas e revisão de combate

O menu e seu botão agora ficam à direita. Os recipientes Pokébola do cenário abrem automaticamente ao chegar a 105 pixels (ou ao alcance de coleta, se maior), sem depender de acertar um golpe. Pokébolas de recompensa e itens de apoio dos chefes voltam automaticamente ao parceiro, mesmo fora da tela, com coleta garantida após no máximo 2 segundos de simulação. A última recompensa é entregue no próprio instante da vitória. Cada miniboss/chefe de onda derrotado garante uma melhoria e um item de apoio, além de seus drops de dinheiro/experiência e a chance de ovo. Inimigos que fogem não contam como derrotados.

Os seis padrões foram revisados: chuva e órbitas tiveram excessos reduzidos; retorno e cadeia receberam mais força; campos não multiplicam o dano quando zonas do mesmo golpe se sobrepõem. Chuva e campos distribuem os impactos entre alvos distintos. O jogador ganha 0,6 s de proteção após sofrer dano, e as rajadas triplas dos mobs começam a partir de 5 minutos. Melhorias e IVs continuam afetando o combate normalmente.

Os efeitos visuais têm silhuetas por tipo, como chamas, gotas, folhas, raios, cristais, lâminas e estrelas, além de rastros, arcos, círculos de área e impactos. Golpes anteriores, evoluídos, especiais e Mega mantêm suas artes com uma nova camada de rastros e auras.

## Seleção direta da coleção e progressão revisada

O botão **Jogar** do título agora abre **Escolha seu Pokémon**, com os exemplares capturados e seus sprites completos animados. A seleção de trios iniciais foi retirada do fluxo normal. Escolha o exemplar, região e dificuldade e pressione **Jogar com [nome]**. Sem capturas, o botão **Capturar meu primeiro Pokémon** abre a caça; nenhuma captura é criada silenciosamente. Seus exemplares, IVs, dinheiro e níveis de treino existentes são preservados.

IV perfeito concede no máximo +8% de dano e aproximadamente +11 HP; a raridade é qualidade individual, não um multiplicador de dano. O treino de Poder concede +2% por nível, Vitalidade +4 HP e Agilidade -0,5% recarga. Os bônus de evolução corporal continuam presentes, com intensidade menor. Cada espécie recebe uma pequena vantagem por marcos de 10 níveis do Pokémon.

Foi removido o bônus automático e simultâneo de +14% dano, +4,5% área, mais projéteis e recarga menor em todo nível de skill. Cada nível agora aplica apenas sua melhoria descrita. Formas já evoluídas dos golpes não aparecem como novas skills no nível 1. As formas avançadas, explosões, combinação exclusiva e especial final exigem **5 minutos e nível 20 do Pokémon**; o golpe também precisa estar no nível 7 ou maior para despertar. Não há fusão de skills nem exigência de item combinado.

As hordas repõem uma população mínima que cresce de 15 a 180, com teto de 60 a 360 conforme a fase. A resistência dos mobs e chefes considera tempo e uma parcela limitada do nível do jogador. O limite regional das espécies continua valendo. Veja REFERENCIA-PROGRESSAO-VS.md para dados e limites da adaptação.

Atualização: identidades visuais dos golpes exclusivos
- Sprites pixelados animados por espécie, gerados e armazenados em cache durante a renderização.
- Formas distintas: bolhas, canhões, ondas, lodo, esporos, presas, ferrões, chicotes, sementes, flores, fitas, olhos, anéis, garras, lâminas, punhos, palmas, sons, engrenagens, teias, asas, fantasmas, dragões, cristais, areia e meteoros.
- Perfis especiais para parceiros como Squirtle, Blastoise, Muk, Weezing, Bulbasaur, Beedrill, Gengar e todas as evoluções do Eevee. O restante do catálogo usa combinações estáveis por espécie; os padrões básicos ainda são compartilhados.
- Trajetórias, velocidade orbital, alcance, curvas, frenagem e tempo dos campos variam por espécie. Mantidos os tipos permitidos, limites de projéteis e requisitos de despertar.

Atualização: áreas reais de dano e trajetórias elementais
Os 18 tipos agora possuem disposições próprias de área, compartilhadas pelo desenho e pela colisão. Faixas, fissuras, poças e focos separados causam dano somente nas partes ocupadas, com tolerância correspondente ao corpo do inimigo. O nível avançado também usa essas áreas, em vez de voltar ao círculo genérico.
Guardas usam marés elípticas, expansões de brasas, chicotes pendulares, nuvens em oito, sentinelas em etapas, espirais e outras trajetórias conforme o tipo. Os parâmetros também variam com a espécie que lançou o golpe, inclusive nos golpes comuns do mesmo elemento. Os padrões principais de cada tipo ainda são compartilhados entre espécies, com variações.
