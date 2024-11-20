const XLSX = require("xlsx");
const fs = require("fs");
const dataModel = require("../model/dataModel");

exports.importExcel = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "Please upload the file" });
    }

    const filepath = req.file.path;
    const workbook = XLSX.readFile(filepath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    const dataToInsert = worksheet.map((row) => ({
      country: row["Country"],
      year: row["Year"],
      rank: row["Rank"],
      total: row["Total"],
    }));

    await dataModel.insertMany(dataToInsert);
    fs.unlinkSync(filepath);

    return res
      .status(200)
      .json({ success: true, message: "Data imported successfully" });
  } catch (error) {
    console.error("Error while importing Excel:", error);
    return res
      .status(500)
      .json({ success: false, message: "Error while importing data" });
  }
};
