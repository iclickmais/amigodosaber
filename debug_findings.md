# Descobertas de Depuração - Amigo do Saber

## Problemas Identificados
1. **Logotipo em falta**: O projeto usa ficheiros `*.asset.json` do Lovable (ex: `amigo-do-saber-logo.png.asset.json`) que apontam para caminhos relativos como `/__l5e/assets-v1/...`. Estes caminhos funcionam no ambiente Lovable mas resultam em 404 no Vercel porque os ficheiros binários não estão no repositório GitHub.
2. **Dados Admin Vazios**: O Vercel tem variáveis de ambiente Supabase configuradas (desde 24 de Julho), mas o painel admin está vazio. Isto sugere que o Vercel está ligado a um projeto Supabase diferente do que o Lovable está a usar, ou que os dados (alunos, pedidos) não foram migrados.
3. **Lovable Sync**: O Lovable mostra builds malsucedidos e não tem o conector Supabase explicitamente "conectado" na UI de conectores, apesar de usar o Supabase no código.

## Ações Necessárias
- [ ] Descarregar o logotipo e outros assets do Lovable e colocá-los na pasta `public/` ou `src/assets/` como ficheiros reais.
- [ ] Atualizar referências no código para usar os caminhos dos ficheiros reais em vez dos JSON assets.
- [ ] Verificar a URL do Supabase no Lovable (via chat ou inspecionando rede) e comparar com as variáveis no Vercel.
- [ ] Sincronizar os dados do banco de dados se houver discrepância.

## Credenciais Supabase Encontradas
### Vercel (Atuais - Incorretas?)
- **SUPABASE_URL**: `https://lbfxlmkngvwrlafgudck.supabase.co`
- **SUPABASE_ANON_KEY**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (referência `lbfxlmkngvwrlafgudck`)

### Local / Lovable (Corretas)
- **SUPABASE_URL**: `https://lbfxlmkngvwrlafgudck.supabase.co`
- **SUPABASE_ANON_KEY**: `sb_publishable_3gn71ZhnbYN8DSzVIDzAYQ_t74gWyZa` (esta parece ser uma publishable key do Lovable, não a anon key padrão do Supabase)
- **SUPABASE_PROJECT_ID**: `lbfxlmkngvwrlafgudck`

## Próximos Passos
1. Atualizar todas as variáveis `SUPABASE_*` e `NEXT_PUBLIC_SUPABASE_*` no Vercel para apontar para o projeto `lbfxlmkngvwrlafgudck`.
2. Verificar se o logotipo está acessível no Lovable e descarregá-lo.
