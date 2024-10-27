// src/pages/api/upload-image.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from '~~/utils/cloudinary';
import multiparty from 'multiparty'; 

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const form = new multiparty.Form();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(400).json({ message: 'Error parsing form data' });
      }

      try {
        const imageFile = files.file[0];
        const uploadResponse = await cloudinary.uploader.upload(imageFile.path, {
          folder: 'uploads',
        });

        res.status(200).json({ url: uploadResponse.secure_url });
      } catch (error) {
        res.status(500).json({ message: 'Error uploading image', error });
      }
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
