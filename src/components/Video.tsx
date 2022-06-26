import Button from "./button/Button";
import Card from "./videoSectionCard/Card";

const Video = () => {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        {/* O elemento ocupa o maximo possivel de largura e de altura */}
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video"></div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        {/* Items-start utilizado para colocar o text mais pra cima possível */}
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              Aula - 1 - Abertura do Ignite lab
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Nessa aula vamos dar início ao projeto criando a estrutura base da
              aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também
              realizar o setup do nosso projeto no GraphCMS criando as entidades
              da aplicação e integrando a API GraphQL gerada pela plataforma no
              nosso front-end utilizando Apollo Client.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src="https://github.com/diego3g.png"
                alt="teacher image"
              />

              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  Diego Fernandes
                </strong>
                <span className="text-gray-200 text-sm block">
                  CTO @ Rocketseat
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
