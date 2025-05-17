import { createClient } from '@supabase/supabase-js';

// Inicialização do cliente Supabase
// Estas credenciais serão substituídas pelas reais quando o site for importado no Lovable
const supabaseUrl = 'https://your-project-url.supabase.co';
const supabaseKey = 'your-anon-key';
const supabase = createClient(supabaseUrl, supabaseKey);

// Função para enviar mensagem de contato
export async function enviarMensagem(dados) {
  try {
    const { data, error } = await supabase
      .from('mensagens')
      .insert([
        { 
          nome: dados.name,
          email: dados.email,
          telefone: dados.phone,
          mensagem: dados.message,
          data_envio: new Date()
        }
      ]);
      
    if (error) throw error;
    return { sucesso: true, data };
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
    return { sucesso: false, erro: error.message };
  }
}

// Função para autenticação de usuários (para área administrativa)
export async function autenticarUsuario(email, senha) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });
    
    if (error) throw error;
    return { sucesso: true, usuario: data.user };
  } catch (error) {
    console.error('Erro na autenticação:', error);
    return { sucesso: false, erro: error.message };
  }
}

// Função para obter mensagens (para área administrativa)
export async function obterMensagens() {
  try {
    const { data, error } = await supabase
      .from('mensagens')
      .select('*')
      .order('data_envio', { ascending: false });
      
    if (error) throw error;
    return { sucesso: true, mensagens: data };
  } catch (error) {
    console.error('Erro ao obter mensagens:', error);
    return { sucesso: false, erro: error.message };
  }
}
