
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";

const Post = ({postData}) => {
  console.log(postData);
  return (
    <Layout>
      <p>Film name: {postData.name}</p>
      <img
        src={postData.image.original}
        width={300}
        height={400}
        alt='...'
      />

      <Link href='/posts'>Back to Posts</Link>
    </Layout>
  );
};

export default Post;

export async function getStaticPaths() {
   const request = await fetch(`https://api.tvmaze.com/shows`);
   const data = await request.json();
   const paths = data.map(element => {
    return {
        params:{
            id:`${element.id}`
        }
       }
   })
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const request = await fetch(`https://api.tvmaze.com/shows/${params.id}`);
  const postData = await request.json();

  return {
    props: {
      postData,
    },
  };
}
