# Site da LAGEN: manual de manutenção

Site institucional da LAGEN (Liga Acadêmica de Gastroenterologia e Nutrologia da Uniderp), publicado de graça pelo GitHub Pages em `https://lagen-uniderp.github.io`. Este manual é para quem mantém o site. Não é preciso saber programar: quase tudo se resolve editando arquivos de texto pelo navegador.

## Sumário

- [Visão geral](#visão-geral)
- [Rotina semanal](#rotina-semanal)
- [Publicar pela primeira vez](#publicar-pela-primeira-vez)
- [Como editar pelo navegador](#como-editar-pelo-navegador)
- [Regras rápidas de YAML](#regras-rápidas-de-yaml)
- [Avisos do mural](#avisos-do-mural)
- [Processo seletivo](#processo-seletivo)
- [Cronograma de aulas](#cronograma-de-aulas)
- [Escala de estágios e plantões](#escala-de-estágios-e-plantões)
- [Biblioteca acadêmica](#biblioteca-acadêmica)
- [Galeria de atividades](#galeria-de-atividades)
- [Diretoria](#diretoria)
- [Textos institucionais e transparência](#textos-institucionais-e-transparência)
- [Logo e favicon](#logo-e-favicon)
- [Antes de divulgar o site](#antes-de-divulgar-o-site)
- [Quando algo dá errado](#quando-algo-dá-errado)
- [Dados pessoais e direitos de imagem](#dados-pessoais-e-direitos-de-imagem)
- [Passagem de gestão](#passagem-de-gestão)
- [Testar no computador](#testar-no-computador)
- [Mapa dos arquivos](#mapa-dos-arquivos)

---

## Visão geral

O site é gerado pelo **Jekyll**, um programa que junta modelos prontos com o conteúdo que você escreve e produz as páginas. O GitHub roda o Jekyll sozinho a cada alteração salva (cada *commit*) e publica o resultado em 1 a 3 minutos.

Na prática, o conteúdo do dia a dia fica em arquivos **YAML** (YAML Ain't Markup Language, um formato de texto simples de "campo: valor") dentro da pasta `_data/`, um arquivo por assunto. Os textos longos (missão, estatuto, regras) ficam em arquivos **Markdown** (`.md`), texto comum com marcações simples como `**negrito**`.

| O que você quer mudar | Arquivo |
| --- | --- |
| Aviso urgente no topo do site | `_data/avisos.yml` |
| Abrir ou fechar o processo seletivo | `_data/processo_seletivo.yml` |
| Aulas do cronograma | `_data/cronograma.yml` |
| Escala de estágios e plantões | Direto na planilha do Google (o site só exibe) |
| Materiais da biblioteca | `_data/biblioteca.yml` + PDF em `assets/docs/biblioteca/` |
| Álbuns da galeria | `_data/galeria.yml` + capa em `assets/img/galeria/` |
| Diretoria | `_data/diretoria.yml` + foto em `assets/img/diretoria/` |
| Perguntas frequentes da página inicial | `_data/faq.yml` |
| Missão, histórico e gestão | `a-liga/index.md` |
| Estatuto, convivência, faltas e certificação | `a-liga/transparencia.md` |
| Texto de abertura da página inicial | `index.md` |
| E-mail e Instagram do rodapé | `_config.yml` |

Arquivos cujo nome começa com `_` (sublinhado) ou que estão em `_includes/`, `_layouts/` e `assets/css/` são a parte técnica. Não precisam ser alterados no dia a dia.

## Rotina semanal

1. **Cronograma:** cadastre as aulas novas e corrija horário, sala ou convidado(a) em `_data/cronograma.yml`. Aulas que já passaram somem sozinhas; não precisa apagar.
2. **Mural:** publique ou desligue avisos em `_data/avisos.yml`. Avisos com data de expiração somem sozinhos.
3. **Escala:** confira se a planilha publicada está atualizada (a Diretoria de Estágios edita direto nela).
4. **Galeria e biblioteca:** acrescente o álbum ou o material da semana, se houver.
5. **Confira o site no celular** depois de 2 a 3 minutos.

Faça pelo menos um commit por mês, mesmo sem novidade: a data "Site atualizado em" do rodapé mostra aos visitantes que o site está vivo, e a página inicial recalcula as próximas aulas a cada publicação.

## Publicar pela primeira vez

Faça uma vez só. O objetivo é que **nada dependa da conta pessoal de ninguém**.

1. **Conta Google da liga.** Crie um Gmail institucional da liga (ex.: `lagen.uniderp@gmail.com`). Ele será o dono do formulário de interesse, da planilha da escala, dos álbuns de fotos e o e-mail de contato do site. Ative a verificação em duas etapas e cadastre como recuperação o celular de dois diretores.
2. **Conta pessoal no GitHub.** Cada mantenedor usa a própria conta em [github.com](https://github.com), com verificação em duas etapas ativada.
3. **Organização da liga no GitHub.** Clique em **+** (canto superior direito) → **New organization** → plano **Free** → nome `lagen-uniderp`. Em **People**, convide pelo menos mais um diretor com o papel **Owner**. Com dois donos, a liga não perde o site se alguém sair.
4. **Repositório.** Dentro da organização, crie um repositório **público** com o nome exato `lagen-uniderp.github.io`.
5. **Enviar os arquivos.** No repositório vazio, clique em **uploading an existing file** (ou **Add file → Upload files**), arraste **o conteúdo** da pasta do site (não a pasta em si) e clique em **Commit changes**. Se arquivos que começam com ponto (como `.gitignore`) não subirem, não tem problema.
6. **Ligar o GitHub Pages.** No repositório: **Settings** → na barra lateral, em "Code and automation", clique em **Pages** → em "Build and deployment", no campo **Source**, escolha **Deploy from a branch** → em **Branch**, escolha `main` e a pasta `/ (root)` → **Save**.
7. **Aguardar.** Na aba **Actions** aparece a publicação ("pages build and deployment"). Quando ficar verde, abra `https://lagen-uniderp.github.io`.

Se o nome `lagen-uniderp` já estiver em uso ou o repositório tiver outro nome (ex.: `site`), o endereço vira `https://NOME-DA-ORGANIZACAO.github.io/site/`. Nesse caso, ajuste no `_config.yml`:

```yaml
url: "https://NOME-DA-ORGANIZACAO.github.io"
baseurl: "/site"
```

## Como editar pelo navegador

1. No repositório, abra o arquivo (ex.: `_data/cronograma.yml`).
2. Clique no **lápis** (Edit this file).
3. Faça a alteração.
4. Clique em **Commit changes…**, escreva uma frase curta dizendo o que mudou (ex.: "Aula de 21/10 adicionada") e confirme em **Commit changes**.
5. Espere 1 a 3 minutos e recarregue o site forçando a atualização: **Ctrl + F5** no Windows, **Cmd + Shift + R** no Mac. No celular, feche e reabra a aba.

**Enviar imagem ou PDF:** entre na pasta certa (ex.: `assets/img/galeria/`) → **Add file → Upload files** → arraste o arquivo → **Commit changes**.

**Nomes de arquivo:** só letras minúsculas, números e hífen, sem espaço nem acento. Exemplo: `simposio-2026.jpg`, e não `Simpósio 2026.JPG`. O site diferencia maiúsculas de minúsculas: `Foto.jpg` e `foto.jpg` são arquivos diferentes.

**Editar vários arquivos de uma vez ou procurar um texto em todos eles:** com o repositório aberto, aperte a tecla `.` (ponto). Abre um editor completo no navegador; `Ctrl + Shift + F` procura em todos os arquivos.

## Regras rápidas de YAML

Quase todo erro de publicação vem daqui. Copie sempre um bloco que já existe e só troque os valores.

- **Recuo com espaços, nunca com a tecla Tab.** Itens do mesmo nível começam na mesma coluna.
- **Espaço depois dos dois-pontos:** `tema: Hepatites virais` (certo) e `tema:Hepatites virais` (errado).
- **Aspas duplas** em textos que contêm `:` ou `#`, ou que começam com `[`, `*`, `@` ou aspas. Na dúvida, use aspas: `tema: "Cirrose: complicações"`.
- **Datas** no formato AAAA-MM-DD, sem aspas: `data: 2026-10-07`. Datas como `07/10/2026` não funcionam (a aula simplesmente não aparece).
- **Sim e não** se escrevem `true` e `false`: `ativo: true`.
- **Cada item de uma lista** começa com `- ` (hífen e espaço), alinhado com os outros itens.
- **Texto longo** pode continuar nas linhas de baixo usando `>-` e recuo:

```yaml
- pergunta: Quem pode participar?
  resposta: >-
    Estudantes de Medicina da Uniderp regularmente matriculados,
    aprovados no processo seletivo.
```

- Linhas que começam com `#` são comentários: servem de instrução e não aparecem no site.

## Avisos do mural

Arquivo: `_data/avisos.yml`. O aviso aparece como uma faixa no topo de **todas** as páginas.

```yaml
- texto: "A aula de 07/10 foi transferida para o **Auditório do Bloco B**."
  tipo: urgente
  expira: 2026-10-07
  link: "/ensino/#cronograma"
  ativo: true
```

- `tipo`: `urgente` (faixa vinho, para mudança de sala, cancelamento, prazo) ou `info` (faixa bege, para lembretes).
- `expira`: o aviso some sozinho **no dia seguinte** a esta data, mesmo sem novo commit. Use `""` para não expirar (e lembre-se de desligar depois).
- `link`: opcional; cria um "Saiba mais". Pode ser uma página do site (começando com `/`) ou um endereço completo (`https://...`).
- `ativo`: `true` publica, `false` tira do ar sem apagar o texto.
- Vários avisos ativos aparecem empilhados. Mantenha no máximo dois: mural cheio vira ruído.

## Processo seletivo

Arquivo: `_data/processo_seletivo.yml`. Para abrir ou fechar as inscrições, troque **só a palavra** da linha `status:` por `aberto` ou `fechado`. Os textos de cada estado ficam preenchidos embaixo; você configura uma vez e depois só alterna. Qualquer outra palavra (ou erro de digitação) mostra o estado `fechado`.

**Estado fechado** (lista de interesse):

1. No Google Forms da conta da liga, crie um formulário curto: nome, e-mail e semestre. Na descrição, diga para que o e-mail será usado (ver [Dados pessoais e direitos de imagem](#dados-pessoais-e-direitos-de-imagem)).
2. Clique em **Enviar** → aba **< >** (incorporar HTML) → **Copiar**.
3. Cole no campo `formulario_embed`, entre aspas simples. Pode colar o código inteiro do `<iframe ...>`: o site aproveita só o endereço.
4. Ajuste `formulario_altura` (em pixels) se o formulário aparecer cortado.

Enquanto `formulario_embed` estiver vazio, o painel mostra só a mensagem "Inscrições fechadas até 2027", sem o texto que convida para a lista.

**Estado aberto:** preencha `mensagem`, `prazo` (opcional), `texto`, `edital_url` e `inscricao_url`. O edital pode ser um PDF (Portable Document Format) enviado para `assets/docs/` (ex.: `/assets/docs/edital-2027.pdf`) ou um link do Google Drive da liga. Sem endereço preenchido, o botão correspondente não aparece.

Quando abrir o processo, publique também um aviso `urgente` no mural com o prazo e a data de expiração.

## Cronograma de aulas

Arquivo: `_data/cronograma.yml`. Um bloco por aula; **a ordem no arquivo não importa**, o site organiza por data.

```yaml
- data: 2026-10-21
  horario: "19h00"
  tema: "Terapia nutricional enteral e parenteral"
  professor: "Dra. Nome Sobrenome"
  local: "Sala 12, Bloco B"
  obs: "Levar estetoscópio"
```

- `professor`, `local` e `obs` são opcionais (use `""` para deixar em branco).
- Aulas passadas ficam ocultas e o visitante pode mostrá-las pelo botão "Mostrar aulas anteriores". A próxima aula ganha destaque. Isso é calculado pela data do aparelho de quem visita, então funciona mesmo sem commit.
- A página inicial mostra a próxima aula no bloco "Próxima aula".
- **Aula cancelada:** apague o bloco ou escreva `obs: "Cancelada"`, e publique um aviso `urgente` no mural.
- **Novo semestre:** apague as aulas antigas do arquivo (o histórico continua guardado no GitHub).
- **Antes de divulgar:** apague as cinco aulas de exemplo, marcadas com "(exemplo)".

## Escala de estágios e plantões

A escala é editada **direto numa planilha do Google Planilhas** da conta da liga; o site só a exibe. Configure uma vez:

1. Na planilha: **Arquivo → Compartilhar → Publicar na Web**.
2. Escolha a aba da escala e a opção **Incorporar** → **Publicar**.
3. Copie o endereço que está dentro de `src="..."` e cole em `_data/escala.yml`, no campo `planilha_embed` (colar o código inteiro também funciona).
4. Ajuste `altura` se precisar.

Depois disso, qualquer mudança na planilha aparece no site sozinha (o Google republica automaticamente em alguns minutos). Abaixo da planilha, o site oferece o link "Abrir a escala em tela cheia", útil no celular.

Cuidados:

- Contas institucionais da faculdade podem bloquear a opção "Publicar na Web". Use a conta Google da liga.
- A planilha publicada é pública: use primeiro nome ou iniciais, **nunca** telefone, RA (registro acadêmico) ou dados de pacientes. Uma escala com nome completo, local e horário mostra a qualquer pessoa onde cada estudante vai estar.

## Biblioteca acadêmica

Arquivo: `_data/biblioteca.yml`. **Somente material produzido por membros da liga.** Livros, capítulos, diretrizes de sociedades médicas, slides de professores e figuras copiadas de terceiros **não** entram. Para diretrizes, use `fontes_externas`, que só guarda o link para o site oficial.

```yaml
materiais:
  - titulo: "Doença do refluxo gastroesofágico: resumo de revisão"
    tipo: Resumo
    autores: "Nome Sobrenome, Nome Sobrenome"
    data: 2026-09-10
    arquivo: "/assets/docs/biblioteca/resumo-drge-2026.pdf"
    link: ""
    descricao: "Revisão para a aula de 07/10."

fontes_externas:
  - titulo: "Nome da sociedade ou diretriz"
    url: "https://..."
```

- `tipo`: `Resumo`, `Caso clínico` ou `Outro`. O site agrupa por tipo.
- `arquivo`: PDF enviado para `assets/docs/biblioteca/` (até cerca de 2 MB, megabytes). **Ou** use `link` para um arquivo no Google Drive da liga. Sem nenhum dos dois, o material aparece como "em breve".
- **Casos clínicos:** só anonimizados de verdade (ver [Dados pessoais e direitos de imagem](#dados-pessoais-e-direitos-de-imagem)) e revisados pelo(a) orientador(a) docente antes de publicar.
- **Antes de divulgar:** apague os dois materiais de exemplo.

## Galeria de atividades

Arquivo: `_data/galeria.yml`. As fotos **não ficam no site**: ficam num álbum da conta da liga. O site mostra um cartão por álbum, com uma foto de capa e o link para o álbum completo.

```yaml
categorias:
  - id: simposios
    titulo: Simpósios
    albuns:
      - titulo: "I Simpósio de Gastroenterologia e Nutrologia"
        data: 2026-06-12
        capa: /assets/img/galeria/simposio-2026.jpg
        link: "https://photos.app.goo.gl/..."
```

- **Onde guardar o álbum:** de preferência um álbum compartilhado do Google Fotos da conta da liga. O Imgur serve apenas como **link para o álbum**. Nunca coloque no site links diretos de imagens do Imgur (`i.imgur.com/...`): os termos de uso do Imgur proíbem usá-lo para hospedar imagens de sites e preveem apagar as imagens e bloquear a conta.
- **Capa:** uma foto por álbum, reduzida para cerca de 1200 px (pixels) de largura e até 200 KB (kilobytes), enviada para `assets/img/galeria/`. Para reduzir, use a opção de exportar em tamanho menor do celular ou um redutor de imagens on-line. Sem capa, o cartão mostra os anéis do selo.
- **Ordem:** coloque o álbum mais novo no topo da lista da categoria.
- As quatro categorias (`aulas-praticas`, `simposios`, `acoes-comunitarias`, `confraternizacoes`) não devem ter o `id` alterado, porque os atalhos da página dependem dele.
- **Antes de divulgar:** apague o álbum de exemplo.

## Diretoria

Arquivo: `_data/diretoria.yml`. A ordem no arquivo é a ordem no site.

```yaml
- nome: Isaac Goldoni
  cargo: Diretor Tesoureiro
  foto: /assets/img/diretoria/isaac-goldoni.jpg
  email: "tesouraria.lagen@gmail.com"
  telefone: ""
```

- `foto`: opcional. Foto quadrada, cerca de 400 × 400 px, até 150 KB, em `assets/img/diretoria/`. Sem foto, o site mostra as iniciais. Publique só com a concordância da pessoa.
- `email`: prefira e-mails da liga ou institucionais.
- `telefone`: **não recomendado.** O site e o repositório são públicos e o histórico guarda tudo.
- Gestão e orientação docente ficam no texto de `a-liga/index.md`.

## Textos institucionais e transparência

- `index.md`: texto curto de abertura da página inicial (abaixo do nome da liga).
- `a-liga/index.md`: missão, histórico, gestão e orientação docente.
- `a-liga/transparencia.md`: Painel de transparência, com estatuto, regras de convivência, critérios de faltas e critérios de certificação.
- `_data/faq.yml`: perguntas frequentes (FAQ, *Frequently Asked Questions*) da página inicial.

Regras do Markdown usadas nesses arquivos:

- `## Título {#id}` cria uma seção. **Não apague nem mude o `{#id}`**: links de outras páginas apontam para ele (ex.: a pergunta sobre certificado aponta para `#certificacao`).
- `**negrito**`, `[texto do link](/a-liga/)` e listas com `- `.
- O bloco no topo, entre as linhas `---`, guarda título e configurações da página. Mexa só nos valores.

**Estatuto em PDF:** envie o arquivo para `assets/docs/` com o nome exato `estatuto-lagen.pdf`. O botão "Baixar o estatuto em PDF" aparece sozinho quando o arquivo existe. A linha de versão fica no campo `estatuto_versao`, no topo de `a-liga/transparencia.md`.

**Critérios de certificação:** por decisão da diretoria, **somente texto explicativo**, sem link, botão ou emissão de certificado pelo site.

**Prestação de contas:** o arquivo `a-liga/transparencia.md` traz, no fim, uma seção "Prestação de contas" pronta e desativada. Para publicá-la, apague a primeira e a última linha daquele bloco (as que abrem e fecham o comentário). Publique valores agregados por período, nunca nomes, CPF (Cadastro de Pessoas Físicas) ou dados bancários de pessoas.

## Logo e favicon

- `assets/img/logo.png`: selo da liga. Use PNG (Portable Network Graphics) quadrado com fundo transparente, com pelo menos 720 × 720 px e até 200 KB.
- `assets/img/favicon.png`: ícone da aba do navegador. Quadrado, 96 × 96 px ou maior, com desenho simplificado (a logo inteira fica ilegível em 16 px).

Para trocar, envie o novo arquivo **com exatamente o mesmo nome** para `assets/img/` (o GitHub pergunta se deve substituir). O selo que acompanha o site é **provisório**, criado só para a montagem; substitua pela logo oficial antes de divulgar.

## Antes de divulgar o site

- [ ] Procurar `PREENCHER` em todos os arquivos (tecla `.` → `Ctrl + Shift + F`) e resolver cada ocorrência.
- [ ] Procurar `(exemplo)` e apagar aulas, materiais e álbuns de exemplo.
- [ ] Trocar o selo provisório pela logo oficial e pelo favicon oficial.
- [ ] Preencher e-mail e Instagram da liga em `_config.yml` (bloco `contato`).
- [ ] Configurar o formulário da lista de interesse.
- [ ] Enviar o estatuto em PDF e preencher a versão.
- [ ] Configurar a escala com primeiros nomes ou iniciais.
- [ ] Confirmar com cada diretor a foto e o e-mail publicados.
- [ ] Revisar as regras de convivência, faltas e certificação com a diretoria.
- [ ] Abrir todas as páginas no celular.
- [ ] Confirmar que a organização no GitHub tem pelo menos dois donos.

## Quando algo dá errado

**O site não mudou depois do commit.** Espere 3 minutos e recarregue com **Ctrl + F5**. Depois, abra a aba **Actions** do repositório:

- **Bolinha amarela:** ainda publicando.
- **Verde:** publicado; o problema é o cache do navegador.
- **X vermelho:** a publicação falhou e o site continua na versão anterior. Clique na execução com falha e depois em **build**: a mensagem costuma indicar o arquivo e a linha do erro.

Se nada aparece em Actions depois de um commit, confira se quem fez o commit é administrador do repositório e tem e-mail verificado no GitHub.

**Erros mais comuns:**

| Sintoma | Causa provável |
| --- | --- |
| Publicação falhou depois de editar um `.yml` | Tab no lugar de espaços, falta de espaço depois de `:`, texto com `:` sem aspas, ou `-` desalinhado |
| Aula não aparece | Data fora do formato AAAA-MM-DD |
| Aviso não aparece | `ativo: false` ou data de `expira` já passou |
| Imagem quebrada | Caminho errado ou diferença de maiúsculas e minúsculas no nome do arquivo |
| Botão do estatuto não aparece | PDF com nome diferente de `estatuto-lagen.pdf` ou fora de `assets/docs/` |
| Formulário ou planilha em branco | Endereço copiado errado, ou planilha não publicada na Web |
| Link para outra página do site quebrado | Falta a `/` no começo ou no fim (ex.: `/ensino/`) |

**Desfazer uma alteração:** abra o arquivo → **History** (histórico) → abra a versão boa → copie o conteúdo → edite o arquivo atual, cole e faça o commit.

## Dados pessoais e direitos de imagem

O repositório e o site são **públicos**, e o GitHub guarda o histórico de todas as versões. **Apagar um arquivo ou uma linha não apaga das versões antigas**: qualquer pessoa pode consultá-las. Antes de cada commit, pergunte: "isto pode ficar público para sempre?".

**Nunca publique:** CPF, RA, telefone pessoal, endereço, notas, faltas individuais, atestados ou qualquer dado de saúde de membros. A LGPD (Lei Geral de Proteção de Dados Pessoais, Lei nº 13.709/2018) trata dado de saúde como dado sensível.

**Fotos de pessoas:**

- Peça a concordância de quem aparece. Em ações comunitárias, use um termo simples de uso de imagem, assinado na hora.
- **Crianças e adolescentes:** só com autorização de pai, mãe ou responsável legal (LGPD, art. 14, e ECA, Estatuto da Criança e do Adolescente, art. 17). Na dúvida, não publique o rosto.
- **Pacientes:** não publique paciente identificável. O Código de Ética Médica (art. 75) proíbe o médico de exibir pacientes ou casos identificáveis na divulgação de assuntos médicos, mesmo com autorização; a liga deve seguir o mesmo padrão.

**Casos clínicos na biblioteca:** retire nome e iniciais, idade exata (use faixa, ex.: "adulto na terceira década"), datas, cidade, bairro, serviço de atendimento, profissão incomum, número de prontuário, fotos de rosto, tatuagens e qualquer detalhe raro que permita reconhecer a pessoa. Quando possível, prefira casos fictícios ou adaptados.

**Lista de interesse (Google Forms):** peça só o necessário (nome, e-mail, semestre), diga na descrição que o e-mail será usado apenas para avisar sobre o processo seletivo e apague as respostas depois que o processo terminar. As respostas ficam na conta da liga, não em conta pessoal.

**Pedido de remoção:** se alguém pedir para sair de uma foto, da escala ou da diretoria, retire no mesmo dia.

## Passagem de gestão

1. Adicione o novo mantenedor como **Owner** da organização no GitHub antes de remover o antigo.
2. Transfira o acesso à conta Google da liga: troque a senha e revise os celulares de recuperação.
3. Atualize `_data/diretoria.yml` e a linha de gestão em `a-liga/index.md`.
4. Retire fotos e e-mails de quem saiu (lembrando que o histórico continua guardando as versões antigas).
5. Entregue este manual ao novo mantenedor e faça com ele uma edição de teste.

## Testar no computador

Opcional e técnico. Para ver o site no próprio computador antes de publicar, instale Ruby e Bundler e, dentro da pasta do site, rode:

```bash
bundle install
bundle exec jekyll serve
```

Depois, abra `http://localhost:4000`. Para o uso normal, editar pelo navegador é suficiente.

## Mapa dos arquivos

```text
.
├── _config.yml               configuração geral (nome, endereço, contato)
├── _data/                    CONTEÚDO DO DIA A DIA
│   ├── avisos.yml            mural de avisos
│   ├── processo_seletivo.yml aberto/fechado, formulário e edital
│   ├── cronograma.yml        aulas
│   ├── escala.yml            endereço da planilha da escala
│   ├── biblioteca.yml        materiais autorais e fontes externas
│   ├── galeria.yml           álbuns por categoria
│   ├── diretoria.yml         nomes, cargos, fotos e contatos
│   ├── faq.yml               perguntas frequentes
│   └── navegacao.yml         menu principal (raramente muda)
├── index.md                  texto de abertura da página inicial
├── a-liga/
│   ├── index.md              missão, histórico e diretoria
│   └── transparencia.md      Painel de transparência
├── ensino/index.md           cronograma, escala e biblioteca
├── galeria/index.md          galeria de atividades
├── 404.html                  página de endereço não encontrado
├── assets/
│   ├── img/                  logo.png, favicon.png, diretoria/, galeria/
│   ├── docs/                 estatuto-lagen.pdf, biblioteca/
│   ├── css/lagen.css         cores, fontes e aparência (parte técnica)
│   └── js/lagen.js           menu no celular e cronograma (parte técnica)
├── _includes/                blocos reutilizáveis das páginas (parte técnica)
├── _layouts/                 moldes das páginas (parte técnica)
└── Gemfile                   só para testar no computador
```

Cores e fontes ficam nas primeiras linhas de `assets/css/lagen.css` (bloco `:root`), com nomes como `--vinho` e `--pergaminho`. Mude ali se a identidade visual mudar.
