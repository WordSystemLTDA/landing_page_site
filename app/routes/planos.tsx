import { useEffect, useState, type CSSProperties } from "react";
import CabecalhoSite from "../components/CabecalhoSite";
import HeroPlanos from "../components/planos/HeroPlanos";
import SeletorTipoPlano from "../components/planos/SeletorTipoPlano";
import SliderPlanos from "../components/planos/SliderPlanos";
import TabelaComparacao from "../components/planos/TabelaComparacao";
import RodapeSite from "../components/RodapeSite";
import { usePlanos } from "../hooks/usePlanos";
import { CHAVE_FLAVOR, type CoresFlavor } from "../lib/flavors";
import { Cores, Fontes } from "../lib/theme";

interface Props {
  mostrarPlanoCliente?: boolean;
}

const CORES_PLANOS_MARQFRETE: CoresFlavor = {
  primaria: "#FF7A00",
  primariaEscura: "#FF4500",
  primariaClara: "#FFF1E6",
  destaque: "#16A34A",
  escura: "#1E293B",
  clara: "#FFFFFF",
  borda: "#E5E7EB",
  textoSuave: "#4B5563",
  textoDesabilitado: "#9CA3AF",
  secundaria: "#FFF1E6",
};

const CORES_PLANOS = CHAVE_FLAVOR === "marqFrete" ? CORES_PLANOS_MARQFRETE : Cores;

function criarEstiloBasePlanos(): CSSProperties & Record<string, string> {
  return {
    fontFamily: Fontes.principal,
    backgroundColor: CORES_PLANOS.clara,
    color: CORES_PLANOS.escura,
    "--color-primary": CORES_PLANOS.primaria,
    "--color-primary-dark": CORES_PLANOS.primariaEscura,
    "--color-primary-light": CORES_PLANOS.primariaClara,
    "--color-accent": CORES_PLANOS.destaque,
    "--color-dark": CORES_PLANOS.escura,
    "--color-light": CORES_PLANOS.clara,
    "--color-border": CORES_PLANOS.borda,
    "--color-text-muted": CORES_PLANOS.textoSuave,
    "--color-text-disabled": CORES_PLANOS.textoDesabilitado,
  };
}

function classEnter(isVisible: boolean, delayClass: string) {
  return `planos-enter ${isVisible ? "planos-enter-visible" : ""} ${delayClass}`;
}

function PlanosLoadingState() {
  return (
    <div className="w-full min-h-screen flex flex-col selection:bg-(--color-primary) selection:text-white" style={criarEstiloBasePlanos()}>
      <CabecalhoSite />

      <div className="flex-1 flex flex-col items-center pt-28 pb-10 w-full">
        <div className="w-full max-w-6xl px-6">
          <div className="planos-skeleton h-52 w-full rounded-3xl" />
        </div>

        <div className="mt-10 w-full flex justify-center px-4">
          <div className="inline-flex items-center rounded-full border p-1" style={{ borderColor: CORES_PLANOS.borda, backgroundColor: CORES_PLANOS.clara }}>
            <div className="planos-skeleton h-12 w-36 rounded-full" />
            <div className="planos-skeleton h-12 w-36 rounded-full" />
          </div>
        </div>

        <div className="mt-10 w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="planos-skeleton h-96 rounded-3xl" />
          <div className="planos-skeleton h-96 rounded-3xl" />
          <div className="planos-skeleton h-96 rounded-3xl" />
        </div>

        <div className="mt-10 w-full max-w-6xl px-6">
          <div className="planos-skeleton h-80 rounded-3xl" />
        </div>
      </div>

      <RodapeSite />
    </div>
  );
}

/**
 * Página de Planos.
 * Responsabilidade: orquestrar o layout e delegar estado ao hook `usePlanos`.
 * Não contém lógica de negócio nem de fetch — tudo vive nos hooks e serviços.
 */
export default function PaginaPlanos({ mostrarPlanoCliente = false }: Props) {
  const [isPageVisible, setIsPageVisible] = useState(false);

  const {
    loading,
    error,
    planos,
    tiposMensalidade,
    comparacao,
    tipodemensalidadeSelecionado,
    setTipodemensalidadeSelecionado,
    plansScrollRef,
    tabelaComparacaoRef,
    scrollPlanos,
  } = usePlanos(mostrarPlanoCliente);

  useEffect(() => {
    if (!loading && !error) {
      const frame = requestAnimationFrame(() => setIsPageVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    setIsPageVisible(false);
  }, [loading, error]);

  if (loading) {
    return <PlanosLoadingState />;
  }

  if (error) {
    return (
      <div
        className="p-8 flex justify-center w-full min-h-screen items-center font-bold text-xl"
        style={{ color: CORES_PLANOS.primaria }}
      >
        {error}
      </div>
    );
  }

  return (
    <div
      className="w-full min-h-screen flex flex-col selection:bg-(--color-primary) selection:text-white"
      style={criarEstiloBasePlanos()}
    >
      <CabecalhoSite />

      <div className="flex-1 flex flex-col items-center pt-19">
        <div className={classEnter(isPageVisible, "planos-delay-1 w-full")}>
          <HeroPlanos cores={CORES_PLANOS} />
        </div>

        <div className={classEnter(isPageVisible, "planos-delay-2 w-full overflow-hidden")}>
          <SeletorTipoPlano
            tipos={tiposMensalidade}
            selecionado={tipodemensalidadeSelecionado}
            onChange={setTipodemensalidadeSelecionado}
            cores={CORES_PLANOS}
          />
        </div>

        <div className={classEnter(isPageVisible, "planos-delay-3 w-full")}>
          <SliderPlanos
            planos={planos}
            tipodemensalidadeSelecionado={tipodemensalidadeSelecionado}
            mostrarPlanoCliente={mostrarPlanoCliente}
            scrollRef={plansScrollRef}
            tabelaComparacaoRef={tabelaComparacaoRef}
            onScroll={scrollPlanos}
            cores={CORES_PLANOS}
          />
        </div>

        <div className={classEnter(isPageVisible, "planos-delay-4 w-full")}>
          <TabelaComparacao
            planos={planos}
            comparacao={comparacao}
            tipodemensalidadeSelecionado={tipodemensalidadeSelecionado}
            tableRef={tabelaComparacaoRef}
            cores={CORES_PLANOS}
          />
        </div>
      </div>

      <div className={classEnter(isPageVisible, "planos-delay-5")}>
        <RodapeSite />
      </div>
    </div>
  );
}
