import {db, app, auth } from './firebaseConfig.js';
import {getAuth, createUserWithEmailAndPassword, singInWithEmailAndPassword,
    signOut, sendPasswordResetEmail, onAuthStataChanged} 
   from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js"; 

const emailCadastro = document.getElementById("emailcadastro");
const senhaCadatro = document.getElementById("senhacadastro")
const btnCadastro = document.getElementById("btnCadastro")
const mensagem = document.getElementById("mensagem") 

async function cadastrarUsuario(email, senha) {
    try {
     const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
     return userCredential.user;     
    } catch (error){
        console.error ("Erro ao cadastrar:", error.code, error.mensagem,)
        let mensagemErro = "ocorreu um erro ao cadastrar. tente novamente.";
        switch (error.code) {
        case 'auth/email-already-in-use':
        mensagemErro = "Este email já em uso:";
        break;
        case 'auth/invalid-email':
    mensagemErro = "Formato de email inválido";
    break;
    case 'auth/weak-password':
    mensagemErro = 'a senha deve ter pelo menos 6 caractares';
    break;
    }
    throw { mensagem: mensagemErro};
    
}
    if(btnCadastro){
        btnCadastro.addEventListener("click", async function () {
           const email = emailCadastro.value;
           const senha = senhaCadatro.value;
           mensagem.textContent = ""; 
        })
    }
}

if (!email || !senha) {
mensagemCadastro.textContent = 'por favor, preencha todos os campos.';
return;
}
try {
    const user = await cadastrarUsuario(email, senha);
    console.log('Usuário cadastrado:', user);
    mensagemCadastro.textContent = 'Cadastro realizado com sucesso!';
    setTimeout (function(){
        window.location.href = '../index.html'
    }, 3000);
}catch (error) {
    mensagemCadastro.textContent = 'Erro no cadastro: ${error.message}';
}