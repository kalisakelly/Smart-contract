// packages\nextjs\components\property\ImageUpload.tsx
'use client'
import { useCallback, useState, useEffect } from 'react';
import { X, Upload } from 'lucide-react';
import { useDropzone, Accept } from 'react-dropzone';
import axios from 'axios';
import toast from 'react-hot-toast';

interface ImageUploadProps {
  imageUrls?: string[];
  onUpload: (urls: string[]) => void;
}

export function ImageUpload({ imageUrls = [], onUpload }: ImageUploadProps) {
  const [images, setImages] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    return () => {
      imageUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [imageUrls]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (images.length + acceptedFiles.length > 4) {
        toast.error("You can only upload up to 4 images.");
        return;
      }

      const newImages = acceptedFiles.filter((file) => !images.some((img) => img.name === file.name));
      setImages((prevImages) => [...prevImages, ...newImages]);
      newImages.forEach((file) => uploadImage(file));
    },
    [images]
  );

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);
    const toastId = toast.loading("Uploading image...");

    try {
      const response = await axios.post("/api/upload-image", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const url = response.data.url;
      onUpload([...imageUrls, url]);
      toast.success("Image uploaded successfully", { id: toastId });
    } catch (error) {
      toast.error("Error uploading image", { id: toastId });
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = (index: number) => {
    const newImageUrls = imageUrls.filter((_, i) => i !== index);
    onUpload(newImageUrls);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] } as Accept,
    multiple: true,
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer"
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">Drag and drop images here, or click to select files (up to 4 images)</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {imageUrls?.map((url, index) => (
          <div key={index} className="relative group">
            <img src={url} alt={`Property image ${index + 1}`} className="w-full h-40 object-cover rounded-lg" />
            <button
              onClick={() => handleDelete(index)}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
      {uploading && <p className="text-sm text-gray-500 mt-2">Uploading...</p>}
    </div>
  );
}
