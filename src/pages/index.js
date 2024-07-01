import Experiencia from "@/components/Experiencia";
import Formacao from "@/components/Formacao";
import Inicio from "@/components/Inicio";
import SobreMim from "@/components/SobreMim";

export default function Home() {
  return (
    <>
      <main className={`min-h-screen text-white w-full mt-24`}>
        <Inicio />
        <SobreMim /><hr className="border-amber-200"/>
        <Formacao />
        <Experiencia />
      </main>
    </>
  );
}
