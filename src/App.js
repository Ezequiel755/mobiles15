import Header from "./Header";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import Skills from "./Skills";

function App() {
  const projects = [
    {
      id: 1,
      title: "Landing Page Animada",
      description: "Página moderna com transições suaves.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "CSS"],
    },
    {
      id: 2,
      title: "App de Receitas",
      description: "Aplicativo para salvar e buscar receitas.",
      image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "PWA"],
    },
    {
      id: 3,
      title: "UI Kit Azul",
      description: "Coleção de componentes reutilizáveis.",
      image: "/img/743-800x450.jpg",
      tech: ["Storybook", "CSS"],
    },
  ];

  return (
    <div>
      <Header />
      <main>
        <Section id="sobre" title="Sobre">
          <p>
            Olá! Eu sou um desenvolvedor apaixonado por tecnologia e este é o meu
            portfólio criado em React.
          </p>
        </Section>

        <Section id="projetos" title="Projetos">
          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </Section>

        <Skills />
      </main>
    </div>
  );
}

export default App;
