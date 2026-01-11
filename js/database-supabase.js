// ============================================
// DATABASE SUPABASE - Substitui database.js
// ============================================

const DB_SUPABASE = {
    // ============================================
    // INICIALIZAÇÃO
    // ============================================

    init() {
        console.log('✅ Database Supabase inicializado');
        // Não precisa mais de init local
    },

    // ============================================
    // AUTENTICAÇÃO
    // ============================================

    async register(email, password, name, schoolYear) {
        try {
            const { data, error } = await supabaseClient
                .rpc('register_user', {
                    p_email: email,
                    p_password: password,
                    p_name: name,
                    p_school_year: schoolYear
                });

            if (error) throw error;

            // Salvar no localStorage para sessão
            localStorage.setItem('plantaoaluno_currentUser', JSON.stringify(data));
            return data;
        } catch (error) {
            console.error('Erro no registro:', error);
            if (error.message.includes('unique')) {
                throw new Error('Email já cadastrado!');
            }
            throw error;
        }
    },

    async login(email, password) {
        try {
            const { data, error } = await supabaseClient
                .rpc('login_user', {
                    p_email: email,
                    p_password: password
                });

            if (error) throw error;

            // Salvar no localStorage para sessão
            localStorage.setItem('plantaoaluno_currentUser', JSON.stringify(data));
            return data;
        } catch (error) {
            console.error('Erro no login:', error);
            throw new Error('Email ou senha inválidos!');
        }
    },

    logout() {
        localStorage.removeItem('plantaoaluno_currentUser');
        window.location.href = '../pages/login.html';
    },

    getCurrentUser() {
        const user = localStorage.getItem('plantaoaluno_currentUser');
        return user ? JSON.parse(user) : null;
    },

    async updateUser(userData) {
        try {
            const { data, error } = await supabaseClient
                .from('users')
                .update({
                    name: userData.name,
                    school_year: userData.schoolYear || userData.school_year,
                    plan: userData.plan
                })
                .eq('id', userData.id)
                .select()
                .single();

            if (error) throw error;

            // Atualizar localStorage
            localStorage.setItem('plantaoaluno_currentUser', JSON.stringify(data));
            return data;
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
            throw error;
        }
    },

    async getAllUsers() {
        try {
            const { data, error } = await supabaseClient
                .from('users')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            return [];
        }
    },

    async deleteUser(userId) {
        try {
            const { error } = await supabaseClient
                .from('users')
                .delete()
                .eq('id', userId);

            if (error) throw error;
        } catch (error) {
            console.error('Erro ao deletar usuário:', error);
            throw error;
        }
    },

    // ============================================
    // MÓDULOS
    // ============================================

    async getModulos(materia, bimestre) {
        try {
            const currentUser = this.getCurrentUser();
            if (!currentUser) return [];

            const schoolYear = currentUser.school_year || currentUser.schoolYear;

            const { data, error } = await supabaseClient
                .from('modulos')
                .select('*')
                .eq('materia', materia)
                .eq('bimestre', bimestre)
                .or(`school_year.is.null,school_year.eq.${schoolYear}`);

            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Erro ao buscar módulos:', error);
            return [];
        }
    },

    async getAllModulos() {
        try {
            const { data, error } = await supabaseClient
                .from('modulos')
                .select('*')
                .order('id');

            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Erro ao buscar todos módulos:', error);
            return [];
        }
    },

    async addModulo(modulo) {
        try {
            const { data, error } = await supabaseClient
                .from('modulos')
                .insert({
                    materia: modulo.materia,
                    bimestre: modulo.bimestre,
                    school_year: modulo.schoolYear,
                    titulo: modulo.titulo,
                    descricao: modulo.descricao,
                    resumo: modulo.resumo,
                    simulado: modulo.simulado
                })
                .select()
                .single();

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Erro ao adicionar módulo:', error);
            throw error;
        }
    },

    async updateModulo(modulo) {
        try {
            const { data, error } = await supabaseClient
                .from('modulos')
                .update({
                    materia: modulo.materia,
                    bimestre: modulo.bimestre,
                    school_year: modulo.schoolYear,
                    titulo: modulo.titulo,
                    descricao: modulo.descricao,
                    resumo: modulo.resumo,
                    simulado: modulo.simulado
                })
                .eq('id', modulo.id)
                .select()
                .single();

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Erro ao atualizar módulo:', error);
            throw error;
        }
    },

    async deleteModulo(moduloId) {
        try {
            const { error } = await supabaseClient
                .from('modulos')
                .delete()
                .eq('id', moduloId);

            if (error) throw error;
        } catch (error) {
            console.error('Erro ao deletar módulo:', error);
            throw error;
        }
    },

    // ============================================
    // VIDEOAULAS
    // ============================================

    async getVideoaulas(materia, bimestre) {
        try {
            const currentUser = this.getCurrentUser();
            if (!currentUser) return [];

            const schoolYear = currentUser.school_year || currentUser.schoolYear;

            const { data, error } = await supabaseClient
                .from('videoaulas')
                .select('*')
                .eq('materia', materia)
                .eq('bimestre', bimestre)
                .or(`school_year.is.null,school_year.eq.${schoolYear}`);

            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Erro ao buscar videoaulas:', error);
            return [];
        }
    },

    async getAllVideoaulas() {
        try {
            const { data, error } = await supabaseClient
                .from('videoaulas')
                .select('*')
                .order('id');

            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Erro ao buscar todas videoaulas:', error);
            return [];
        }
    },

    async addVideoaula(videoaula) {
        try {
            const { data, error } = await supabaseClient
                .from('videoaulas')
                .insert({
                    materia: videoaula.materia,
                    bimestre: videoaula.bimestre,
                    school_year: videoaula.schoolYear,
                    titulo: videoaula.titulo,
                    url: videoaula.url,
                    duracao: videoaula.duracao
                })
                .select()
                .single();

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Erro ao adicionar videoaula:', error);
            throw error;
        }
    },

    async deleteVideoaula(videoaulaId) {
        try {
            const { error } = await supabaseClient
                .from('videoaulas')
                .delete()
                .eq('id', videoaulaId);

            if (error) throw error;
        } catch (error) {
            console.error('Erro ao deletar videoaula:', error);
            throw error;
        }
    },

    // ============================================
    // RESULTADOS
    // ============================================

    async saveResult(result) {
        try {
            const currentUser = this.getCurrentUser();
            if (!currentUser) throw new Error('Usuário não autenticado');

            const { data, error } = await supabaseClient
                .from('results')
                .insert({
                    user_id: currentUser.id,
                    modulo_id: result.moduloId,
                    materia: result.materia,
                    bimestre: result.bimestre,
                    nota: result.nota,
                    acertos: result.acertos,
                    total_questoes: result.totalQuestoes,
                    pontuacao: result.pontuacao
                })
                .select()
                .single();

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Erro ao salvar resultado:', error);
            throw error;
        }
    },

    async getUserResults(userId) {
        try {
            const { data, error } = await supabaseClient
                .from('results')
                .select('*')
                .eq('user_id', userId)
                .order('date', { ascending: false });

            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Erro ao buscar resultados:', error);
            return [];
        }
    },

    async getAllResults() {
        try {
            const { data, error } = await supabaseClient
                .from('results')
                .select(`
                    *,
                    users (name, email)
                `)
                .order('date', { ascending: false });

            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Erro ao buscar todos resultados:', error);
            return [];
        }
    },

    // ============================================
    // CONTEÚDO DESBLOQUEADO
    // ============================================

    async getContent() {
        try {
            const { data, error } = await supabaseClient
                .from('unlocked_content')
                .select('*')
                .limit(1)
                .single();

            if (error) throw error;

            return {
                unlockedBimestres: data.unlocked_bimestres || [1],
                unlockedMaterias: data.unlocked_materias || { 1: [] }
            };
        } catch (error) {
            console.error('Erro ao buscar conteúdo:', error);
            return {
                unlockedBimestres: [1, 2, 3, 4],
                unlockedMaterias: {
                    1: ['matematica', 'geografia', 'historia', 'portugues', 'fisica', 'quimica', 'biologia', 'ingles'],
                    2: ['matematica', 'geografia', 'historia', 'portugues', 'fisica', 'quimica', 'biologia', 'ingles'],
                    3: ['matematica', 'geografia', 'historia', 'portugues', 'fisica', 'quimica', 'biologia', 'ingles'],
                    4: ['matematica', 'geografia', 'historia', 'portugues', 'fisica', 'quimica', 'biologia', 'ingles']
                }
            };
        }
    },

    async unlockBimestre(bimestre) {
        try {
            const content = await this.getContent();
            if (!content.unlockedBimestres.includes(bimestre)) {
                content.unlockedBimestres.push(bimestre);

                const { error } = await supabaseClient
                    .from('unlocked_content')
                    .update({ unlocked_bimestres: content.unlockedBimestres })
                    .eq('id', 1);

                if (error) throw error;
            }
        } catch (error) {
            console.error('Erro ao desbloquear bimestre:', error);
        }
    },

    async lockBimestre(bimestre) {
        try {
            const content = await this.getContent();
            const index = content.unlockedBimestres.indexOf(bimestre);
            if (index > -1) {
                content.unlockedBimestres.splice(index, 1);

                const { error } = await supabaseClient
                    .from('unlocked_content')
                    .update({ unlocked_bimestres: content.unlockedBimestres })
                    .eq('id', 1);

                if (error) throw error;
            }
        } catch (error) {
            console.error('Erro ao bloquear bimestre:', error);
        }
    },

    async unlockMateria(bimestre, materia) {
        try {
            const content = await this.getContent();
            if (!content.unlockedMaterias[bimestre]) {
                content.unlockedMaterias[bimestre] = [];
            }

            if (!content.unlockedMaterias[bimestre].includes(materia)) {
                content.unlockedMaterias[bimestre].push(materia);

                const { error } = await supabaseClient
                    .from('unlocked_content')
                    .update({ unlocked_materias: content.unlockedMaterias })
                    .eq('id', 1);

                if (error) throw error;
            }
        } catch (error) {
            console.error('Erro ao desbloquear matéria:', error);
        }
    },

    async lockMateria(bimestre, materia) {
        try {
            const content = await this.getContent();
            if (content.unlockedMaterias[bimestre]) {
                const index = content.unlockedMaterias[bimestre].indexOf(materia);
                if (index > -1) {
                    content.unlockedMaterias[bimestre].splice(index, 1);

                    const { error } = await supabaseClient
                        .from('unlocked_content')
                        .update({ unlocked_materias: content.unlockedMaterias })
                        .eq('id', 1);

                    if (error) throw error;
                }
            }
        } catch (error) {
            console.error('Erro ao bloquear matéria:', error);
        }
    }
};

// Substituir DB global
window.DB = DB_SUPABASE;

console.log('✅ Database Supabase carregado - DB global substituído');
