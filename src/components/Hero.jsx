import foto from '../assets/foto.png';

export default function Hero() {
  return (
    <section className="hero">
      
      <img src={foto} alt="Foto do Ewerton" />

      <div className="hero-text">
        <h1>Ewerton Henrique</h1>

        <h3>Técnico em Desenvolvimento de Sistemas</h3>

        <p>
          Sou formado em Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento moderno e boas práticas de programação.
          Ao longo da minha formação, me aprofundei em JavaScript, Python e outras tecnologias essenciais para o mercado,
          complementando meus estudos com diversos cursos extra que reforçaram minhas habilidades técnicas e práticas.
        </p>

        <p>
          Tenho experiência no desenvolvimento de interfaces, criação de aplicações funcionais e construção de soluções eficientes,
          sempre buscando aprender novas ferramentas e melhorar meus projetos. Sou dedicado, curioso e gosto de entender como as
          tecnologias funcionam na prática, explorando desde lógica de programação até desenvolvimento web e automações.
        </p>

        <p>
          Atualmente, estou em busca de oportunidades para aplicar meus conhecimentos, contribuir em projetos reais e continuar
          evoluindo como desenvolvedor.
        </p>
      </div>

    </section>
  );
}
