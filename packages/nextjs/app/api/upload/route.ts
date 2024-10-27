// packages\nextjs\app\api\upload\route.ts
import { NextRequest, NextResponse } from 'next/server';
import formidable from "formidable";
import fs from 'fs';
import cloudinary from '~~/utils/cloudinary';

// Disable Next.js default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};


const parseForm = async (req: NextRequest): Promise<{ file: formidable.File }> => {
  const form = formidable({ multiples: false });
  return new Promise((resolve, reject) => {
    form.parse(req as any, (err, fields, files) => {
      if (err) return reject(err);
      resolve(files as { file: formidable.File });
    });
  });
};

// Route handler
export async function POST(req: NextRequest) {
  try {
    const { file } = await parseForm(req);
    const filePath = file.filepath;
    
    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'uploads', // You can specify a folder in Cloudinary
    });

    // Delete the temporary file
    fs.unlinkSync(filePath);

    // Respond with the image URL
    return NextResponse.json({ url: result.secure_url });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
  }
}
