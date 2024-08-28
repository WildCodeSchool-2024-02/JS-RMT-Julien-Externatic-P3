const multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    if (file.filename === "CV") {
      cb(null, "public/upload/CV");
    } else {
      cb(null, "public/");
    }
  },
  filename(req, file, cb) {
    const fileArray = file.originalname.split(".");
    const extension = fileArray.pop();
    const id = Date.now();
    cb(null, `${fileArray.join("-")}-${id}.${extension}`);
  },
});

const upload = multer({ storage });

module.exports = upload;
