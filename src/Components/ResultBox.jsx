import Box from "./Box";

function ResultBox({ movies }) {
  const boxes = movies.map((item, index) => {
    return (
      <Box
        key={index}
        img={item.poster_path}
        title={item.original_title}
        overview={item.overview}
      />
    );
  });
  return <div className=" w-full grid md:grid-cols-4 gap-5">{boxes}</div>;
}
export default ResultBox;
