import { Cores } from "../../lib/theme";
import type { CoresFlavor } from "../../lib/flavors";
import { usePlataforma } from "../inicio/PlataformaContext";

/**
 * Banner hero da página de planos.
 * Responsabilidade única: exibir título, subline e badge de oferta.
 */
interface PlansHeroProps {
  cores?: CoresFlavor;
}

export default function PlansHero({ cores = Cores }: PlansHeroProps) {
  const { config, textos } = usePlataforma();
  const t = textos.planos;

  return (
    <div
      className="w-full py-6 px-6 text-center relative overflow-hidden"
      style={{ backgroundColor: cores.escura }}
    >
      <div
        className="absolute top-0 left-0 w-64 h-64 rounded-full mix-blend-multiply filter blur-[120px] opacity-20"
        style={{ backgroundColor: cores.primaria }}
      />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 rounded-full mix-blend-multiply filter blur-[120px] opacity-20"
        style={{ backgroundColor: cores.destaque }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full font-medium text-sm mb-6 border" style={{ backgroundColor: `${cores.primaria}33`, color: `${cores.primariaClara}CC`, borderColor: `${cores.primaria}4D` }}>
          <span className="flex h-2 w-2 rounded-full" style={{ backgroundColor: `${cores.primaria}99` }} />
          <span>{config.diasTeste} {t.seloHeroi}</span>
        </span>

        <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          {t.tituloHeroi}
        </h1>
        <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: `${cores.primariaClara}CC` }}>
          {t.subtituloHeroi.replace("{trialDays}", String(config.diasTeste))}
        </p>
      </div>
    </div>
  );
}
