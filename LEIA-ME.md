# ROCCA | Arquitetura em Pedra - Landing Page

Estrutura pronta para deploy no Vercel. HTML, CSS e JS num único `index.html`, imagens em `/img`.

---

## 1. Imagens já aplicadas

| Arquivo | Origem | Onde aparece |
|---|---|---|
| `logo-rocca.png` | logo branca enviada | Header, menu mobile e footer |
| `logo-rocca@3x.png` | mesma logo em 3x | reserva para telas de alta densidade |
| `marca-monograma.jpg` | render do monograma R | Bloco da direita no hero |
| `marca-lockup.jpg` | render da marca completa | Seção "A marmoraria" |
| `textura-pedra.jpg` | recorte de textura do render | Fundo do hero |
| `og-rocca.jpg` | recorte da marca em 1200x630 | Compartilhamento em WhatsApp e redes |
| `favicon.png` | monograma em 180x180 | Aba do navegador |

Cada imagem aparece uma única vez na página. Nenhuma repetição.

## 2. Fotos de projeto que ainda faltam

O zip `IMG-_Rocca.zip` não chegou no upload, então a galeria está com espaços reservados, organizados por categoria:

| Categoria | Slots | Proporção |
|---|---|---|
| Cozinha | 3 | 1 vertical (1200x1600) + 2 horizontais (1600x1200) |
| Banheiro e lavabo | 3 | 1 vertical + 2 horizontais |
| Área gourmet | 2 | horizontais |
| Escada e soleira | 2 | 1 vertical + 1 horizontal |
| Fachada e revestimento | 2 | horizontais |

**Como trocar cada slot:** dentro do `<figure>` correspondente, apague o `<div class="ph">` e descomente a linha com `<img>` e `<figcaption>` (o modelo está no primeiro figure da galeria). Nomeie os arquivos por categoria: `cozinha-01.webp`, `banheiro-02.webp`, `gourmet-01.webp` e assim por diante.

Duas regras: uma foto por slot e nenhuma foto repetida entre categorias. A legenda tem que descrever o que a foto realmente mostra.

## 3. Formulário

Mesmo comportamento da LP da Pettrus:

1. Botão travado em cinza até os sete campos obrigatórios validarem.
2. Ao enviar, os dados vão para a planilha via Apps Script.
3. A tela de confirmação aparece e a página abre o WhatsApp automaticamente com a mensagem "Olá, vim do Google e acabei de preencher o formulário no site." Se o navegador bloquear a janela, o botão manual fica visível.

Campos: nome, WhatsApp com máscara, cidade da obra, e-mail, ambiente, material, perfil (cliente final, arquiteto, construtora) e observações opcionais.

## 4. Antes de publicar

1. **GTM**: substituir `GTM-XXXXXXX` nos dois pontos do `index.html`.
2. **Domínio**: substituir `SEUDOMINIO.com.br` no `index.html`, `robots.txt` e `sitemap.xml`.
3. **Apps Script**: publicar o `apps-script.gs` e colar a URL em `var ENDPOINT`. Enquanto vazio, o formulário mostra a confirmação e abre o WhatsApp, mas não grava.
4. **Endereço, CEP e CNPJ**: preencher no footer e no JSON-LD (marcados como PENDENTE).
5. **Avaliações**: seção comentada no HTML, aguardando o link do Google Meu Negócio.
6. **Cidades**: confirmar com o cliente a lista da seção de atendimento antes de publicar.

## 5. Deploy no Vercel

Framework preset **Other**, sem build command, output na raiz. Subir a pasta inteira.

## 6. Eventos no dataLayer

| Evento | Quando | Parâmetro |
|---|---|---|
| `clique_whatsapp` | qualquer botão de WhatsApp | `origem` |
| `envio_formulario` | formulário validado e enviado | `perfil`, `ambiente`, `material` |
| `filtro_galeria` | clique nos filtros de projeto | `categoria` |
| `scroll_50` / `scroll_90` | profundidade de rolagem | - |

## 7. Decisões de design

- **Paleta tirada da própria marca**: preto fosco `#0D0D0C`, dourado escovado `#B08D57`, travertino `#E8DFD0` e claro de apoio `#F2F0EC`.
- **Header sempre escuro** ao rolar, porque a logo enviada é branca e some em fundo claro. Se o cliente mandar a versão dourada ou escura, dá para inverter.
- **Marcellus** nos títulos, romana de inscrição que conversa com a serifa da logo.
- **Nenhuma menção ao grupo Somar** em nenhum ponto do código.
