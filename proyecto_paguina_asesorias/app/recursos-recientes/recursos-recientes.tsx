import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldGroup, FieldSet } from "@/components/ui/field";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { H1 } from "@/components/ui/typography/" 
import { RiFilePdfLine, RiSlideshowLine, RiLink, RiDownloadLine, RiDownload2Line } from "@remixicon/react";

const resources = [
    {
        id: 1,
        title: "Apuntes Completos de Cálculo Diferencial",
        type: "PDF",
        bg: "bg-red-500",
        icon: <RiFilePdfLine className="text-white text-6xl opacity-20" />,
        semester: "Semestre 1",
        course: "Cálculo Diferencial e Integral I",
        author: "Juan Pérez",
        downloads: 234
    },
    {
        id: 2,
        title: "Presentación: Límites y Continuidad",
        type: "PPT",
        bg: "bg-orange-500",
        icon: <RiSlideshowLine className="text-white text-6xl opacity-20" />,
        semester: "Semestre 1",
        course: "Cálculo Diferencial e Integral I",
        author: "María López",
        downloads: 189
    },
    {
        id: 3,
        title: "Ejercicios Resueltos de Álgebra Superior",
        type: "PDF",
        bg: "bg-red-500",
        icon: <RiFilePdfLine className="text-white text-6xl opacity-20" />,
        semester: "Semestre 1",
        course: "Álgebra Superior I",
        author: "Carlos Mendoza",
        downloads: 312
    },
    {
        id: 4,
        title: "Video Tutorial: Números Complejos",
        type: "LINK",
        bg: "bg-blue-500",
        icon: <RiLink className="text-white text-6xl opacity-20" />,
        semester: "Semestre 1",
        course: "Álgebra Superior I",
        author: "Ana García",
        downloads: 156
    },
    {
        id: 5,
        title: "Formulario de Geometría Analítica",
        type: "PDF",
        bg: "bg-red-500",
        icon: <RiFilePdfLine className="text-white text-6xl opacity-20" />,
        semester: "Semestre 1",
        course: "Geometría Analítica I",
        author: "Luis Torres",
        downloads: 278
    },
    {
        id: 6,
        title: "Apuntes de Cálculo Multivariable",
        type: "PDF",
        bg: "bg-red-500",
        icon: <RiFilePdfLine className="text-white text-6xl opacity-20" />,
        semester: "Semestre 2",
        course: "Cálculo Diferencial e Integral II",
        author: "Pedro Sánchez",
        downloads: 267
    },
    {
        id: 7,
        title: "Ejercicios de Álgebra Lineal",
        type: "PDF",
        bg: "bg-red-500",
        icon: <RiFilePdfLine className="text-white text-6xl opacity-20" />,
        semester: "Semestre 2",
        course: "Álgebra Lineal I",
        author: "Sofia Ramírez",
        downloads: 298
    },
    {
        id: 8,
        title: "Código Python: Algoritmos Básicos",
        type: "LINK",
        bg: "bg-blue-500",
        icon: <RiLink className="text-white text-6xl opacity-20" />,
        semester: "Semestre 2",
        course: "Programación I",
        author: "Diego Morales",
        downloads: 445
    },
    {
        id: 9,
        title: "Resumen de Ecuaciones Diferenciales",
        type: "PDF",
        bg: "bg-red-500",
        icon: <RiFilePdfLine className="text-white text-6xl opacity-20" />,
        semester: "Semestre 3",
        course: "Ecuaciones Diferenciales I",
        author: "Laura Jiménez",
        downloads: 223
    }
];

export default function RecentResources() {
    return (
        <>
            <main className="flex flex-col p-8 gap-8">
                <div className="flex flex-row items-center gap-8">
                    <H1 className="text-left text-blue-900">
                        Recursos Recientes
                    </H1>

                    <FieldSet>
                        <FieldGroup className="flex-row items-center gap-4">
                            <Field className="min-w-fit">
                                <Select>
                                    <SelectTrigger className="bg-background min-w-fit">
                                        <SelectValue placeholder="Todos los tipos" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="1">Paper</SelectItem>
                                            <SelectItem value="2">Apuntes</SelectItem>
                                            <SelectItem value="3">Presentación</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </Field>

                            <Field className="min-w-fit">
                                <Select>
                                    <SelectTrigger className="bg-background min-w-fit">
                                        <SelectValue placeholder="Todos los semestres" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="1">1</SelectItem>
                                            <SelectItem value="2">2</SelectItem>
                                            <SelectItem value="3">3</SelectItem>
                                            <SelectItem value="4">4</SelectItem>
                                            <SelectItem value="5">5</SelectItem>
                                            <SelectItem value="6">6</SelectItem>
                                            <SelectItem value="7">7</SelectItem>
                                            <SelectItem value="8">8</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resources.map((resource) => (
                        <Card key={resource.id} className="gap-0 p-0 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group border-0 ring-0">
                            <div className={`h-32 ${resource.bg} relative overflow-hidden`}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {resource.icon}
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-bold">{resource.type}</span>
                                </div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <div className="w-12 h-12 bg-[#B8860B] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-0 group-hover:scale-100">
                                        <RiDownloadLine className="text-white text-xl" />
                                    </div>
                                </div>
                            </div>
                            <CardContent className="p-5">
                                <h3 className="font-bold text-[#003366] mb-2 line-clamp-2 min-h-[48px] text-base">{resource.title}</h3>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">{resource.semester}</span>
                                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs line-clamp-1">{resource.course}</span>
                                </div>
                                <div className="flex items-center justify-between text-xs text-gray-500">
                                    <span>{resource.author}</span>
                                    <div className="flex items-center gap-1">
                                        <RiDownload2Line /><span>{resource.downloads}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </main>
        </>
    )
}