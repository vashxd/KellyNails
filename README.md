# Studio Kelly Nail - Landing Page

Uma landing page moderna e responsiva para o Studio Kelly Nail, desenvolvida com HTML, CSS e JavaScript puro.

## 🎨 Cores do Projeto

- **Primária**: #E4004B (Rosa vibrante)
- **Secundária**: #ED775A (Coral)
- **Terciária**: #FAD691 (Amarelo suave)
- **Quaternária**: #C9CDCF (Cinza claro)

## 🚀 Funcionalidades

- **Design Responsivo**: Adaptação perfeita para desktop, tablet e mobile
- **Carrossel de Imagens**: Galeria rotativa com imagens placeholder (prontas para integração com Instagram)
- **Formulário de Contato**: Integrado com WhatsApp para facilitar o agendamento
- **Menu Mobile**: Interface otimizada para dispositivos móveis
- **Animações Suaves**: Efeitos de hover e transições elegantes
- **SEO Otimizado**: Meta tags e estrutura semântica

## 📁 Estrutura do Projeto

```
StudioKellyNail/
├── index.html          # Página principal
├── style.css           # Estilos e responsividade
├── script.js           # Funcionalidades JavaScript
└── README.md           # Este arquivo
```

## 🔧 Personalização

### Informações de Contato

Edite as seguintes informações no arquivo `index.html`:

- **Endereço**: Linha 147-148
- **Telefone**: Linha 153 e script.js linha 67
- **E-mail**: Linha 158
- **Horário**: Linha 163-164
- **Links Sociais**: Linhas 168-175

### Imagens

Substitua as imagens placeholder pelos URLs das imagens reais:

- **Hero Section**: Linha 43
- **Sobre Nós**: Linha 122
- **Carrossel**: O script.js carrega imagens automáticas (linhas 95-102)

### Integração com Instagram

Para integrar com posts reais do Instagram, você precisará:

1. **API do Instagram**: Usar a Instagram Basic Display API
2. **Access Token**: Obter token de acesso
3. **Modificar script.js**: Substituir a função `loadInstagramPosts()` pela chamada real da API

```javascript
// Exemplo de integração (requer configuração da API)
async function loadInstagramPosts() {
    const accessToken = 'SEU_ACCESS_TOKEN';
    const response = await fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`);
    // ... resto da implementação
}
```

### WhatsApp

O número do WhatsApp está configurado no arquivo `script.js` linha 67:
```javascript
const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;
```

Substitua `5511999999999` pelo número real no formato internacional.

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:
- **Desktop**: > 768px
- **Tablet**: 768px - 481px  
- **Mobile**: ≤ 480px

## 🌐 Como Usar

1. **Desenvolvimento Local**: Abra o `index.html` em qualquer navegador
2. **Hospedagem**: Faça upload dos arquivos para qualquer servidor web
3. **Domínio**: Configure seu domínio para apontar para o servidor

## 📈 Próximos Passos

- [ ] Integração real com Instagram API
- [ ] Sistema de agendamento online
- [ ] Dashboard administrativo
- [ ] Blog/notícias
- [ ] Sistema de avaliações
- [ ] PWA (Progressive Web App)

## 🎯 Otimizações SEO Implementadas

- Meta tags otimizadas
- Estrutura semântica HTML5
- Alt text em todas as imagens
- URLs amigáveis (quando hospedado)
- Schema markup (pode ser adicionado)

## 📞 Suporte

Para suporte ou dúvidas sobre a implementação, entre em contato através do repositório do projeto.

---

**Studio Kelly Nail** - Transformando suas unhas em obras de arte! 💅✨