import { ProductImage } from "@modules/product/domain";
import { Card, Input } from "./components";

interface Props {
  handleChangeImages(e: FileList): void;
  images: Array<ProductImage>;
  handleDeleteImage(id: string): void;
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
        {images.map((i) => (
          <Card
            key={i.id}
            source={i.source}
            name={i.name}
            size={i.size}
            handleDelete={() => handleDeleteImage(i.id)}
          />
        ))}
      </div>
    </div>
  );
}
