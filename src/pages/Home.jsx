import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
  
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet. minus nihil.",
      desc: "Lorem ipsum dolor sit amet. Qui rerum maxime ad sunt molestias id optio tempora ea voluptatem aliquid aut nesciunt velit id magnam possimus et assumenda sint.",
      img: "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/05/cyberpunk-edgerunners.jpg?resize=1280%2C720&quality=80&ssl=1"
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet. minus nihil.",
      desc: "Lorem ipsum dolor sit amet. Qui rerum maxime ad sunt molestias id optio tempora ea voluptatem aliquid aut nesciunt velit id magnam possimus et assumenda sint.",
      img: "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/05/cyberpunk-edgerunners.jpg?resize=1280%2C720&quality=80&ssl=1"
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet. minus nihil.",
      desc: "Lorem ipsum dolor sit amet. Qui rerum maxime ad sunt molestias id optio tempora ea voluptatem aliquid aut nesciunt velit id magnam possimus et assumenda sint.",
      img: "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/05/cyberpunk-edgerunners.jpg?resize=1280%2C720&quality=80&ssl=1"
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet. minus nihil.",
      desc: "Lorem ipsum dolor sit amet. Qui rerum maxime ad sunt molestias id optio tempora ea voluptatem aliquid aut nesciunt velit id magnam possimus et assumenda sint.",
      img: "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/05/cyberpunk-edgerunners.jpg?resize=1280%2C720&quality=80&ssl=1"
    },
  ];

  return (
    <div className='home'>
      <div className="posts">
        {posts.map((post) => (
          <div className='post' key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home