# Estudo local de combate e adaptação Pokémon

Foi lido, sem alterar a instalação Steam, o arquivo:

`C:\Program Files (x86)\Steam\steamapps\common\Vampire Survivors\VampireSurvivors_Data\resources.assets`

A leitura dos TextAssets identificou **153 entradas em WEAPON_DATA**, **109 em ITEM_DATA** e **29 em POWERUP_DATA**. Algumas entradas são variantes e evoluções; esses números não representam 153 mecânicas diferentes. Os bundles weapon_planets, weapon_nofuture e weapon_icelance também foram inspecionados: continham sprites e texturas, e não as tabelas de regras. As imagens e sons de Vampire Survivors não foram usados.

## Padrões estudados

| Entrada local | O que os dados mostram | Adaptação implementada |
|---|---|---|
| MAGIC_MISSILE / KNIFE | Direcionamento, quantidade, intervalo e penetração melhorados por nível | Leques de projéteis com mira no inimigo mais próximo, nos 18 tipos |
| HOLYBOOK / VESPERS | Projéteis orbitais, velocidade angular, duração e área | Guardas orbitais de chamas, sementes, cristais, aço e outros tipos |
| CROSS | Mira no alvo mais próximo e retorno como bumerangue | Discos e lâminas que acertam na ida e no retorno |
| LIGHTNING / LOOP | Impactos em alvos, área e repetição | Chuvas com aviso no chão; a descarga em cadeia é uma variação própria Pokémon |
| HOLYWATER / BORA | Áreas persistentes com duração e cobertura | Jardins, pântanos, campos magnéticos, solos congelantes e outras zonas |
| GARLIC / VORTEX | Proteção próxima e controle de horda | Empurrão e proteção no conjunto de guardas e campos Pokémon |
| VAMPIRICA / HEAVENSWORD | Crítico e, no primeiro caso, absorção de HP | Scope Lens, Razor Claw e Shell Bell, com crítico e roubo de vida reais |

Nos dados locais, uma arma é descrita por atributos como `interval`, `repeatInterval`, `power`, `area`, `speed`, `amount`, `penetrating`, `duration`, `critChance` e `critMul`. As melhorias são entradas cumulativas. A adaptação conserva esse princípio e os limites de seis golpes e seis itens, sem trazer de volta as receitas de fusão removidas pelo pedido anterior.

## Buffs e progressão

Os power-ups locais separam dano, defesa, vida, regeneração, recarga, área, velocidade de projéteis, duração, quantidade, movimento, coleta, experiência e dinheiro. O jogo Pokémon agora oferece esses eixos e amplia as escolhas com crítico, dano crítico, roubo de vida, empurrão, efeitos de status e dano contra chefes.

Foram acrescentados **108 golpes (seis padrões × 18 tipos)** e **62 buffs (três específicos × 18 tipos + oito universais)**. Cada tipo tem nomes, cores e efeitos de status adequados. Os seis padrões são compartilhados entre os tipos: não são 108 algoritmos de ataque diferentes. Buffs específicos têm combinações de atributos distintas conforme o tipo. A raridade influencia a frequência das cartas, enquanto o tipo limita quais cartas podem aparecer.

## Regras verificadas

- As ofertas, a aplicação de melhorias, os disparos automáticos e os especiais respeitam os tipos da forma atual.
- Ao perder um tipo na evolução ou Mega Evolução, um golpe incompatível é substituído mantendo seu nível; buffs daquele tipo ficam temporariamente inativos.
- A geração central de inimigos impede espécies estrangeiras em ondas, invocações, emboscadas, chefes e modo sem fim. Fendas estrangeiras são bloqueadas antes de abrir arenas.
- Chefes normais usam até 58 pixels do mundo; chefes finais, até 68. O limite mede a silhueta do sprite, e a colisão usa a mesma escala.
- Guardas e zonas têm limites de quantidade para evitar acúmulo ilimitado com buffs de recarga e duração.

Atualização de progressão: a página [PokéSurvivor](https://pokesurvivor.com/) e seu [guia](https://pokesurvivor.com/guia/) foram consultados como referência para melhorias permanentes por parceiro e cartas de aprimoramento. A implementação local conserva a restrição de tipo e dispensa receitas de fusão.

O balanceamento foi adaptado ao combate Pokémon e aos testes desta edição; não é uma cópia dos números de dano do Vampire Survivors.

IVs: o site público [Poke Idle World](https://poke.idleworld.online/) foi consultado para a ideia de IVs individuais de 1 a 31 definidos na captura. A fórmula de bônus, as seis faixas de raridade e a migração dos exemplares são próprias desta implementação.

Revisão de dano e efeitos: o teste controlado usa 18 alvos neutros imóveis por 20 segundos, com o mesmo parceiro e nível. No nível 10, a diferença entre o maior e menor dano agregado dos seis padrões caiu de aproximadamente 5,6× para 2,7×. Isso mede dano em uma horda estática, não uma promessa de DPS em toda partida; alcance, perseguição, controle e movimento dos mobs continuam diferenciando os padrões. Os casos de regressão verificam coleta remota, abertura por proximidade, as recompensas dos 21 chefes regionais e a limitação de sobreposição dos campos.
