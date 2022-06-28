import { DefaultUi, Player, Youtube } from "@vime/react";
import { useQuery } from "@apollo/client";
import { GET_LESSON_BY_SLUG_QUERY } from "../Query";
import "@vime/core/themes/default.css";
import Button from "./button/Button";
import Card from "./videoSectionCard/Card";
 
interface GetLessonBySlugResponse {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      bio: string;
      avatarURL: string;
      name: string
    }
  }
}
interface VideoProps {
  lessonSlug: string;
}

const Video = (props: VideoProps) => {

  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: props.lessonSlug
    }
  })

  if(!data) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        {/* O elemento ocupa o maximo possivel de largura e de altura */}
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
              <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        {/* Items-start utilizado para colocar o text mais pra cima possível */}
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
            {data.lesson.title}
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
            {data.lesson.description}
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src={data.lesson.teacher.avatarURL}
                alt="teacher image"
              />

              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                {data.lesson.teacher.name}
                </strong>
                <span className="text-gray-200 text-sm block">
                {data.lesson.teacher.bio}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Button typeButton="primary" />
            <Button typeButton="secondary" />
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2 ">
          <Card
            title="Material complementar"
            content="Acesse o material complementar para acelerar o seu
            desenvolvimento"
            iconType="FileArrowDown"
          />
          <Card
            title="Wallpapers exclusivos"
            content="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
            iconType="ImageSquare"
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
