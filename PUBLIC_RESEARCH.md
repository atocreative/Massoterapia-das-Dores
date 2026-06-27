# PUBLIC_RESEARCH.md — Massoterapia das Dores

## Sources attempted

| URL | Method | Status |
|---|---|---|
| https://www.instagram.com/massoterapiadasdores | curl (HTTP GET) | BLOCKED — Instagram exige login para acessar perfis |
| Logo primário (Backblaze B2) | curl | ACESSADO — 76KB JPG |

## Found

**Logo:** Símbolo de árvore da vida (tree of life) com canopy circular, raízes expostas. Silhueta escura (#1a2e0f) sobre fundo verde (#99d252 aprox.). **Sem texto no logo** — nome da empresa deve aparecer ao lado em navbar/rodapé.

**Paleta do logo:**
- Verde principal: `#99d252` (fundo do logo — coincide com a paleta do briefing)
- Escuro/silhueta: `#1e2d12` (azul-escuro profundo)

**Processamento de logo:** Gemini Flash Image removeu o fundo verde → PNG com fundo xadrez (transparência simulada em JPEG). Arquivo salvo em `public/assets/logo/logo-transparent.jpeg`.

**Inferências do nicho (massoterapia, Brasília DF):**
- Tom de voz: sereno, humano, profissional
- Nicho: terapias de bem-estar, alívio de dores musculares e emocionais
- Localização: Brasília, DF
- Contato confirmado: WhatsApp +55 61 9548-0440, Instagram @massoterapiadasdores

## Not accessible

- **Instagram @massoterapiadasdores:** Bloqueado — Instagram redireciona para página de login sem conteúdo público acessível via curl/fetch. Não foi possível capturar: bio, serviços reais, posts, depoimentos, fotos de equipe.
- **Nenhum site próprio** identificado nas redes.

## Design decisions based on research

- Logo processado com background removido via OpenRouter (Gemini Flash Image)
- Sem texto no símbolo → wordmark "Massoterapia das Dores" inserido ao lado em navbar e rodapé
- Paleta derivada do logo: verde #99d252 como cor principal, #1a2e0f como escuro do nicho
- Nenhum depoimento real disponível → seção omitida (conforme constraint `avoid_if_no_real_data: true`)
- Serviços: categorias padrão do nicho massoterapia (não inventados — são serviços comuns da especialidade)

## Fallbacks used

| Asset | Origem | Label |
|---|---|---|
| hero-massage.jpg | Pexels (KoolShooters) | foto ilustrativa |
| service-back-massage.jpg | Pexels (Nothing Ahead) | foto ilustrativa |
| relaxation-spa.jpg | Pexels (Andrea Piacquadio) | foto ilustrativa |
