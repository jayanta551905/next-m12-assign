import getAllPosts from "@/utility/getAllPost";
import Link from "next/link";

export default async function Blog() {
  const posts = await getAllPosts();
  return (
    <main>
      <div>
        <section>
          <h1 className="w-96 mx-auto text-2xl font-bold mb-8">
            Blog post list
          </h1>
          {posts.map((post) => {
            return (
              <div
                className="card card-compact w-96 bg-base-100 shadow-xl mb-5 mx-auto"
                key={post.id}
              >
                <figure>
                  <img src={post.img} alt="Image" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
                  <p>{post.short}</p>
                  <div className="card-actions justify-end">
                    <Link href={`/blog/${post.id}`}>
                      <button className="btn btn-primary">Read more</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}
