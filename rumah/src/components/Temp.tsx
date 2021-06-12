import './ExploreContainer.css';

const Temp = (props: any) => {
  return (
    <>
     <div className="mt-10 flex w-full">
          <div className="flex-1"></div>
          <h1 className="flex-center text-4xl text-green-900">RUMAH</h1>
          <div className="flex-1"></div>
      </div>
      <div className="flex w-full  ">
          <div className="flex-1"></div>
          <h1 className="mt-10 text-6xl">{props.temp}&deg;</h1>
          <div className="flex-1"></div>
      </div>
    </>
  );
};

export default Temp;
