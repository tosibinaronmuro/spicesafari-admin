import multer from "multer";

export const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

export const uploadMulter = multer({
  storage,
});
