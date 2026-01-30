// Script para limpar localStorage e forçar recarga do conteúdo
console.log('🧹 Limpando localStorage...');
localStorage.removeItem('plantaoaluno_content');
console.log('✅ Content limpo! Recarregando página...');
location.reload();
