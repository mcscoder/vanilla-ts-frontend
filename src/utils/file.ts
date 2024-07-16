export async function extractImageFile(
  file: File
): Promise<{ imageName: string; imageUrl: string | ArrayBuffer | null }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      resolve({ imageName: file.name, imageUrl: reader.result });
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
}
