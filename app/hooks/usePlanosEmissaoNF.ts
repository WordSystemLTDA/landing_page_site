import { useEffect, useRef, useState } from "react";
import type { FetchPlansResponse, ModeloTipoDeMensalidade } from "../models/ModeloPlanos";
import { ServicosPlanos } from "../services/ServicoPlanos";

/**
 * Variante do usePlanos que retorna apenas os planos de emissão de nota fiscal.
 */
/**
 * Variante do usePlanos que retorna apenas os planos de emissão de nota fiscal.
 * @param idMaisVendido ID do plano que deve ser exibido como "Mais Vendido".
 *                      Se omitido, usa o valor do banco.
 */
export function usePlanosEmissaoNF(mostrarPlanoCliente = false, idMaisVendido?: string) {
    const [data, setData] = useState<FetchPlansResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [tipodemensalidadeSelecionado, setTipodemensalidadeSelecionado] = useState<ModeloTipoDeMensalidade | null>(null);

    const plansScrollRef = useRef<HTMLDivElement>(null);
    const tabelaComparacaoRef = useRef<HTMLDivElement>(null!);

    useEffect(() => {
        let mounted = true;

        ServicosPlanos.listar()
            .then((res) => {
                if (!mounted) return;
                setData(res);

                if (res.tipodemensalidade?.length > 0) {
                    setTipodemensalidadeSelecionado(res.tipodemensalidade[0]);
                }
            })
            .catch((e: unknown) => {
                if (!mounted) return;
                setError(String(e));
            })
            .finally(() => {
                if (!mounted) return;
                setLoading(false);
            });

        return () => {
            mounted = false;
        };
    }, [mostrarPlanoCliente]);

    function scrollPlanos(direction: "left" | "right") {
        if (plansScrollRef.current) {
            plansScrollRef.current.scrollBy({
                left: direction === "left" ? -350 : 350,
                behavior: "smooth",
            });
        }
    }

    const todosPanos = data?.planospainel ?? [];
    const planos = todosPanos.filter((p) =>
        p.id == '1' || p.id == '4'
    );

    // Se idMaisVendido foi configurado manualmente, sobrescreve o campo nos planos filtrados
    const planosFinais = idMaisVendido
        ? planos.map((p) => ({ ...p, maisvendido: p.id === idMaisVendido ? "Sim" : "Não" }))
        : planos;

    return {
        loading,
        error,
        planos: planosFinais,
        tiposMensalidade: data?.tipodemensalidade ?? [],
        comparacao: data?.comparacaodemoduloscad ?? [],
        tipodemensalidadeSelecionado,
        setTipodemensalidadeSelecionado,
        plansScrollRef,
        tabelaComparacaoRef,
        scrollPlanos,
    };
}
