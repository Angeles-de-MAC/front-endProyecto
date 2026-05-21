"use client"

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { H1, H3, P, Muted } from "@/components/ui/typography";
import { 
    RiCalendarLine, 
    RiTimeLine, 
    RiMapPinLine, 
    RiVideoChatLine, 
    RiUserFollowLine, 
    RiBookOpenLine, 
    RiArrowLeftLine, 
    RiCheckLine,
    RiSearchLine
} from "@remixicon/react";

// Mock data representing asesorias based on the database schema
const initialAsesorias = [
    {
        id: "1",
        tema: "Límites y Continuidad en Varias Variables",
        materia: "Cálculo Diferencial e Integral I",
        semestre: 1,
        asesor: "Dr. Roberto Hernández",
        fecha: "2026-05-25",
        hora: "10:00 - 11:00",
        duracion: 60,
        modalidad: "presencial",
        salon: "Cubículo 4, Edificio de Matemáticas",
        estado: "disponible"
    },
    {
        id: "2",
        tema: "Espacios Vectoriales e Isomorfismos",
        materia: "Álgebra Superior I",
        semestre: 1,
        asesor: "Dra. Maria González",
        fecha: "2026-05-25",
        hora: "12:00 - 13:00",
        duracion: 60,
        modalidad: "online",
        enlace: "https://meet.google.com/abc-defg-hij",
        estado: "disponible"
    },
    {
        id: "3",
        tema: "Estructuras de Control Condicionales y Ciclos",
        materia: "Programación I",
        semestre: 2,
        asesor: "M. en C. Carlos Mendoza",
        fecha: "2026-05-26",
        hora: "16:00 - 17:30",
        duracion: 90,
        modalidad: "online",
        enlace: "https://meet.google.com/xyz-uvw-rst",
        estado: "disponible"
    },
    {
        id: "4",
        tema: "Integración Numérica y Regla de Simpson",
        materia: "Análisis Numérico",
        semestre: 4,
        asesor: "Dra. Maria González",
        fecha: "2026-05-27",
        hora: "11:00 - 12:00",
        duracion: 60,
        modalidad: "presencial",
        salon: "Sala de Asesorías A",
        estado: "disponible"
    },
    {
        id: "5",
        tema: "Normalización de Bases de Datos (1NF, 2NF, 3NF)",
        materia: "Bases de Datos",
        semestre: 5,
        asesor: "Dr. Carlos Ramírez",
        fecha: "2026-05-28",
        hora: "14:00 - 15:00",
        duracion: 60,
        modalidad: "presencial",
        salon: "Laboratorio L2, Edificio O",
        estado: "disponible"
    }
];

