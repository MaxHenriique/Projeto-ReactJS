import React from "react";
import './App.css';
import loja from './img/loja.jpg'


// segunda parte
// classe ou função 
// escolhendo classe :

class App extends React.Component{
    render(){
    return(

      <div>
      <header className="cabecalho">
      <h1 className="logo">
          <a href="index.html" title = "Loja de Informática do Obama" > Loja de Informática do Obama </a>
      </h1>
      <form action="" method="post">
          <input type="text" name="busca" id="busca" placeholder="Faça uma busca aqui!"/>
          
          <button> <i className="fa-solid fa-magnifying-glass"></i> </button>
         
      </form>
   </header>
     <nav className="menu">
         <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#contatos">Contatos</a></li>
         </ul>

         <div className="social-icons">
         <a href="https://github.com/MaxHenriique" target="_blank" class="btn-github"><i class="fa-brands fa-github"></i></a>
         <a href="https://www.linkedin.com/in/max-henrique-fontes/" target="_blank" class="btn-linkedin"><i class="fa-brands fa-linkedin"></i></a>
         <a href="https://www.google.com/search?q=Max._.henrique&rlz=1C1FCXM_pt-PTBR992BR992&sxsrf=APq-WBsJbw_5ggqBb8SMA400s22rDy39SQ%3A1647469665106&ei=YWQyYrCDBsybwbkPw9yEsAI&ved=0ahUKEwjwt6rh1sv2AhXMTTABHUMuASYQ4dUDCA4&uact=5&oq=Max._.henrique&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgAEB4yBAgAEB4yBAgAEB4yBAgAEB4yBAgAEB4yBAgAEB4yBAgAEB4yBAgAEB4yBAgAEB46BwgjELADECc6BwgAELADEB46CQgAELADEAoQHkoFCDwSATFKBAhBGAFKBAhGGABQzAxY-xJgjRxoAXAAeACAAcUBiAHhApIBAzAuMpgBAKABAcgBCsABAQ&sclient=gws-wiz" target="_blank" class="btn-google"><i class="fa-brands fa-google"></i></a>
  
        </div>
     </nav>

     <main className="principal">

         <article className="sobre">
             <h2>Sobre Nós</h2>
             <img src={loja} alt="imagem de uma loja de informática com três pessoas, sendo dois homens e uma mulher. Mulher vestida... homem ao lado dela vestido... e homem à frente deles vestido..."/>
             <p>Há mais de 20 anos atuando na venda e distribuição de produtos de Informática, Eletrônicos, Games e Telefonia, o NODESHOP se tornou referência no Brasil no que se refere à qualidade dos produtos comercializados com o melhor custo benefício.</p>
             <br/>
             <p>Atualmente trabalhamos apenas com vendedores homologados, que conhecem a operação e apoiam a satisfação de nossos consumidores em primeiro lugar. Nós trabalhamos com um mix de 5000 produtos para melhor te atender.</p>
             <br/>
             <p>Somente produtos de procedência certificada. O NODESHOP comercializa produtos diretamente provenientes dos fabricantes, dos distribuidores oficiais ou de lojas parceiras, portanto, os clientes encontrarão somente produtos de qualidade e com garantia conjunta de nossa empresa e do canal responsável.</p>
             <br/>
             <br/>
             <p>Em parceria com as maiores marcas da informática mundial, os esforços de nossa empresa estão direcionados para a constante melhoria de atendimento e para o alcance da completa satisfação de nossos clientes.</p>
         </article>
         <aside className="onde-estamos">
             <h2>Onde Estamos</h2>
             <p>Rua: Tito nº54 - Vila Romana - São Paulo - Brasil</p>
             
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1241448356554!2d-46.691808699999996!3d-23.5280369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1651457917517!5m2!1spt-BR!2sbr"></iframe>

             <h2>Contatos</h2>
             <ul>
                 <li><i className="fa-solid fa-phone"></i>(11) 952073646</li>
                 <li><i className="fa-brands fa-whatsapp"></i>(11) 925073646</li>
                 <li><i className="fa-solid fa-envelope"></i>contato.maxhenrique@gmail.com</li>
             </ul>
         </aside>

     </main>

     <section className="newsletter">
         <h3>Newsletter</h3>
         <p>Receba nossas promoções por e-mail.</p>
         <form action="" method="post">
             <input type="text" name="nome" id="news-nome" placeholder="Seu nome"/>
             <input type="email" name="email" id="news-email" placeholder="Seu e-mail"/>
             <button>Cadastrar</button>
         </form>
     </section>
     
     <footer className="rodape">
         <p>Loja do Obama - Todos os direitos reservados | Recriado por Max Henrique Fontes Sinche &copy;</p>
     </footer>

     </div>
)
}
}
export default App;