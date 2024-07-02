import Certificados from "@/components/Certificados";
import Experiencia from "@/components/Experiencia";
import Formacao from "@/components/Formacao";
import Inicio from "@/components/Inicio";
import Projetos from "@/components/Projetos";
import SobreMim from "@/components/SobreMim";
import Stacks from "@/components/Stacks";

export default function Home() {
  return (
    <>
      <main className={`min-h-screen text-white w-full mt-24`}>
        <Inicio />
        <SobreMim />
        <Formacao />
        <Experiencia />
        <Certificados />
        <Stacks />
        <Projetos />
      </main>
    </>
  );
}
