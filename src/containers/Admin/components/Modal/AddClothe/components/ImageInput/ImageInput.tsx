import { Card, Input } from "./components";

interface Props {
  handleChangeImages(e: FileList): void;
  images: Array<File>;
  handleDeleteImage(i: number): void;
}

export default function ImageInput({
  handleChangeImages,
  images,
  handleDeleteImage,
}: Props) {
  return (
    <div className="flex flex-col">
      <Input handleChangeImages={handleChangeImages} />

      <div className="flex flex-col gap-y-2">
        {images.map((i, index) => (
          <Card
            key={index}
            image={i}
            handleDelete={() => handleDeleteImage(index)}
          />
        ))}
      </div>
    </div>
  );
}
