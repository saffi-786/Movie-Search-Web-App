const IMGPATH = "https://image.tmdb.org/t/p/w500";

function Box({ img, title }) {
  return (
    <div className="shadow-md rounded-lg min-h-[200px] mt-3 overflow-hidden">
      <img src={IMGPATH + img} alt="" className="w-full overflow-hidden" />
      <div className="flex justify-between items-center p-1">
        <span className="font-bold">{title}</span>
      </div>
    </div>
  );
}
export default Box;
