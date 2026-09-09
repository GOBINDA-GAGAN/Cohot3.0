import api from "./axios";

// Get all files
export const getFiles = () => {
  return api.get("/files");
};

// Upload file
export const uploadFileApi = (file, onProgress) => {
  return api.post("/files", file, {
    headers: {
      filename: file.name,
    },
    onUploadProgress: onProgress,
  });
};

// Delete file
export const deleteFileApi = (filename) => {
  return api.delete("/files", {
    data: filename,
  });
};

// Rename file
export const renameFileApi = (oldFilename, newFilename) => {
  return api.patch("/files", {
    oldFilename,
    newFilename,
  });
};