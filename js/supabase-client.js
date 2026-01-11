// ============================================
// CONFIGURAÇÃO DO SUPABASE
// ============================================

// ⚠️ IMPORTANTE: Substitua com suas credenciais reais!
// Pegue essas informações em: Settings → API no painel do Supabase

const SUPABASE_URL = 'https://SEU-PROJETO.supabase.co'; // SUBSTITUA!
const SUPABASE_KEY = 'SUA-CHAVE-ANON-AQUI'; // SUBSTITUA!

// Criar cliente do Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Exportar para uso global
window.supabaseClient = supabase;

console.log('✅ Supabase Client inicializado');
