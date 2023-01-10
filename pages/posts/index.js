import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function Posts({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Films</title>
      </Head>
      <ul>
        {posts.map(({id,name,language,url}) => {
          
          return (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                {name}
                <br/>
                {language}
                <br/>
                {url}
                </Link>
            </li>
          );
        })}
      </ul>
      Posts
    </Layout>
  );
}

export async function getStaticProps() {
  const request = await fetch("https://api.tvmaze.com/shows");
  const posts = await request.json();

  return {
    props: {
      posts,
    },
  };
}
