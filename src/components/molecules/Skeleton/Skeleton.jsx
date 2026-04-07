import loadingGif from "../../../shared/assets/gifs/loading.gif";

export function Skeleton() {
  return (
    <div>
      <img src={loadingGif} alt="" />
    </div>
  );
}
