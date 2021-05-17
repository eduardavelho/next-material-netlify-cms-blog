# next-material-components

A set of Material UI based components to use with Next.js.

CRIAR BOILERPLATE
Mesclar app boilerplate com next-material-components
Criar script starter para gerar boilerplate
Unificar módulos em um único framework, de forma que não seja necessário importar firebase, next ou material-ui

INTEGRAÇÃO COM NETLIFY CMS
Adicionar components básicos e netlify-cms em app boilerplate
Itens do netlify-cms devem ser exportados junto com o componente
Possibilidade de selecionar icones no netlify-cms
Alterar dados de app.json, drawer, header, footer pelo netlify-cms

BUGS
Ver problema de segfault do sharp no netlify
Verificar se sitemap está duplicando URLS

DOCUMENTAÇÃO E NOVAS FEATURES
Escrever documentação dos módulos
No rodapé, links para mídias sociais
Possibilidade de colocar a imagem do usuário no botão do drawer
Drawer personalizado quando usuário está logado
Adicionar componentes básicos (button, chip, paper, icons, etc)
Questões de TWA

FINALIZAÇÃO DO BOILERPLATE
Integrar next-account em next-material-components
Abstração para formulários e validação (front e back-end, ver zod)
Use-form deve ser agnóstico na validação (receber string[])
Substituir class-validator por zod
Desacoplar textos de next-account

NEXT-ACCOUNT
Role system
Upload de imagens, notificações, envio de email
Implementar admin
Remover textos hardcoded
Problemas para carregar o token em next-account
Verificar módulos necessários em next-account
Implementar admin (pode ser integrado na interface)
Tela de notificações
Envio de notificações (firebase-admin, enviar pushid)
Envio de email via admin
Upload de imagens (utilizar Cropper.js para selecionar imagem)
Upload de arquivos para cloudinary (cloudflare para economizar dados)

FUTURO
API de pagamento
Base para tela de perfil
Base para tela de configurações
