// components/CourseCard.tsx
import { Book, User, FileText } from 'lucide-react'; // O los iconos que prefieras

interface Props {
  semester: number;
  title: string;
  professor: string;
  resources: number;
}

export const CourseCard = ({ semester, title, professor, resources }: Props) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 transition-transform hover:scale-[1.02]">
      {/* Header con el icono de libro */}
      <div className="relative h-32 bg-[#003366] flex items-center justify-center">
        <div className="absolute top-3 left-3 bg-[#D4AF37] text-white text-xs px-2 py-1 rounded-full font-bold">
          Semestre {semester}
        </div>
        <Book size={48} className="text-white/40" />
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-5">
        <h3 className="text-[#003366] font-bold text-lg mb-4 h-12 line-clamp-2">
          {title}
        </h3>
        
        <div className="space-y-2 border-t pt-4 border-yellow-500">
          <div className="flex items-center text-gray-600 text-sm">
            <User size={16} className="mr-2 text-yellow-600" />
            <span>{professor}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <FileText size={16} className="mr-2 text-yellow-600" />
            <span>{resources} recursos disponibles</span>
          </div>
        </div>
      </div>
    </div>
  );
};