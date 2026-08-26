import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

/**
 * API Route Handler for File Uploads (Images & Local Videos)
 * Accepts multipart/form-data with a "file" field.
 * Saves uploaded file to public/uploads directory.
 * Returns { url: string }
 *
 * TODO: For production deployment (e.g. Vercel), replace local filesystem storage
 * with Cloudinary or AWS S3 upload SDKs:
 * e.g., const cloudinaryResponse = await cloudinary.uploader.upload(buffer);
 * return NextResponse.json({ url: cloudinaryResponse.secure_url });
 */

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No file provided in request." },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sanitize filename and create unique filename
    const fileExtension = path.extname(file.name) || ".png";
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}${fileExtension}`;

    // Target directory: public/uploads
    const uploadDir = path.join(process.cwd(), "public", "uploads");

    // Ensure directory exists
    await mkdir(uploadDir, { recursive: true });

    // Save file
    const filePath = path.join(uploadDir, filename);
    await writeFile(filePath, buffer);

    // Return public URL path
    const url = `/uploads/${filename}`;
    return NextResponse.json({ url }, { status: 201 });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload file. Please try again." },
      { status: 500 }
    );
  }
}
