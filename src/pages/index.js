import Certificados from "@/pages/Certificados";
import Experiencia from "@/pages/Experiencia";
import Formacao from "@/pages/Formacao";
import Inicio from "@/pages/Inicio";
import Projetos from "@/pages/Projetos";
import SobreMim from "@/pages/SobreMim";
import Stacks from "@/pages/Stacks";

export default function Home() {
  return (
    <>
      <main className={`min-h-screen text-white w-full mt-24`}>
        <Inicio />
        <SobreMim />
        <Formacao />
        <Experiencia id="experiencia"/>
        <Certificados id="certificados"/>
        <Stacks />
        <Projetos />
      </main>
    </>
  );
}
