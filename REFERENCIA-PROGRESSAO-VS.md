# Referência local de progressão: Vampire Survivors

Foram lidos novamente os TextAssets do arquivo `VampireSurvivors_Data/resources.assets` da instalação Steam indicada pelo usuário. A instalação não foi alterada. Os dados extraídos ficam apenas na área de estudo, fora do jogo distribuído. Foram encontrados 70 personagens, 153 armas, 579 entradas de inimigos, 24 fases e 29 power-ups nessa instalação.

## Dados observados

- Antonio começa com poder 1 e recebe +10% de dano a cada 10 níveis, limitado a +50%. Imelda recebe experiência em marcos de 5 níveis. Pasqualina recebe velocidade de projéteis em marcos de 5 níveis.
- Magic Wand começa com um projétil e intervalo de 1200 ms. Os níveis seguintes alternam quantidade, intervalo, poder e penetração. King Bible também começa com um projétil e alterna quantidade, velocidade, área, duração e poder. Portanto, um nível não aumenta automaticamente todas as propriedades.
- Os power-ups de Might concedem +5% por rank, até +25%; Cooldown concede -2,5% por rank, até -5%; Area concede +5% por rank, até +10%; Amount é um rank de +1 projétil.
- Mad Forest registra população mínima 15 no minuto 0, 30 no minuto 1 e 50 no minuto 2. Em fases posteriores, aparecem entradas com mínimos 80, 100, 150 e 300, alternadas com ondas menores e chefes. A frequência de geração também muda por minuto.
- Os dados de inimigos têm HP, poder, XP e velocidade próprios por espécie. Os números isolados de HP são normalizados; apenas esse arquivo não basta para afirmar a fórmula exata usada pelo executável.

## Adaptação aplicada nesta edição Pokémon

Mantivemos as regiões e os Pokémon. A partida dura 15 minutos, enquanto Mad Forest registra limite de 30 minutos. Os valores abaixo são balanceamento próprio inspirado na estrutura observada, não uma reprodução exata do executável:

- IVs de 1–31 preservados, com bônus máximo de dano de 8%. A qualidade/raridade não concede outro multiplicador escondido.
- Bônus da espécie e de evolução moderados; pequenos perks do personagem a cada 10 níveis. Treinos preservam os níveis comprados, com efeitos menores por rank.
- Uma assinatura no início e menos projéteis iniciais. Dano de armas adaptado para a escala de HP Pokémon. Nenhum +14% automático por nível de skill, nem aumento automático de todas as outras propriedades.
- Evoluções de arma só vêm da arma base. Despertar avançado exige skill nível 7, Pokémon nível 20 e 5 minutos de partida; o especial final também espera os dois últimos requisitos. Continua sem fusões ou receitas com itens.
- Diretor com população mínima, reposição quando a horda é eliminada, limites crescentes e rotação regional de espécies. Abertura: mínimo 15 e teto 60; etapa final: mínimo 180 e teto 360. A reposição ocorre fora da tela e é limitada por segundo.
- HP dos mobs considera tempo e um fator de nível limitado a +40%. Chefes regionais usam HP próprio para o horário, também com parcela limitada do nível do jogador. O chefe final tem 10.000 HP antes dos fatores de dificuldade e nível, em vez dos antigos 22.000, porque o dano do jogador também foi reduzido.

## Validação

Os testes verificam que um exemplar raro não tem um salto de poder sobre um comum da mesma espécie; que mesmo IV perfeito mantém uma assinatura moderada no nível 1; que um upgrade baixo altera somente as propriedades descritas; que golpes evoluídos não aparecem no sorteio inicial; que ambos os requisitos de despertar são exigidos; e que o diretor repõe a horda e mantém a restrição regional. A migração de capturas e os snapshots de IVs e treino permanecem cobertos pelos testes existentes.
