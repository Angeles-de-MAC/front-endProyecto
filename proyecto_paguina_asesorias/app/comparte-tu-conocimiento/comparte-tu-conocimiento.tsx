import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldLabel, FieldGroup, FieldSet } from "@/components/ui/field";
import { H1, H4, Muted, P } from "@/components/ui/typography";

import {
  RiArrowUpLine,
  RiCloudLine,
  RiFile2Fill,
  RiFile2Line,
  RiSlideshowLine,
} from "@remixicon/react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const shareYourKnowledgeOptions = [
  // Enlaces
  {
    icon: <RiFile2Line className="size-6 text-background" />,
    title: "Papers",
    description: "Artículos académicos",
  },
  // Apuntes
  {
    icon: <RiFile2Fill className="size-6 text-background" />,
    title: "Apuntes",
    description: "Notas de clase",
  },
  // Presentaciones
  {
    icon: <RiSlideshowLine className="size-6 text-background" />,
    title: "Presentaciones",
    description: "Diapositivas",
  },
];

export default function ShareYourKnowledge() {
  return (
    <>
      <main className="p-8 grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto w-full">
        <div className="flex flex-col lg:col-span-3">
          <H1 className="text-blue-900 dark:text-blue-100 text-center xs:text-start">
            Comparte tu conocimiento
          </H1>

          <P className="text-balance text-foreground/60 text-lg">
            Sube tus apuntes, presentaciones, papers o enlaces útiles para
            ayudar a otros estudiantes de la comunidad MAC
          </P>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {shareYourKnowledgeOptions.map((option, index) => (
              <Card
                key={index}
                className="items-center bg-yellow-200/10 dark:bg-yellow-500/5 ring-0 border border-transparent dark:border-yellow-600/30"
              >
                <CardContent className="bg-yellow-600 flex items-center justify-center rounded-full p-4">
                  {option.icon}
                </CardContent>

                <CardHeader className="flex items-center justify-center">
                  <CardTitle className="">
                    <H4 className="font-bold text-blue-900 dark:text-amber-400">
                      {option.title}
                    </H4>
                  </CardTitle>
                </CardHeader>

                <CardFooter className="border-t-0 bg-transparent">
                  <P className="text-foreground/80">{option.description}</P>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex border-yellow-600 border-2 p-6 bg-blue-700/5 dark:bg-blue-950/20 rounded-xl border-dashed lg:col-span-1 min-w-0">
          {/* upload form */}
          <div className="flex flex-col gap-4 w-full">
            {/* upload area */}
            <div className="flex flex-col items-center justify-center gap-2 border-zinc-300 dark:border-zinc-800 border-2 p-6 rounded-xl border-dashed">
              <RiCloudLine className="size-10 text-yellow-600" />
              <H4 className="text-blue-900 dark:text-blue-200 font-bold text-center">
                Arrastra y suelta tu recurso aquí
              </H4>

              <Muted className="text-foreground/70 text-center">
                o haz click para seleccionar
              </Muted>
            </div>

            {/* fields */}
            <div className="flex gap-4 flex-col">
              <FieldSet>
                <FieldGroup>
                  {/* semester */}
                  <Field className="w-full">
                    <FieldLabel className="font-bold text-blue-900 dark:text-zinc-300">
                      Semestre
                    </FieldLabel>
                    <Select>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Selecciona un semestre..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
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
                  </Field>

                  {/* course */}
                  <Field className="w-full">
                    <FieldLabel className="font-bold text-blue-900 dark:text-zinc-300">
                      Materia
                    </FieldLabel>
                    <Select>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Selecciona una materia..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="1">Álgebra Superior</SelectItem>
                          <SelectItem value="2">Cálculo 1</SelectItem>
                          <SelectItem value="3">Lógica Matemática</SelectItem>
                          <SelectItem value="4">Programación 1</SelectItem>
                          <SelectItem value="5">
                            Solución Algoritmica de Problemas
                          </SelectItem>
                          <SelectItem value="6">
                            Organización de Computadoras
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>

                  {/* resource type */}
                  <Field className="w-full">
                    <FieldLabel className="font-bold text-blue-900 dark:text-zinc-300">
                      Tipo de recurso
                    </FieldLabel>
                    <Select>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Selecciona un tipo de recurso..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="PDF">
                            PDF (Apuntes/Artículo)
                          </SelectItem>
                          <SelectItem value="PPT">
                            PPT (Presentación)
                          </SelectItem>
                          <SelectItem value="LINK">
                            Enlace (Video/Web)
                          </SelectItem>
                          <SelectItem value="CODE">
                            Código (Script/Código)
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                </FieldGroup>
              </FieldSet>

              <FieldSet>
                <FieldGroup>
                  {/* title */}
                  <Field className="w-full">
                    <FieldLabel className="font-bold text-blue-900 dark:text-zinc-300">
                      Título
                    </FieldLabel>
                    <Input
                      placeholder="Ej. Introducción al Cálculo Diferencial e Integral..."
                      className="bg-background"
                    />
                  </Field>

                  {/* description */}
                  <Field className="w-full">
                    <FieldLabel className="font-bold text-blue-900 dark:text-zinc-300">
                      Descripción
                    </FieldLabel>
                    <Textarea
                      placeholder="Describe brevemente el contenido de tu material."
                      className="bg-background"
                    />
                  </Field>
                </FieldGroup>
              </FieldSet>
            </div>

            {/* submit button */}
            <div className="flex justify-center">
              <Button
                variant={"outline"}
                className="bg-emerald-200/50 text-emerald-700 hover:bg-emerald-200/70 dark:bg-emerald-950/40 dark:text-emerald-400 dark:hover:bg-emerald-950/60 ring-0 border border-transparent dark:border-emerald-800/30 font-bold"
              >
                <RiArrowUpLine /> Subir Recurso
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
