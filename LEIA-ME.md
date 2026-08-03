# ROCCA | Arquitetura em Pedra - Landing Page

Estrutura pronta para deploy no Vercel. HTML, CSS e JS num único `index.html`, imagens em `/img`.

---

## 1. Imagens aplicadas

**Marca**
- `logo-rocca.png` - header, menu mobile e footer
- `marca-monograma.jpg` - marca d'água ao fundo do hero
- `textura-pedra.jpg` - fundo do hero
- `og-rocca.jpg` - compartilhamento em redes | `favicon.png` - aba do navegador

**Fotos de obra (do zip, sem repetição)**

| Categoria | Arquivos |
|---|---|
| Cozinhas | `cozinha-01` a `cozinha-04` |
| Banheiros e lavabos | `banheiro-01`, `-02`, `-03`, `-05` |
| Escadas | `escada-01` a `escada-03` |
| Mesas e apoios | `mesa-01` a `mesa-04` |
| Corporativo | `corporativo-01` a `corporativo-03` |
| Seção institucional | `destaque-recepcao` |

Cada foto aparece uma única vez na página.

## 2. ATENÇÃO: marca d'água

Todas as fotos do zip vieram com a marca **somar | stone** aplicada. As selecionadas foram recortadas para remover o logotipo, mas **permanece um monograma translúcido no centro de várias imagens**, que não dá para tirar sem retoque. Fotos onde o logotipo ficava no meio do enquadramento foram descartadas.

Se o posicionamento independente da marca for prioridade, vale pedir ao cliente o banco de fotos original sem marca d'água, ou fazer uma nova sessão já com a identidade ROCCA.

## 3. Formulário

Modelo de 3 etapas, igual ao da Pettrus. Envia para a planilha via Apps Script e redireciona para o WhatsApp com a mensagem de quem veio do Google.

Endpoint já configurado no `index.html`. Colunas gravadas: Data, Nome, Telefone, E-mail, Cidade, Ambientes, Etapa da obra, Previsão, Perfil e Origem. O `apps-script.gs` deste pacote já está com essas colunas: **republique o script** se a versão publicada ainda for a antiga.

## 4. Antes de publicar

1. **GTM**: substituir `GTM-XXXXXXX` nos dois pontos do `index.html`.
2. **Domínio**: substituir `SEUDOMINIO.com.br` no `index.html`, `robots.txt` e `sitemap.xml`.
3. **Endereço, CEP e CNPJ**: preencher no footer e no JSON-LD (marcados como PENDENTE).
4. **Avaliações**: seção comentada no HTML, aguardando o link do Google Meu Negócio.
5. **Cidades**: confirmar a lista da seção de atendimento com o cliente.

## 5. Deploy no Vercel

Framework preset **Other**, sem build command, output na raiz. Subir a pasta inteira.

## 6. Eventos no dataLayer

`clique_whatsapp` (com `origem`), `form_etapa_concluida` (com `etapa`), `envio_formulario` (com `perfil`, `previsao`, `ambientes`), `filtro_galeria` (com `categoria`), `scroll_50` e `scroll_90`.

## 7. Decisões de conteúdo

- **Nenhuma menção a instalação ou medição técnica.** O briefing não cita esses serviços, então a copy fala apenas de produção própria, acabamento e entrega no prazo. Se a marmoraria fizer medição e instalação, é só avisar que eu devolvo esses blocos (eles pesam bastante na conversão).
- **Nenhuma menção ao grupo Somar** em nenhum ponto do código.
- Paleta tirada da própria marca: preto `#0D0D0C`, dourado `#B08D57`, travertino `#E8DFD0`, claro `#F2F0EC`.
