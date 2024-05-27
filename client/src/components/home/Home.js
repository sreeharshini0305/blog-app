import "./Home.css";
import articleImage from "../../assets/Article-Writing-1.jpg";

function Home() {
  return (
    <div className='articleHome'>
      <div className="flex-container">
        <img src={articleImage} alt="" className="artcleImage" style={{
          height: '400px', 
          borderRadius: '10px', 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
          marginTop: '30px'
        }} />
        <div className="text-container">
          <h1 style={{color:'#4F4A41', padding: '20px 0'}}> Write. Publish. Connect.</h1>
          <p className="lead" style={{textAlign: 'left'}}>
            Welcome to Blog Voyage, your ultimate destination for sharing your voice with the world. At Blog Voyage, we believe everyone has a story to tell, and our platform is designed to make your storytelling journey effortless and enjoyable. With our intuitive and user-friendly editor, you can craft stunning blog posts, rich with multimedia and personal flair. Once your masterpiece is ready, publishing is just a click away, instantly connecting you with a global audience eager to engage with your content.

            But Blog Voyage is more than just a publishing platform; it’s a community. Connect with fellow bloggers, share ideas, and build a network of like-minded individuals who are passionate about writing and sharing their experiences. Whether you’re an aspiring writer looking to make your mark, a seasoned blogger wanting to expand your reach, or someone who simply loves to share stories, Blog Voyage offers the tools and community you need to succeed.

            Join Blog Voyage today and embark on a journey where your words can make a real impact. Write. Publish. Connect. Your voyage begins here. Let’s write the future together.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;