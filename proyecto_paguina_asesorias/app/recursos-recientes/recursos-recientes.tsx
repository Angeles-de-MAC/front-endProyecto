"use client"

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { H1 } from "@/components/ui/typography/";
import { RiFilePdfLine, RiSlideshowLine, RiLink, RiCodeLine, RiDownloadLine, RiDownload2Line } from "@remixicon/react";
import { createBrowserClient } from "@supabase/ssr";

interface Materia {
  id: string;
  nombre: string;
  codigo_materia: string;
  semestre: number;
  departamento: string | null;
}

interface Recurso {
  id: string;
  titulo: string;
  descripcion: string | null;
  archivo_url: string;
  tipo_archivo: 'PDF' | 'PPT' | 'LINK' | 'CODE';
  materia_id: string;
  autor_id: string | null;
  autor_nombre: string;
  descargas_count: number;
  estado: 'pendiente' | 'aprobado' | 'rechazado';
  creado_at: string;
  actualizado_at: string;
  materia?: Materia;
}

const rawSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const cleanSupabaseUrl = rawSupabaseUrl.replace(/\/rest\/v1\/?$/, "");

const supabase = createBrowserClient(
  cleanSupabaseUrl,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  {
    db: {
      schema: 'academico',
    },
  }
);

const getResourceConfig = (type: string) => {
    switch (type) {
        case 'PDF':
            return {
                bg: 'bg-red-500',
                icon: <RiFilePdfLine className="text-white text-6xl opacity-20" />
            };
        case 'PPT':
            return {
                bg: 'bg-orange-500',
                icon: <RiSlideshowLine className="text-white text-6xl opacity-20" />
            };
        case 'LINK':
            return {
                bg: 'bg-blue-500',
                icon: <RiLink className="text-white text-6xl opacity-20" />
            };
        case 'CODE':
            return {
                bg: 'bg-emerald-500',
                icon: <RiCodeLine className="text-white text-6xl opacity-20" />
            };
        default:
            return {
                bg: 'bg-gray-500',
                icon: <RiLink className="text-white text-6xl opacity-20" />
            };
    }
};

const SkeletonCard = () => (
    <Card className="gap-0 p-0 bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-md border border-transparent dark:border-zinc-800 ring-0 animate-pulse">
        <div className="h-32 bg-gray-200 dark:bg-zinc-800" />
        <CardContent className="p-5 flex flex-col gap-3">
            <div className="h-6 bg-gray-200 dark:bg-zinc-800 rounded w-3/4" />
            <div className="flex gap-2">
                <div className="h-5 bg-gray-200 dark:bg-zinc-800 rounded-full w-20" />
                <div className="h-5 bg-gray-200 dark:bg-zinc-800 rounded-full w-24" />
            </div>
            <div className="flex justify-between mt-2">
                <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-20" />
                <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-10" />
            </div>
        </CardContent>
    </Card>
);

