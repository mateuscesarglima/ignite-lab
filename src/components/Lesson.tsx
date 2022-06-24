import { CheckCircle, Lock } from "phosphor-react";
//função do date fns que verifica se uma data que ta sendo
//passada por parâmetro já passou quando se compara ao dia de hoje.
import { format, isPast } from "date-fns";

import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
  // se o type for igual a 'live' é conteudo ao vivo
  // se o type for igual a 'class' é aula prática
}

const Lesson = (props: LessonProps) => {

  const isLessonAvailable = isPast(props.availableAt);
  // EEEE = dia da semana
  /*
   O que fica dentro de aspas simples não vai ser formatado
   Vai ser apenas renderizado na tela
  */  
  const availableDateFormatted = format(props.availableAt,"EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  })
  return (
    <a href="#">
      <span className="text-gray-300">{availableDateFormatted}</span>
      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex item-center justify-between">
          {isLessonAvailable ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold items-center">
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">{props.title}</strong>
      </div>
    </a>
  );
};

export default Lesson;
