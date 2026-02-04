import Card from "./Card";

// IMPORTANDO AS IMAGENS DO ASSETS
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";
import proj5 from "../assets/proj5.png";
import proj6 from "../assets/proj6.png";

export default function Projects() {
  return (
    <section className="section-box" id="projects">
      <h2>Projetos</h2>
      <p className="subtitle"></p>

      <div className="cards-grid">
        <Card 
          title="Brasilidades"
          description="Site de Altores Brasileiros"
          image={proj1}
          link="https://ton44131.github.io/Brasilidades/
"
        />

        <Card 
          title="Jogo da Forca"
          description="Jogo da forca de Pokemon"
          image={proj2}
          link=" https://ton44131.github.io/JOGO-FORCA2/"
        />


        <Card 
          title="Jogo Cor"
          description="Jogo de acertar cores"
          image={proj3}
          link="https://ton44131.github.io/Jogo-cor/"
        />
        <Card 
          title="Basquete"
          description="Site sobre a NBA"
          image={proj4}
          link="https://ton44131.github.io/basquete-2.0/"
        />

        <Card 
          title="Jogo de troca paldavras"
          description="Troca palavras de pokemon"
          image={proj5}
          link="https://ton44131.github.io/troca-palavra/"
        />

        <Card 
          title="Nota fiscal"
          description="Site para Salvar documentos em PDF"
          image={proj6}
          link="https://ton44131.github.io/NotaFiscal/"
        />
        <Card 
          title="Nota fiscal"
          description="Site para Salvar documentos em PDF"
          image={proj6}
          link="https://ton44131.github.io/NotaFiscal/"
        />
      </div>
    </section>
  );
}
