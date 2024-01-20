const IMGPATH = "https://image.tmdb.org/t/p/w500";

function Box({ img, title, overview }) {
  return (
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
      <div class="h-96 w-72">
        <img
          class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          src={IMGPATH + img}
          alt=""
        />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-xl font-bold text-white mb-1">{title}</h1>
        <p class="mb-3 text-md italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {overview}
        </p>
      </div>
    </div>
  );
}
export default Box;
