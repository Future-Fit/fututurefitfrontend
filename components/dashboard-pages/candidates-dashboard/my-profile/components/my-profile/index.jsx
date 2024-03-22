import FormInfoBox from "./FormInfoBox";
import PictureUpload from "./PictureUpload";

const index = () => {
  return (
    <div className="widget-content">
      <PictureUpload />
      {/* End logo and cover photo components */}

      <FormInfoBox />
      {/* compnay info box */}
    </div>
  );
};

export default index;
