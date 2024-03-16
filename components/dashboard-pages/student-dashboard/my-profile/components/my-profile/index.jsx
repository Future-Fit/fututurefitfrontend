import CvUploader from "@/components/dashboard-pages/candidates-dashboard/cv-manager/components/CvUploader";
import FormInfoBox from "./FormInfoBox";
import PictureUpload from "./PictureUpload";

const index = () => {
  return (
    <div className="widget-content">
      <PictureUpload />
      {/* End picture and cover photo components */}

      <FormInfoBox />

      {/* company info box */}
    </div>
  );
};

export default index;