export default function AsesoriasPage() {
    const [asesorias, setAsesorias] = useState(initialAsesorias);
    const [filterModalidad, setFilterModalidad] = useState("all");
    const [filterSemestre, setFilterSemestre] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [bookedId, setBookedId] = useState<string | null>(null);

    const handleBook = (id: string) => {
        setBookedId(id);
        setAsesorias(prev => prev.map(a => a.id === id ? { ...a, estado: "reservada" } : a));
        setTimeout(() => {
            setBookedId(null);
        }, 3000);
    };

    const filteredAsesorias = asesorias.filter(a => {
        const matchModalidad = filterModalidad === "all" || a.modalidad === filterModalidad;
        const matchSemestre = filterSemestre === "all" || String(a.semestre) === filterSemestre;
        const matchSearch = a.tema.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            a.materia.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            a.asesor.toLowerCase().includes(searchTerm.toLowerCase());
        return matchModalidad && matchSemestre && matchSearch;
    });

    return (
        <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto w-full">
                
                {/* Back to Home Link */}
                <div className="mb-6">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#003366] dark:text-blue-400 hover:underline font-semibold">
                        <RiArrowLeftLine className="size-4" /> Volver al Inicio
                    </Link>
                </div>

                {/* Hero Header */}
                <div className="text-center md:text-start mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <H1 className="text-blue-900 dark:text-blue-100 font-bold mb-2">Asesorías Académicas</H1>
                        <P className="text-foreground/70 max-w-2xl">
                            Reserva una sesión personalizada de asesoría presencial u online con nuestros asesores y profesores calificados para resolver tus dudas.
                        </P>
                    </div>
                    
                    {/* Visual Badge */}
                    <div className="bg-[#B8860B]/10 dark:bg-yellow-500/5 border border-[#B8860B]/30 rounded-2xl px-5 py-4 flex items-center gap-4 self-center md:self-auto">
                        <div className="bg-[#B8860B] rounded-full p-2.5 text-white">
                            <RiUserFollowLine className="size-6" />
                        </div>
                        <div className="text-left">
                            <h4 className="font-bold text-sm text-blue-900 dark:text-amber-400">Apoyo Personalizado</h4>
                            <p className="text-xs text-foreground/75">Asesorías individuales gratuitas.</p>
                        </div>
                    </div>
                </div>

                {/* Filters Section */}
                <div className="bg-blue-700/5 dark:bg-blue-950/20 border border-blue-900/10 dark:border-blue-800/30 rounded-2xl p-6 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
                    
                    {/* Search Bar */}
                    <div className="relative w-full md:max-w-md">
                        <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/50 size-5" />
                        <input
                            type="text"
                            placeholder="Buscar por tema, materia o asesor..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 w-full py-2 bg-background border border-input rounded-xl text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        />
                    </div>

                    {/* Dropdown Filters */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <div className="flex items-center gap-2 w-full sm:w-auto">
                            <span className="text-xs font-semibold text-blue-900 dark:text-zinc-300 whitespace-nowrap">Modalidad:</span>
                            <select
                                value={filterModalidad}
                                onChange={(e) => setFilterModalidad(e.target.value)}
                                className="w-full sm:w-[160px] p-2 text-sm bg-background border border-input rounded-xl focus:outline-none focus:ring-1"
                            >
                                <option value="all">Todas</option>
                                <option value="presencial">Presencial</option>
                                <option value="online">En línea</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-2 w-full sm:w-auto">
                            <span className="text-xs font-semibold text-blue-900 dark:text-zinc-300 whitespace-nowrap">Semestre:</span>
                            <select
                                value={filterSemestre}
                                onChange={(e) => setFilterSemestre(e.target.value)}
                                className="w-full sm:w-[160px] p-2 text-sm bg-background border border-input rounded-xl focus:outline-none focus:ring-1"
                            >
                                <option value="all">Todos</option>
                                <option value="1">1er Semestre</option>
                                <option value="2">2do Semestre</option>
                                <option value="4">4to Semestre</option>
                                <option value="5">5to Semestre</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Booking confirmation notice */}
                {bookedId && (
                    <div className="mb-6 p-4 bg-emerald-500/10 dark:bg-emerald-950/20 border border-emerald-500 text-emerald-700 dark:text-emerald-400 rounded-xl flex items-center gap-3 animate-fade-in">
                        <RiCheckLine className="size-6 bg-emerald-500 text-white rounded-full p-0.5" />
                        <div>
                            <p className="font-bold">¡Reservación exitosa!</p>
                            <p className="text-xs opacity-90">Se ha enviado un correo con la confirmación y los detalles de la sesión.</p>
                        </div>
                    </div>
                )}

                {/* Cards Grid */}
                {filteredAsesorias.length === 0 ? (
                    <div className="text-center py-16 bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800">
                        <RiBookOpenLine className="size-12 mx-auto text-foreground/30 mb-4" />
                        <H3 className="text-foreground/75 font-semibold mb-1">No se encontraron asesorías</H3>
                        <P className="text-foreground/50 text-sm">Prueba ajustando los filtros de búsqueda.</P>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredAsesorias.map((a) => (
                            <Card 
                                key={a.id}
                                className={`flex flex-col h-full bg-white dark:bg-zinc-900 border border-transparent dark:border-zinc-800 rounded-2xl shadow-md transition-all duration-300 ring-0 ${
                                    a.estado === "reservada" ? "opacity-75 border-zinc-200 dark:border-zinc-800" : "hover:shadow-xl"
                                }`}
                            >
                                <CardHeader className="pb-3">
                                    <div className="flex justify-between items-start gap-2 mb-2">
                                        <span className="bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 px-3 py-0.5 rounded-full text-xs font-semibold">
                                            Semestre {a.semestre}
                                        </span>
                                        
                                        {/* Modalidad Badge */}
                                        <span className={`px-3 py-0.5 rounded-full text-xs font-bold flex items-center gap-1 ${
                                            a.modalidad === 'online' 
                                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-950/40 dark:text-blue-300' 
                                                : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300'
                                        }`}>
                                            {a.modalidad === 'online' ? (
                                                <><RiVideoChatLine className="size-3.5" /> En línea</>
                                            ) : (
                                                <><RiMapPinLine className="size-3.5" /> Presencial</>
                                            )}
                                        </span>
                                    </div>
                                    <CardTitle className="text-base text-blue-900 dark:text-zinc-100 font-bold leading-tight min-h-[48px] line-clamp-2">
                                        {a.tema}
                                    </CardTitle>
                                    <CardDescription className="text-xs text-foreground/60 flex items-center gap-1.5 mt-1 font-medium">
                                        <RiBookOpenLine className="size-4 text-[#B8860B]" /> {a.materia}
                                    </CardDescription>
                                </CardHeader>
                                
                                <CardContent className="flex-grow pb-4 flex flex-col gap-3">
                                    {/* Advisor info */}
                                    <div className="flex items-center gap-2.5 text-xs text-foreground/80 bg-zinc-50 dark:bg-zinc-950/40 p-2.5 rounded-xl border border-zinc-100 dark:border-zinc-800">
                                        <div className="bg-[#003366] text-white p-1 rounded-full">
                                            <RiUserFollowLine className="size-3.5" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-blue-950 dark:text-zinc-300">{a.asesor}</p>
                                            <p className="text-[10px] text-foreground/60">Asesor Académico</p>
                                        </div>
                                    </div>

                                    {/* Date and hour */}
                                    <div className="flex flex-col gap-1.5 text-xs text-foreground/75 mt-1">
                                        <div className="flex items-center gap-2">
                                            <RiCalendarLine className="size-4 text-foreground/60" />
                                            <span>Fecha: <strong className="text-foreground">{a.fecha}</strong></span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <RiTimeLine className="size-4 text-foreground/60" />
                                            <span>Horario: <strong className="text-foreground">{a.hora}</strong> ({a.duracion} min)</span>
                                        </div>
                                        
                                        {/* Meeting point / salon / link */}
                                        <div className="flex items-start gap-2 mt-1">
                                            {a.modalidad === 'online' ? (
                                                <>
                                                    <RiVideoChatLine className="size-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                                    <span className="line-clamp-1">Enlace: <span className="text-blue-500 dark:text-blue-400 font-medium">{a.enlace}</span></span>
                                                </>
                                            ) : (
                                                <>
                                                    <RiMapPinLine className="size-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                                    <span className="line-clamp-2">Lugar: <strong className="text-foreground">{a.salon}</strong></span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                                
                                <CardFooter className="pt-2">
                                    {a.estado === "reservada" ? (
                                        <Button 
                                            disabled 
                                            className="w-full bg-zinc-200 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-500 border-none ring-0 font-bold"
                                        >
                                            Reservada
                                        </Button>
                                    ) : (
                                        <Button 
                                            onClick={() => handleBook(a.id)}
                                            className="w-full bg-[#003366] text-white hover:bg-[#002244] dark:bg-blue-600 dark:hover:bg-blue-700 border-none ring-0 font-bold transition-all"
                                        >
                                            Reservar Sesión
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
