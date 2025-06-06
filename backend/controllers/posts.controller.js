import db from "../db.js";
export const getAllPosts = async (req, res, next) => {
  try {
    const searchTerm = req.query.searchTerm || "";
    const [data] = await db.query(
      "SELECT * FROM wp_posts WHERE post_status = ? AND comment_status = ? AND ping_status = ? AND post_title LIKE ? ORDER BY post_date DESC",
      ["publish", "open", "open", `%${searchTerm}%`]
    );
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};
export const getPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [[data]] = await db.query("SELECT * FROM wp_posts WHERE id = ?", [
      id,
    ]);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};
