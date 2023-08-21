export default async function getAllPost() {
  const res = await fetch("https://basic-blog.teamrabbil.com/api/post-list/2");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