export default function RecentResources() {
    const [allResources, setAllResources] = useState<Recurso[]>([]);
    const [selectedType, setSelectedType] = useState<string>("all");
    const [selectedSemester, setSelectedSemester] = useState<string>("all");
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchResources() {
            try {
                setLoading(true);
                setError(null);
                const { data, error } = await supabase
                    .from('recurso')
                    .select('*, materia:materia_id (*)')
                    .eq('estado', 'aprobado')
                    .order('creado_at', { ascending: false });

                if (error) {
                    throw error;
                }

                setAllResources(data || []);
            } catch (err) {
                console.error('Error fetching resources:', err);
                setError('No se pudieron cargar los recursos. Por favor, intenta de nuevo más tarde.');
            } finally {
                setLoading(false);
            }
        }

        fetchResources();
    }, []);

    const filteredResources = allResources.filter(resource => {
        const matchType = selectedType === "all" || resource.tipo_archivo === selectedType;
        const matchSemester = selectedSemester === "all" || String(resource.materia?.semestre) === selectedSemester;
        return matchType && matchSemester;
    });

    return (
        <>
            <main className="flex flex-col p-8 gap-8 max-w-[1200px] mx-auto w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
                    <H1 className="text-left text-blue-900 dark:text-blue-100">
                        Recursos Recientes
                    </H1>

                    <div className="flex flex-row flex-wrap items-center gap-4">
                        <div className="flex flex-row items-center gap-2">
                            <span className="text-sm font-semibold text-blue-900 dark:text-zinc-300 whitespace-nowrap">Tipo de recurso:</span>
                            <Select value={selectedType} onValueChange={(val) => setSelectedType(val || "all")}>
                                <SelectTrigger className="bg-background w-[180px]">
                                    <SelectValue placeholder="Todos los tipos" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="all">Todos los tipos</SelectItem>
                                        <SelectItem value="PDF">PDF (Apuntes/Artículo)</SelectItem>
                                        <SelectItem value="PPT">PPT (Presentación)</SelectItem>
                                        <SelectItem value="LINK">Enlace (Video/Web)</SelectItem>
                                        <SelectItem value="CODE">Código (Script/Código)</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex flex-row items-center gap-2">
                            <span className="text-sm font-semibold text-blue-900 dark:text-zinc-300 whitespace-nowrap">Semestre:</span>
                            <Select value={selectedSemester} onValueChange={(val) => setSelectedSemester(val || "all")}>
                                <SelectTrigger className="bg-background w-[180px]">
                                    <SelectValue placeholder="Todos los semestres" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="all">Todos los semestres</SelectItem>
                                        <SelectItem value="1">Semestre 1</SelectItem>
                                        <SelectItem value="2">Semestre 2</SelectItem>
                                        <SelectItem value="3">Semestre 3</SelectItem>
                                        <SelectItem value="4">Semestre 4</SelectItem>
                                        <SelectItem value="5">Semestre 5</SelectItem>
                                        <SelectItem value="6">Semestre 6</SelectItem>
                                        <SelectItem value="7">Semestre 7</SelectItem>
                                        <SelectItem value="8">Semestre 8</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                {error && (
                    <div className="p-4 text-red-800 bg-red-100 rounded-xl border border-red-200">
                        {error}
                    </div>
                )}

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                    </div>
                ) : filteredResources.length === 0 ? (
                    <div className="text-center py-12 text-gray-500 dark:text-zinc-400 bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 w-full">
                        No se encontraron recursos con los filtros seleccionados.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredResources.map((resource) => {
                            const config = getResourceConfig(resource.tipo_archivo);
                            return (
                                <Card 
                                    key={resource.id} 
                                    onClick={() => window.open(resource.archivo_url, '_blank')}
                                    className="gap-0 p-0 bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group border border-transparent dark:border-zinc-800 ring-0"
                                >
                                    <div className={`h-32 ${config.bg} relative overflow-hidden`}>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            {config.icon}
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-bold">
                                                {resource.tipo_archivo === 'LINK' ? 'ENLACE' : resource.tipo_archivo === 'CODE' ? 'CÓDIGO' : resource.tipo_archivo}
                                            </span>
                                        </div>
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                            <div className="w-12 h-12 bg-[#B8860B] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-0 group-hover:scale-100">
                                                <RiDownloadLine className="text-white text-xl" />
                                            </div>
                                        </div>
                                    </div>
                                    <CardContent className="p-5">
                                        <h3 className="font-bold text-[#003366] dark:text-zinc-100 mb-2 line-clamp-2 min-h-[48px] text-base">{resource.titulo}</h3>
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 px-3 py-1 rounded-full text-xs">
                                                Semestre {resource.materia?.semestre}
                                            </span>
                                            <span className="bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 px-3 py-1 rounded-full text-xs line-clamp-1">
                                                {resource.materia?.nombre}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-zinc-400">
                                            <span>{resource.autor_nombre}</span>
                                            <div className="flex items-center gap-1">
                                                <RiDownload2Line /><span>{resource.descargas_count}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                )}
            </main>
        </>
    );
}