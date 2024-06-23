import DeleIcon from "../icons/DeleteIcon";

type PreviewImageProps = {
  onRemoveImage: () => void;
  file: File[];
};

const PreviewImage = ({ onRemoveImage, file }: PreviewImageProps) => {
  return (
    <div className="w-1/2 h-64 relative">
      <div
        onClick={onRemoveImage}
        className="w-8 h-8 absolute top-2 right-2 rounded-full bg-black flex justify-center items-center cursor-pointer"
      >
        <DeleIcon className=" text-red-500 w-5 h-5" />
      </div>
      <img
        src={URL.createObjectURL(file[0])}
        alt="preview image"
        className="w-full h-full"
      />
    </div>
  );
};

export default PreviewImage;
