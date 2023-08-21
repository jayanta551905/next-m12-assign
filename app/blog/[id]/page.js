import getBlogPost from "@/utility/getBlogPost";

export default async function SingleBlog({ params }) {
  const id = params.id;
  const post = await getBlogPost(id);
  return (
    <main>
      <div>
        <section>
          <h1 className="w-96 mx-auto text-2xl font-bold mb-8">{post.title}</h1>
          <div>
            <div>
              <img src={post.img} alt="Image" />
            </div>
            <div>
              <p>{post.short}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
