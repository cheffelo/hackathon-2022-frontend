import { Unity, useUnityContext } from "react-unity-webgl";

const Game = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/game.loader.js",
    dataUrl: "/game.data.br",
    frameworkUrl: "/game.framework.js.br",
    codeUrl: "/game.wasm.br",
  });

  return (
    <Unity
      unityProvider={unityProvider}
      style={{ width: "100vw", height: "100vh" }}
    />
  );
};

export default Game;
